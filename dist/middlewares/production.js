'use strict';

var _require = require('path'),
    resolve = _require.resolve;

var express = require('express');
var compression = require('compression');

var clientBuildPath = resolve(__dirname, '..', 'client');

module.exports = function setup(app) {
  app.use(compression());
  app.use('/', express.static(clientBuildPath));

  // untuk handle semua User Interface
  app.get('*', function (req, res) {
    return res.sendFile(resolve(clientBuildPath, 'index.html'));
  });
};