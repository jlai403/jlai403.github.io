var path = require('path')

module.exports = {
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  cssSourceMap: true,
  extractSourceMap: true,
  productionGzip: true,
  productionGzipExtensions: ['js', 'css'],
  bundleAnalyzerReport: true
}
