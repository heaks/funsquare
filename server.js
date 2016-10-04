var path = require('path');
var express = require('express');
var config = require('./webpack.config');
// var webpack = require('webpack');

var app = express();
// var compiler = webpack(config);

app.use(require('webpack-hot-middleware'));
// app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(6600, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:6600');
});