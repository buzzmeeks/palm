/* eslint-disable no-global-assign */
const fs = require('fs')
const xml2js = require('xml2js')

const q = require('../db/client')
require = require('esm')(module, { mode: 'all' })
const log = require('../../services/logger').default

const xmlPath =
  '/Users/adrien/Downloads/WER PaLM/Février 2019/Troll2Jeux/T2J-Qualifier-2019-02-09.xml'

// -- SUPPOSED TO BE KNOWN
const shop = 't2j'
const type = 'Q'

const parser = new xml2js.Parser()
const data = fs.readFileSync(xmlPath, 'utf16le')
parser.parseString(data, async (err, result) => {
  if (err) {
    log.error(err)
    process.exit(1)
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
  log.info(
    `${
      newPlayersInserted.length
    } new players inserted into the motherfucking database`,
  )

  // -- Rounds & results
  const entries = rawTournament.log[0].entry
  const creationEntry = entries.filter(entry => entry.$.operation === 'CRE')[0]
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

  // console.log(rounds)
  // console.log(rawTournament.matches[0].round)
  const matches = rawTournament.matches[0].round.reduce((acc, round) => {
    const roundNumber = round.$.number
    // console.dir(round.match)
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

  // console.dir(matches.filter(m => m.top8))

  // -- The Tournament
  const thisTournament = {
    id: `${shop}${type}${creationDate.slice(0, 10).replace(/-/g, '')}`,
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

  await q
    .insert(thisTournament)
    .into('tournaments')
    .then(() => {
      log.info('tournament saved')
    })
    .catch(err => {
      log.error('PROBLEM', err)
    })

  // log.info(thisTournament)
  // console.dir(tournament)
})
