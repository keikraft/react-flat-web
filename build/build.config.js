const path = require('path');

module.exports = {
  build: {
    assetsRoot: path.resolve(__dirname, '../build'),
    assetsSubDirectory: 'public',
    assetsPublicPath: '/',
  },
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    devServerPort: 8080,
    cssSourceMap: true,
    extractStyles: true,
    autoOpenBrowser: true,
    stats: {
      assets: false,
      cached: false,
      children: false,
      chunks: true,
      chunkModules: false,
      modules: false,
      source: false,
      colors: true
    }
  },
  dist: {
    env: {
      NODE_ENV: '"production"'
    },
    cssSourceMap: true,
    extractStyles: true,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: false
  }
};