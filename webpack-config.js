module.exports = {
  entry: [
    './src/App.js'
  ],
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  devServer: {
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
    // loaders: [{
    //   test: /\.jsx?$/,
    //   loader: 'babel',
    //   query: {
    //     presets: ["es2015", "stage-0", "react"]
    //   }
    // }]
  }
};