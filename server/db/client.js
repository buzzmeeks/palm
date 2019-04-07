const knex = require('knex')

const client = knex({
  client: 'pg',
  connection: {
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || 5432,
    user: process.env.PGUSER || null,
    password: process.env.PGPASSWORD || null,
    database: process.env.PGDATABASE || 'palm',
  },
})

module.exports = client
