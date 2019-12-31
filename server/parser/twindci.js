const _ = require('lodash')
const bluebird = require('bluebird')

const q = require('../db/client')

const twins = {}
// -- Emmanuel Bernuau
twins['79867526'] = '5079867526'
// -- Mickael Teyant
twins['6319625005'] = '6105347739'
// -- Anthony Fernandez
twins['6213764007'] = '3115118815'
// -- Didier C.
twins['1203217957'] = '1318763279'
// -- Antoine Guitton
twins['431830762'] = '4318830762'
// -- Mael Nicolas
twins['631876513'] = '6318763513'
twins['2318418147'] = '6318763513'
// --David Coronel
twins['6318418146'] = '3313601443'
// --Merlin Moret
twins['5318416321'] = '1313590607'
twins['2030933551'] = '1313590607'
// --Taeyon Um
twins['1319667605'] = '6318412140'


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
