'use strict';

var _path = require('path');

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackConfig = require('../../../config/webpack.config.dev');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compiler = (0, _webpack2.default)(_webpackConfig2.default);

module.exports = function setup(app) {
	app.use((0, _webpackDevMiddleware2.default)(compiler, {
		publicPath: _webpackConfig2.default.output.publicPath,
		stats: {
			colors: true
		}
	}));

	app.use((0, _webpackHotMiddleware2.default)(compiler));
	app.get('*', function (req, res) {
		res.sendFile((0, _path.resolve)(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html'));
	});
};