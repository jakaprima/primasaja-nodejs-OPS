'use strict';

var _path = require('path');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var folderBundleClient = (0, _path.resolve)(__dirname, '..', 'client');

module.exports = function setup(app) {
	app.use('/', _express2.default.static(folderBundleClient));
	app.get('*', function (req, res) {
		res.sendFile((0, _path.resolve)(folderBundleClient, 'index.html'));
	});
};

//   const {resolve} = require('path');
// const express = require('express');
// const compression = require('compression');

// const clientBuildPath = resolve(__dirname, '..', '..', 'client');

// module.exports = function setup(app) {
//   app.use(compression());
//   app.use('/', express.static(clientBuildPath));

//   // all other requests be handled by UI itself
//   app.get('*', (req, res) => res.sendFile(resolve(clientBuildPath, 'index.html')));
// };