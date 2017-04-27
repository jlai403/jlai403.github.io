var utils = require('./utils')
var config = require('../../config')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: config.cssSourceMap,
    extract: config.extractSourceMap
  }),
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
}
