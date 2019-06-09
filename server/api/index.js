const express = require('express')

const playerModel = require('../db/models/players/players.model')
const tournamentModel = require('../db/models/tournaments/tournaments.model')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3001

app.set('port', port)

app.get('/api/ranking', async function(req, res) {
  const rankings = await playerModel.getRankings({ lid: 1 })
  const msg = JSON.stringify(rankings)
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Content-Length', Buffer.byteLength(msg))
  res.end(msg)
})

app.get('/api/tournaments', async function(req, res) {
  const tournaments = await tournamentModel.getAll({ lid: 1 })
  const msg = JSON.stringify(tournaments)
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Content-Length', Buffer.byteLength(msg))
  res.end(msg)
})

app.listen(port, () => {
  console.log(`API LISTENING ON ${port}`)
})
