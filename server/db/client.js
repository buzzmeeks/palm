const knex = require('knex')

require('dotenv').config()

const client = knex({
  client: 'pg',
  connection: {
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || 5432,
    user: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || null,
    database: process.env.PGDATABASE || 'palm',
  },
})

module.exports = client
