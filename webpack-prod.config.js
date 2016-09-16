
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {

  devtool: 'eval',

  entry: './src/js/main.js',

  output: {
    path: __dirname + '/build',
    publicPath: './build/',
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
          "presets": ["es2015", "react"],
          "plugins": ["react-hot-loader/babel", "transform-object-rest-spread"]
        }
      },

      {
        test: /\.(sass|scss)$/,
        exclude: /(src\/sass\/global)/,
        loader: ExtractTextPlugin.extract(
          'style',
          combineLoaders([
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
        )
      },

      {
        test: /\.(sass|scss)$/,
        exclude: /(src\/sass\/scoped)/,
        loader: ExtractTextPlugin.extract(
          'style',
          combineLoaders([
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
        )
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

  plugins: [
    new ExtractTextPlugin('build.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ]

};
