const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

// define port
const PORT = process.env.PORT || 3000;


app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }));
  
/**
 * Middleware for bodyParser
 */
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

/**
 * serve index.html
 */
app.use('/', express.static(__dirname + '/font-awesome-4.7.0'));
app.use('/', express.static(__dirname + '/images'));
app.use('/', express.static(__dirname + '/public'));
app.get('/data.json', ((req, res) => {
  res.sendFile(__dirname + '/product-payload.json')
}))


/**
 * Listen to Port
 */
app.listen(PORT, console.log('listening port ' + PORT));