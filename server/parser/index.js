/* eslint-disable no-global-assign */
const fs = require('fs')
const xml2js = require('xml2js')

const q = require('../db/client')
require = require('esm')(module, { mode: 'all' })
const log = require('../../services/logger').default
const pointsCalculator = require('./points')

/*
const xmlPath = 'C:\\projects\\tournaments\\0219\\mba\\190216_mba_q'
const shop = 't2j'
const type = 'Q'
*/

module.exports = function doTheParse(shop, type, xmlPath) {
  log.info('----------------------------------------------')
  log.info(`Parsing tournament ${xmlPath}`)
  log.info('----------------------------------------------')
  const parser = new xml2js.Parser()
  let data = fs.readFileSync(xmlPath, 'utf16le')

  const p = new Promise((resolve, reject) => {
    parser.parseString(data, async (err, result) => {
      if (err) {
        data = fs.readFileSync(xmlPath)
      }
    })

    parser.parseString(data, async (err, result) => {
      if (err) {
        log.error(err)
        reject(err)
      }

      const rawTournament = result.eventupload.event[0]
      const tournamentInfo = rawTournament.$

      // console.dir(rawTournament.participation[0].person)

      // -- Players
      const players = rawTournament.participation[0].person
      const dciList = players.map(p => p.$.id)
      const alreadyExistingPlayers = await q('players')
        .whereIn('dci', dciList)
        .map(aep => aep.dci)
      const newPlayers = players.filter(
        p => !alreadyExistingPlayers.includes(p.$.id),
      )
      const newPlayersInserted = await Promise.all(
        newPlayers.map(player =>
          q
            .insert({
              dci: player.$.id,
              name: `${player.$.first} ${player.$.last.slice(0, 1)}.`,
            })
            .into('players'),
        ),
      )
      log.info(`${newPlayersInserted.length} new players inserted`)

      // -- Rounds & results
      const entries = rawTournament.log[0].entry
      const creationEntry = entries.filter(
        entry => entry.$.operation === 'ROUND',
      )[0]
      const creationDate = creationEntry.$.date
      const roundSplitter = new RegExp(/(Playoff )?Round Started ([0-9]+)/)

      const rounds = entries.reduce(
        (acc, entry) => {
          const entryTitle = entry._
          const matches = entryTitle.match(roundSplitter)
          if (matches) {
            if (!matches[1]) {
              acc.swiss.push(matches[2])
            } else {
              acc.top8.push(matches[2])
            }
          }
          return acc
        },
        {
          swiss: [],
          top8: [],
        },
      )

      function outcome(x, p1) {
        switch (x) {
          case '1':
          case '3':
            if (p1) {
              return 'W'
            } else {
              return 'L'
            }
          case '2':
            return 'D'
          case '4':
          case '5':
            if (p1) {
              return 'L'
            } else {
              return 'W'
            }
          default:
            return '?'
        }
      }

      const matches = rawTournament.matches[0].round.reduce((acc, round) => {
        const roundNumber = round.$.number
        acc.push(
          round.match.reduce((acc2, m) => {
            acc2.push({
              round: roundNumber,
              dci: m.$.person,
              opponent: m.$.opponent,
              win: m.$.win,
              loss: m.$.loss,
              draw: m.$.draw,
              outcome: outcome(m.$.outcome, true),
              top8: rounds.top8.includes(roundNumber),
            })
            acc2.push({
              round: roundNumber,
              dci: m.$.opponent,
              opponent: m.$.person,
              win: m.$.loss,
              loss: m.$.win,
              draw: m.$.draw,
              outcome: outcome(m.$.outcome, false),
              top8: rounds.top8.includes(roundNumber),
            })
            return acc2
          }, []),
        )
        return acc
      }, [])

      // -- Tournament ID
      const tId = `${shop}${type}${creationDate.slice(0, 10).replace(/-/g, '')}`

      // -- The points
      const points = pointsCalculator(
        matches,
        players.length,
        rounds.swiss.length,
        rounds.top8.length > 0,
        type,
        tId,
      )

      const league = await q('leagues')
        .where('start', '<=', creationDate)
        .where('end', '>', creationDate)

      // -- Update each player with points
      const stuff = await Promise.all(
        points.map(async thisResult => {
          const thisPlayer = await q('players').where({ dci: thisResult.dci })
          if (!thisPlayer[0].leagues) {
            thisPlayer[0].leagues = []
          }
          const leagueIndex = thisPlayer[0].leagues.findIndex(
            l => parseInt(l.id) === parseInt(league[0].id),
          )
          if (leagueIndex === -1) {
            thisPlayer[0].leagues.push({
              id: league[0].id,
              // points: thisResult.ppalm,
              results: thisResult.tournaments,
            })
          } else {
            thisPlayer[0].leagues[leagueIndex].results = Object.assign(
              thisPlayer[0].leagues[leagueIndex].results,
              thisResult.tournaments,
            ) // points += thisResult.ppalm
          }
          // console.log(thisPlayer[0])
          return q('players')
            .where({ dci: thisPlayer[0].dci })
            .update({ leagues: JSON.stringify(thisPlayer[0].leagues) })
        }),
      )

      // -- The Tournament

      const thisTournament = {
        id: tId,
        shop,
        type,
        nbrounds: rounds.swiss.length,
        matches: JSON.stringify(matches),
        date: creationDate,
        sanctionnumber: tournamentInfo.sanctionnumber,
        eventguid: tournamentInfo.eventguid,
        headjudge: tournamentInfo.headjudge,
        coordinator: tournamentInfo.coordinator,
      }

      q.insert(thisTournament)
        .into('tournaments')
        .then(() => {
          log.info(`Tournament ${tId} saved`)
          resolve(tId)
        })
        .catch(err => {
          log.error('PROBLEM', err)
          reject(err)
        })

      // log.info(thisTournament)
      // console.dir(tournament)
    })
  })

  return p
}
