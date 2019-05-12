const players = require('../../db/models/players/players.model')

module.exports = async function(req, res, next) {
  const rankings = await players.getRankings(1)
  console.log(rankings)
  const msg = JSON.stringify(rankings)
  console.log(msg)
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Content-Length', Buffer.byteLength(msg))
  res.end(msg)
}
