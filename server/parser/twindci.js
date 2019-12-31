const _ = require('lodash')
const bluebird = require('bluebird')

const q = require('../db/client')

const twins = {}
// -- Arthur Baudel
twins['7319049910'] = '7318427304'
// -- Emmanuel Bernuau
twins['79867526'] = '5079867526'
// -- Marc Bisor
twins['4318910071' = '6318416296'
// -- Constantin Bône
twins['9318768663'] = '3300094230'
// -- Philippe Briand
twins['8319147753'] = '3115049419'
// -- Ridley Campbell
twins['1319749987'] = '8318417265'
// -- Didier Clain
twins['1203217957'] = '1318763279'
// -- Olivier Consille
twins['5212380270'] = '1318649311'
// -- David Coronel
twins['6318418146'] = '3313601443'
//-- Yannick Delessard
twins['7318594201'] = '8314850871'
// -- Emmanuel Delion
twins['8317183699'] = '7313605856'
// -- Anthony Fernandez
twins['6213764007'] = '3115118815'
// -- Cyril Germain
twins['8300248784'] = '8300247784'
// -- Antoine Guitton
twins['431830762'] = '4318830762'
// -- Nicolas Honorat
twins['7030949344'] = '6212309350'
// -- Loic Kempf
twins['1206204469'] = '1206204690'
// -- Pierre-Jean Lacroix
twins['31053868'] = '3105386883'
// -- Elliot Meyer
twins['3115035753'] = '5319659508'
// -- Merlin Moret
twins['5318416321'] = '1313590607'
twins['2030933551'] = '1313590607'
// -- Charles Ngande
twins['7317741086'] = '3030960181'
// -- Mael Nicolas
twins['631876513'] = '6318763513'
twins['2318418147'] = '6318763513'
// -- Kassim Papa
twins['6317062902']= '6319701269'
// -- Florian Piolain
twins['8318436825'] = '538428921'
// -- Adrien Penard
twins['7203818028'] = '19855372'
// -- Dylan Rannaud
twins['8069862215'] = '69862215'
// -- Michael Sebag
twins['9317127101'] = '2318908108'
// -- Jefferson Richard
twins['3213733843'] = '9319659810'
// -- Benjamin Riva
twins['69779161'] = '69779061'
// -- Spiros Samkos
twins['2319149650'] = '5318412143'
// -- Bruno Siracusa
twins['6318564133'] = '9071194629'
twins['9071294629'] = '9071194629'
// -- Mickael Teyant
twins['6319625005'] = '6105347739'
// -- Taeyon Um
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
