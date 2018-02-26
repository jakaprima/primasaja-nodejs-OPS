const {resolve} = require('path');
const express = require('express');
const compression = require('compression');

const clientBuildPath = resolve(__dirname, '..', 'client');

module.exports = function setup(app) {
  app.use(compression());
  app.use('/', express.static(clientBuildPath));

  // untuk handle semua User Interface
  app.get('*', (req, res) => res.sendFile(resolve(clientBuildPath, 'index.html')));
};
