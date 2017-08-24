const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    build: {
      assetsRoot: resolve('build'),
      assetsSubDirectory: 'public',
      assetsPublicPath: '/',
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
    build: {
      assetsRoot: resolve('dist'),
      assetsSubDirectory: 'dist',
      assetsPublicPath: '',
    },
    publish: {
      src: resolve('dist')
    },
    cssSourceMap: true,
    extractStyles: true,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: false
  }
};