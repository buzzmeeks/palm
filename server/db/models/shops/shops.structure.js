module.exports = {
  name: 'shops',
  structure: t => {
    t.string('id', 3).primary()
    t.string('name', 100).notNullable()
    t.string('address', 255).notNullable()
    t.string('zipcode', 5).notNullable()
    t.string('city', 50).notNullable()
    t.string('phone', 14)
    t.string('link', 255)
  },
}
