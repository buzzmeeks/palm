module.exports = {
  name: 'tournaments',
  structure: t => {
    t.string('id', 20).primary()
    t.string('shop', 3)
    // -- weekly (W), qualifier (Q), finale (F)
    t.enu('type', ['w', 'q', 'f'], {
      useNative: true,
      enumName: 'tournament_type',
    }).notNullable()
    t.integer('nbrounds').notNullable()
    t.json('matches').notNullable()
    // t.json('points').notNullable()
    // t.json('top8')
    t.timestamp('date').notNullable()
    t.string('sanctionnumber')
    t.string('eventguid')
    t.string('headjudge')
    t.string('coordinator')
  },
  constraints: t => {
    t.foreign('shop').references('shops.id')
  },
}
