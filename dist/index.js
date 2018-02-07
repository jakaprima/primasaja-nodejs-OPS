'use strict';var _http = require('http');var _http2 = _interopRequireDefault(_http);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactDom = require('react-dom');var _reactDom2 = _interopRequireDefault(_reactDom);
var _server = require('react-dom/server');var _server2 = _interopRequireDefault(_server);
var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _morgan = require('morgan');var _morgan2 = _interopRequireDefault(_morgan);
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _path = require('path');var _path2 = _interopRequireDefault(_path);


var _api = require('./middlewares/api');var _api2 = _interopRequireDefault(_api);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// import { StaticRouter } from 'react-router';

// //redux
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducersClient from '../src/client/reducers/index.jsx'
// import counterApp from './reducers'
// import App from './containers/App'

//  OpenShift sample Node application

// const store = createStore(counter)
// const rootEl = document.getElementById('root')

// const render = () => ReactDOM.render(
//   <Component1/>,
//   rootEl
// )
// render()


var setupAppRoutes =
process.env.NODE_ENV === 'development' ? require('./middlewares/development') : require('./middlewares/production');

// console.log()
// import logger from './logger'
var app = (0, _express2.default)();app.set('env', process.env.NODE_ENV);
// logger.info(`Application env: ${process.env.NODE_ENV}`);

// app.use(logger.expressMiddleware);
app.use(_bodyParser2.default.json());

(0, _api2.default)(app);
setupAppRoutes(app);

// Object.assign=require('object-assign')

// // app.engine('html', require('ejs').renderFile);
// app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8001,
ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
mongoURLLabel = "";

if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
  var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
  mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
  mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
  mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
  mongoPassword = process.env[mongoServiceName + '_PASSWORD'];
  mongoUser = process.env[mongoServiceName + '_USER'];

  if (mongoHost && mongoPort && mongoDatabase) {
    mongoURLLabel = mongoURL = 'mongodb://';
    if (mongoUser && mongoPassword) {
      mongoURL += mongoUser + ':' + mongoPassword + '@';
    }
    // Provide UI label that excludes user id and pw
    mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
    mongoURL += mongoHost + ':' + mongoPort + '/' + mongoDatabase;

  }
}
var db = null,
dbDetails = new Object();

var initDb = function initDb(callback) {
  if (mongoURL == null) return;

  var mongodb = require('mongodb');
  if (mongodb == null) return;

  mongodb.connect(mongoURL, function (err, conn) {
    if (err) {
      callback(err);
      return;
    }

    db = conn;
    dbDetails.databaseName = db.databaseName;
    dbDetails.url = mongoURLLabel;
    dbDetails.type = 'MongoDB';

    console.log('Connected to MongoDB at: %s', mongoURL);
  });
};

// // app.get('/', function (req, res) {
// //   // try to initialize the db on every request if it's not already
// //   // initialized.
// //   if (!db) {
// //     initDb(function(err){});
// //   }
// //   if (db) {
// //     var col = db.collection('counts');
// //     // Create a document with request IP and current time of request
// //     col.insert({ip: req.ip, date: Date.now()});
// //     col.count(function(err, count){
// //       res.render('index.html', { pageCountMessage : count, dbInfo: dbDetails });
// //     });
// //   } else {
// //     res.render('index.html', { pageCountMessage : null});
// //   }
// // });

// // app.get('/pagecount', function (req, res) {
// //   // try to initialize the db on every request if it's not already
// //   // initialized.
// //   if (!db) {
// //     initDb(function(err){});
// //   }
// //   if (db) {
// //     db.collection('counts').count(function(err, count ){
// //       res.send('{ pageCount: ' + count + '}');
// //     });
// //   } else {
// //     res.send('{ pageCount: -1 }');
// //   }
// // });

// // const Component1 = () => {
// //   <div>
// //     component1
// //   </div>
// // }

// // ReactDOM.render(
// //   <Component1/>,
// //   document.getElementById('MainReact')
// // );



// var template = function(RootComponent){
//   return `
//     <html ng-app>
//       <head>
//       </head>
//       <body id="MainReact">
//       ${RootComponent}
//       </body>
//       <script src='index_bundle'></script>
//     </html>
//   `
// };

app.use(_express2.default.static('dist'));
// app.use('/google23c40b5aecbecfdf.html', Express.static('google23c40b5aecbecfdf.html'));
// app.use('/layanan', Express.static('dist'));
// // app.use('/aku', (req, res) => res.send('okedeh!'));

// app.get('/view2', (req, res) => {
//   res.send(template2());
// });

// handle semua request

// dijalankan setiap ada request apapun
// const handleRender = (req, res) => {
// membuat baru redux store instance
// const store = createStore(reducersClient)

// Render Component ke String
// const html = ReactDOMServer.renderToString(
//   <Provider store={store}>
//     <RootComponent/>
//   </Provider>
// )
// var html = 'testing'

// menangkap initial state dari redux store
// const preloadedState = store.getState()

// Mengirim rendered page ke client lagi
// res.send(renderFullPage(html, preloadedState))
// res.send(renderFullPage(html))
// }
// const renderFullPage = (html) => {
//   return `
//     <!doctype html>
//     <html>
//       <head>
//         <title>Redux universal tutorial</title>
//       </head>
//       <body>
//         <div id="root">${html}</div>

//         <script src="/static/bundle.js"></script>
//       </body>
//     </html>
//     `
// }

// app.use(handleRender);
// <script>
//   window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
// </script>


// app.get('*', (req, res) => {
//   const context = {}
//   const initialView = ReactDOMServer.renderToString(
//     <StaticRouter
//       location={req.url}
//       context={context}
//     >
//       <RootComponent/>
//     </StaticRouter>
//   )
//   // res.sendFile(path.resolve('./dist/index.html'));
//   res.send(template(initialView));
// });

// error handling
// app.use(function(err, req, res, next){
//   console.error(err.stack);
//   res.status(500).send('Something bad happened!');
// });

// initDb(function(err){
//   console.log('Error connecting to Mongo. Message:\n'+err);
// });

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

// module.exports = app ;
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(setupAppRoutes, 'setupAppRoutes', 'src/index.js');__REACT_HOT_LOADER__.register(app, 'app', 'src/index.js');__REACT_HOT_LOADER__.register(port, 'port', 'src/index.js');__REACT_HOT_LOADER__.register(ip, 'ip', 'src/index.js');__REACT_HOT_LOADER__.register(mongoURL, 'mongoURL', 'src/index.js');__REACT_HOT_LOADER__.register(mongoURLLabel, 'mongoURLLabel', 'src/index.js');__REACT_HOT_LOADER__.register(mongoServiceName, 'mongoServiceName', 'src/index.js');__REACT_HOT_LOADER__.register(mongoHost, 'mongoHost', 'src/index.js');__REACT_HOT_LOADER__.register(mongoPort, 'mongoPort', 'src/index.js');__REACT_HOT_LOADER__.register(mongoDatabase, 'mongoDatabase', 'src/index.js');__REACT_HOT_LOADER__.register(mongoPassword, 'mongoPassword', 'src/index.js');__REACT_HOT_LOADER__.register(db, 'db', 'src/index.js');__REACT_HOT_LOADER__.register(dbDetails, 'dbDetails', 'src/index.js');__REACT_HOT_LOADER__.register(initDb, 'initDb', 'src/index.js');}();;