var fs = require('fs');
var path = require('path');
// var ExternalsPlugin = require('webpack-externals-plugin');

module.exports = {
  // /homespace/primasaja-nodejs-OPS
  entry: path.resolve(__dirname, 'src/server/server.js'),

  output: {
    path: __dirname + '/dist/',
    filename: 'server.bundle.js',
  },

  target: 'node',

  node: {
    __filename: true,
    __dirname: true,
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: ['src/client', "node_modules"],
  },


  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0',
          ],
          // plugins: [
          //   [
          //     'babel-plugin-webpack-loaders', {
          //       'config': './webpack.config.babel.js',
          //       "verbose": false
          //     }
          //   ]
          // ]
        },
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0',
          ],
          // plugins: [
          //   [
          //     'babel-plugin-webpack-loaders', {
          //       'config': './webpack.config.babel.js',
          //       "verbose": false
          //     }
          //   ]
          // ]
        },
      },
    ],
  },


  // resolve: {
  //   extensions: ['', 'js', 'jsx'],
  //     modules: [
  //       'node_modules',
  //     ],
  // },

  // module: {
  //     rules: [
  //         {
  //             test: /\.jsx?$/,
  //             include: path.join(__dirname, '/src/client'),
  //             exclude: '/node_modules',
  //             loader: 'babel-loader',
  //             query: {
  //                 presets: ["env", "es2015", "stage-2", "react"],
  //                 plugins: [
  //                     "transform-react-pug",
  //                     "transform-react-jsx",
  //                     "transform-object-rest-spread"
  //                 ]
  //             }
  //         },
  //         {
  //             test: /\.css$/,
  //             use: ['style-loader', 'css-loader']
  //         },
  //         {
  //             test: /\.(png|svg|jpg|gif)$/,
  //             use: [
  //                 'file-loader'
  //             ]
  //         }
  //     ]
  // },



  // module: {
  //   loaders: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: [
  //           'react',
  //           'es2015',
  //           'stage-0',
  //         ],
  //         // plugins: [
  //         //   [
  //         //     'babel-plugin-webpack-loaders', {
  //         //       'config': './webpack.config.babel.js',
  //         //       "verbose": false
  //         //     }
  //         //   ]
  //         // ]
  //       },
  //     }, {
  //       test: /\.json$/,
  //       loader: 'json-loader',
  //     },
  //   ],
  // },
  // plugins: [
  //   // new ExternalsPlugin({
  //   //   type: 'commonjs',
  //   //   include: path.join(__dirname, './node_modules/'),
  //   // }),
  // ],
};
