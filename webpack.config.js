var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {

  devtool: 'eval',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],

  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js'
  },


  module: {

    loaders: [

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },

      {
        test: /\.(sass|scss)$/,
        exclude: /(src\/sass\/scoped)/,
        loaders: ['style','css', 'sass'],
      },

      {
        test: /\.css$/,
        loaders: ['style','css?modules&importLoaders=1&localIdentName=[local]'],
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
      },

      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },

  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: 8000,
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      components: __dirname + '/src/components',
    }
  },

};
