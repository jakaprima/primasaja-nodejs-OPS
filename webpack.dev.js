const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const common = require('./webpack.common.js');



// module.exports = merge(common, {
// 	devServer: {
// 		contentBase: './dist',
// 		port: 4000,
// 		historyApiFallback: true,
// 		hot: true
// 	},
// 	plugins: [
// 		new webpack.HotModuleReplacementPlugin()
// 	]
// });



module.exports = {
    entry: './src/client/index.jsx',
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://0.0.0.0:8080/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, '/src/client'),
                exclude: '/node_modules',
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        // new CleanWebpackPlugin(['dist']),
    ],
    devtool: 'cheap-module-eval-source-map',
    watch: true
};