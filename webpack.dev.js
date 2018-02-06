const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devServer: {
		contentBase: './dist',
		port: 4000,
		historyApiFallback: true,
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});