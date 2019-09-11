const distribution = require('./distribution')

function calculatePoints(matches, nbPlayers, nbSwiss, top8, type, tid) {
  const distSwiss = distribution.swiss.find(i => i.nbRound === nbSwiss)

  let qualifierBonus = 1
  if (type === 'q') {
    qualifierBonus = 2
  }

  const swissPoints = matches.reduce((acc, round) => {
    if (!round[0].top8) {
      round.forEach(match => {
        const thisPlayer = match.dci
        let index = acc.findIndex(player => player.dci === thisPlayer)
        if (thisPlayer) {
          if (index === -1) {
            const newEntry = { dci: thisPlayer, tournaments: {} }
            newEntry.tournaments[tid] = {
              pmatch: 0,
              ppalm: 0,
            }
            acc.push(newEntry)
            index = acc.length - 1
          }

          if (!acc[index].tournaments.hasOwnProperty(tid)) {
            acc[index].tournaments[tid] = {
              pmatch: 0,
              ppalm: 0,
            }
          }

          switch (match.outcome) {
            case 'W':
              acc[index].tournaments[tid].pmatch += 3
              break
            case 'D':
              acc[index].tournaments[tid].pmatch += 1
              break
          }
        }
      })
    }
    return acc
  }, [])

  const points = swissPoints.map(player => {
    player.tournaments[tid].ppalm =
      distSwiss.points[player.tournaments[tid].pmatch] + qualifierBonus
    return player
  })

  if (top8) {
    const top8Distribution = distribution.top8.find(
      i => nbPlayers >= i.from && nbPlayers <= i.to,
    )
    const pointsWithTop8 = matches.reduce((points, round) => {
      if (round[0].top8) {
        round.forEach(match => {
          const thisPlayer = match.dci
          const index = points.findIndex(player => player.dci === thisPlayer)
          switch (parseInt(match.round)) {
            case nbSwiss + 1:
              if (match.outcome === 'L') {
                points[index].tournaments[tid].ppalm =
                  top8Distribution.points[3] + qualifierBonus * 2
                points[index].tournaments[tid].top8 = '5 - 8'
              }
              break
            case nbSwiss + 2:
              if (match.outcome === 'L') {
                points[index].tournaments[tid].ppalm =
                  top8Distribution.points[2] + qualifierBonus * 2
                points[index].tournaments[tid].top8 = '3 - 4'
              }
              break
            case nbSwiss + 3:
              if (match.outcome === 'L') {
                points[index].tournaments[tid].ppalm =
                  top8Distribution.points[1] + qualifierBonus * 2
                points[index].tournaments[tid].top8 = '2'
              }
              if (match.outcome === 'W') {
                points[index].tournaments[tid].ppalm =
                  top8Distribution.points[0] + qualifierBonus * 2
                points[index].tournaments[tid].top8 = '1'
              }
              break
          }
        })
      }
      return points
    }, points)

    return pointsWithTop8
  }

  return points
}

module.exports = calculatePoints
