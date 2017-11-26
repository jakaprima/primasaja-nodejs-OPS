const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// if(process.env.NODE_ENV == 'development'){
//     var outputFile = 'dev';
    
// } else {
//     var outputFile = 'dist';
// }

module.exports = {
    entry: './src/client/index.jsx',
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, 'dist')
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