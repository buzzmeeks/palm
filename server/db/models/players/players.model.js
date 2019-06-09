const q = require('../../client')

const NB_BEST_RESULTS = 12

function getRankings({ lid }) {
  return q('players')
    .whereNotNull('leagues')
    .then(users =>
      users.map(u => {
        if (u.leagues) {
          const results = u.leagues.find(l => l.id === lid).results
          const orderedResults = Object.keys(results)
            .map(tid => results[tid])
            .sort((a, b) => {
              if (a.ppalm < b.ppalm) {
                return 1
              }
              return -1
            })
          orderedResults.splice(NB_BEST_RESULTS)
          u.points = orderedResults.reduce((a, i) => a + i.ppalm, 0)
        }
        return u
      }),
    )
    .then(rank => {
      rank.sort((a, b) => {
        if (a.points < b.points) {
          return 1
        }
        return -1
      })
      return rank
    })
}

module.exports = { getRankings }
