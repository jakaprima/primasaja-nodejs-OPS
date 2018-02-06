'use strict'; // API

var servers = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }];

module.exports = function setup(app) {
  app.get('/api/stats', function (req, res) {
    setTimeout(function () {
      res.json({
        // error: 'server error message',
        status: 'online',
        servers: servers });

    }, 3000);
  });

  app.post('/api/servers', function (req, res) {
    if (!req.body.name) {
      return res.json({
        error: 'cannot add server with empty name' });

    }
    return setTimeout(function () {
      servers.push({
        id: servers[servers.length - 1].id + 1,
        name: req.body.name });

      res.json({
        success: true });

    }, 3000);
  });
};;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(servers, 'servers', 'src/server/middlewares/api.js');}();;