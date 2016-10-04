var path = require("path");

module.exports = {
  entry: [
    './app/main'
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static"
  },
  module: {
    loaders: [
      {
        text: /\.js$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};