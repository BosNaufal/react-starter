
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
    path: './build',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },


      {
        test: /\.(sass|scss)$/,
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
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('build.css'),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': '"production"'
    //   }
    // }),
  ]

};
