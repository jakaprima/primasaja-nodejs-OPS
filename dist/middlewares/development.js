'use strict';var _require = require('path'),resolve = _require.resolve;
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var logger = require('../logger');
var webpackConfig = require('../../../config/webpack.config.dev');

var compiler = webpack(webpackConfig);

module.exports = function setup(app) {
  app.use(
  webpackDevMiddleware(compiler, {
    logger: logger,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true } }));




  app.use(webpackHotMiddleware(compiler));

  // all other requests be handled by UI itself
  app.get('*', function (req, res) {return res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html'));});
};;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(compiler, 'compiler', 'src/server/middlewares/development.js');}();;