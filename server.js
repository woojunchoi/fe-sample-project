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
  console.log('hi')
}))


/**
 * Add headers middleware 
 */
 app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
});

/**
 * Listen to Port
 */
app.listen(PORT, console.log('listening port ' + PORT));