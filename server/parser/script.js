const path = require('path')
const bluebird = require('bluebird')
const commandLineArgs = require('command-line-args')
const glob = require('glob')

const q = require('../db/client')
const twindci = require('./twindci')
const parser = require('./')

const optionDefinitions = [
  { name: 'shop', alias: 's', type: String },
  { name: 'type', alias: 't', type: String },
  { name: 'filePath', alias: 'p', type: String },
  { name: 'all', alias: 'a', type: Boolean },
]

const options = commandLineArgs(optionDefinitions)

if (!options.all) {
  // parser(options.shop, options.type, options.filePath)
} else {
  const tournaments = glob.sync(
    path.join(options.filePath, '/**', '/**', '/*'),
    { nodir: true },
  )

  bluebird
    .resolve(tournaments)
    .mapSeries(t => {
      const shop = t.substring(t.length - 7, t.length - 4)
      const type = t.substring(t.length - 3)
	  const format = t.substring(t.length -1)
      if (type !== 'x') {
        return parser(shop, type, t)
      }
      return true
    })
    .then(() => twindci())
    .then(() => process.exit(0))
}
