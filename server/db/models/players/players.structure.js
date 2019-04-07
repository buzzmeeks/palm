module.exports = {
  name: 'players',
  structure: t => {
    t.string('dci', 11).primary()
    t.string('name', 50).notNullable()
    t.json('leagues')
  },
}
