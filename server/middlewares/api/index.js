const rankings = require('./rankings')
module.exports = function(req, res, next) {
  switch (req.url) {
    case '/ranking':
      rankings(req, res, next)
      break
  }
}
