const _ = require('lodash')

const q = require('../../client')

function getAll({ lid }) {
  return q('tournaments')
    .select('id', 'shop', 'type', 'date', 'matches')
    .then(t =>
      t.sort((a, b) => {
        if (a.date < b.date) {
          return 1
        }
        return -1
      }),
    )
    .then(t =>
      t.map(thatTournament => {
        let swiss = 0
        let top8 = false
        const players = []
        thatTournament.matches.forEach(r => {
          r.forEach(m => {
            const nbRound = parseInt(m.round)
            if (nbRound > swiss && m.top8 === false) {
              swiss = nbRound
            }
            top8 = m.top8
            players.push(m.dci)
          })
        })
        thatTournament.nbSwiss = swiss
        thatTournament.top8 = top8
        thatTournament.players = _.uniq(players).length
        return thatTournament
      }),
    )
    .then(t => _.groupBy(t, 'shop'))
}

function getNumberOfTournaments({ lid }) {
  return q.raw('SELECT COUNT(*) FROM tournaments;')
}

function getNumberOfQualifierTournaments({ lid }) {
  return q.raw('SELECT COUNT(*) FROM tournaments where type=\'q\';')
}


module.exports = {
  getAll,
  getNumberOfTournaments,
  getNumberOfQualifierTournaments,
}
