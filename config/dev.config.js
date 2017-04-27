var merge = require('webpack-merge')
var prodConfig = require('./prod.config')

module.exports = merge(prodConfig, {
  index: 'index.html',
  port: 3000,
  proxyTable: {},
  cssSourceMap: false,
  extractSourceMap: false
})
