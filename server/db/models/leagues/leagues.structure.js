module.exports = {
  name: 'leagues',
  structure: t => {
    t.increments('id').primary()
    t.string('title', 255).notNullable()
    t.timestamp('start').notNullable()
    t.timestamp('end').notNullable()
  },
}
