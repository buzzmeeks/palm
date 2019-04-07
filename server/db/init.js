/* eslint-disable import/order */
/* eslint-disable no-global-assign */
const fs = require('fs')
const glob = require('glob')
const path = require('path')

const q = require('./client')
const { SCHEMA } = require('./constants')

require = require('esm')(module, { mode: 'all' })
const log = require('../../services/logger').default

async function init() {
  // -- Databe re-init
  try {
    // -- Schema already exist ?
    const schemaExists = await q('information_schema.schemata')
      .where({
        schema_name: SCHEMA,
      })
      .select('schema_name')
    // -- Delete schema (and all tables)
    if (schemaExists.length) {
      log.info(`Schema ${SCHEMA} already exists - I will therefor destroy it`)
      const schemaDrop = await q.raw(`DROP SCHEMA ${SCHEMA} CASCADE;`)
      log.info(`Schema <${SCHEMA}> / `, schemaDrop.command)
    }
    // -- Create schema again
    const schemaCreate = await q.raw(`CREATE SCHEMA ${SCHEMA};`)
    log.info(`Schema <${SCHEMA}> / `, schemaCreate.command)
  } catch (err) {
    log.error(err)
    process.exit(1)
  }

  // -- Models
  const models = glob
    .sync(path.join(__dirname, '/models/*/*.structure.js'))
    .map(f => require(f))
  try {
    // -- Create tables
    await Promise.all(
      models.map(schema => {
        const tableName = schema.name
        return q.schema.createTable(tableName, schema.structure)
      }),
    )

    // -- Add constraints
    await Promise.all(
      models.map(schema => {
        const tableName = schema.name
        if (schema.constraints) {
          return q.schema.table(tableName, schema.constraints)
        }
        return true
      }),
    )

    // -- Insert datas
    await Promise.all(
      models.map(schema => {
        const tableName = schema.name
        const dataFile = path.join(
          __dirname,
          `./models/${tableName}/${tableName}.data.js`,
        )
        if (fs.existsSync(dataFile)) {
          const data = require(dataFile)
          return Promise.all(
            data.map(line => q.insert(line).into(tableName)),
          ).then(r => {
            log.info(`${r.length} lines added to table ${tableName}`)
            return r
          })
        }
        return true
      }),
    )
    process.exit(1)
  } catch (err) {
    log.error(err)
    process.exit(0)
  }
}

init()
