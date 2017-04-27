var env = process.env.NODE_ENV
if (env === undefined || env === null) {
  throw 'Error determining which config file to use, is NODE_ENV defined?'
}

// Defaults prod config/environment variables and overriden in dev/test
module.exports = require(`./${env}.config`)
