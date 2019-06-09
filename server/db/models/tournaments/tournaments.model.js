const _ = require('lodash')

const q = require('../../client')

function getAll({ lid }) {
  return q('tournaments')
    .select('id', 'shop', 'type', 'date')
    .then(t =>
      t.sort((a, b) => {
        if (a.date < b.date) {
          return 1
        }
        return -1
      }),
    )
    .then(t => _.groupBy(t, 'shop'))
}

module.exports = { getAll }
