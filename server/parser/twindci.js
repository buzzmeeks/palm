const _ = require('lodash')
const bluebird = require('bluebird')

const q = require('../db/client')

const twins = {}
// -- Mickael T.
twins['6319625005'] = '6105347739'

twins['6213764007'] = '3115118815'
// -- Didier C.
twins['1203217957'] = '1318763279'

function mergeLeagues(l1, l2, all) {
  const mergedLeagues = []
  all.forEach(league => {
    const fl1 = l1.find(l => l.id === league.id)
    const fl2 = l2.find(l => l.id === league.id)
    mergedLeagues.push(_.merge(fl1, fl2))
  })
  return mergedLeagues
}

module.exports = async function mergeTwins() {
  const leagues = await q('leagues')
  return bluebird.resolve(Object.keys(twins)).map(src => {
    const dest = twins[src]

    return q('players')
      .where({ dci: src })
      .then(sp => {
        const sl = sp[0].leagues
        return q('players')
          .where({ dci: dest })
          .then(dp =>
            q('players')
              .where({ dci: dest })
              .update({
                leagues: JSON.stringify(
                  mergeLeagues(dp[0].leagues, sl, leagues),
                ),
              }),
          )
          .then(() =>
            q('players')
              .where({ dci: src })
              .del(),
          )
      })
  })
}
