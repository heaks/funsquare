var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './client/funsquare'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  }
};