var env = process.env.NODE_ENV
if (env === undefined || env === null) {
  throw 'Error determining which config file to use, is NODE_ENV defined?'
}
module.exports = require(`./webpack.${env}.conf.js`)
