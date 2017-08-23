const webpack = require('webpack');
const webpackDistConfig = require('./webpack.dist.config');

webpack(webpackDistConfig, (err, stats) => {
  if (err) {
    throw err;
  }

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');
});