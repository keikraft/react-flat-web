const path = require('path');
const webpack = require('webpack');
const config = require('./build.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const sourceMap = config.dist.cssSourceMap;
const webpackDistConfig = {
  bail: true,
  entry: resolve('src/index.jsx'),
  devtool: sourceMap ? '#source-map' : false,
  output: {
    path: config.dist.build.assetsRoot,
    filename: 'scripts/[name].[chunkhash].js',
    chunkFilename: 'scripts/[id].[chunkhash].js',
    publicPath: config.dist.build.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      src: resolve('src'),
      components: resolve('src/components'),
      router: resolve('src/router')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: config.dev.extractStyles
          ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {loader: 'css-loader', options: {sourceMap}},
              {loader: 'sass-loader', options: {sourceMap}}
            ],
            publicPath: '../'
          })
          : [
            {loader: 'style-loader'},
            {loader: 'css-loader', options: {sourceMap}},
            {loader: 'sass-loader', options: {sourceMap}}
          ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:5].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:5].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env': config.dist.env}),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, sourceMap: true}),
    new HtmlWebpackPlugin({
      filename: resolve('dist/index.html'),
      template: resolve('src/index.html'),
      // favicon: path.resolve(__dirname, '../src/shared/layout/images/favicon.png'),
      minify: {removeComments: true, collapseWhitespace: true, removeAttributeQuotes: true},
      chunksSortMode: 'dependency',
      inject: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return (
          module.resource && /\.js$/.test(module.resource) &&
          module.resource.indexOf(resolve('node_modules')) === 0
        );
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
};

if (config.dist.extractStyles) {
  webpackDistConfig.plugins.push(new OptimizeCssAssetsPlugin({canPrint: false}));
  webpackDistConfig.plugins.push(new ExtractTextPlugin({filename: 'styles/[name].[contenthash].css'}));
}

if (config.dist.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin');
  webpackDistConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(`\\.(${config.dist.productionGzipExtensions.join('|')})$`),
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

if (config.dist.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackDistConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackDistConfig;