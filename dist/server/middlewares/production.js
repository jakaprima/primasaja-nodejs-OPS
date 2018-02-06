'use strict';var _require = require('path'),resolve = _require.resolve;
var express = require('express');
var compression = require('compression');

var clientBuildPath = resolve(__dirname, '..', '..', 'client');

module.exports = function setup(app) {
  app.use(compression());
  app.use('/', express.static(clientBuildPath));

  // all other requests be handled by UI itself
  app.get('*', function (req, res) {return res.sendFile(resolve(clientBuildPath, 'index.html'));});
};;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(clientBuildPath, 'clientBuildPath', 'src/server/middlewares/production.js');}();;