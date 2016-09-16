var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {

  devtool: 'eval',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/js/main.js'
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
        loader: 'babel',
        query: {
          presets: ["es2015", "react"],
          plugins: ["react-hot-loader/babel", "transform-object-rest-spread"]
        }
      },

      {
        test: /\.(sass|scss)$/,
        exclude: /(src\/sass\/global)/,
        loader: combineLoaders([
          {
            loader: 'style',
          },
          {
            loader: 'css',
            query: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'sass'
          },
          {
            loader: 'autoprefixer',
            query: {
              browsers: 'last 2 versions'
            }
          }
        ])
      },

      {
        test: /\.(sass|scss)$/,
        exclude: /(src\/sass\/scoped)/,
        loader: combineLoaders([
          {
            loader: 'style',
          },
          {
            loader: 'css',
          },
          {
            loader: 'sass'
          },
          {
            loader: 'autoprefixer',
            query: {
              browsers: 'last 2 versions'
            }
          }
        ])
      },

      {
        test: /\.css$/,
        loaders: ['style','css']
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

};
