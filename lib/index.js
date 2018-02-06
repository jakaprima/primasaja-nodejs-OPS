import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Express from 'express';
import morgan from 'morgan';
import bodyParder from 'body-parser';
import path from 'path';

// import ClientComponent from '../src/client/index.jsx';


import { StaticRouter } from 'react-router';

//redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducersClient from '../src/client/reducers/index.jsx'
// import counterApp from './reducers'
// import App from './containers/App'

//  OpenShift sample Node application

const RootComponent = () => {
  return (
    <div>
      halo
    </div>
  )
}

// const store = createStore(counter)
// const rootEl = document.getElementById('root')

// const render = () => ReactDOM.render(
//   <Component1/>,
//   rootEl
// )
// render()


// console.log()
let app = Express();

    
Object.assign=require('object-assign')

// app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8001,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
  var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
      mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
      mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
      mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
      mongoPassword = process.env[mongoServiceName + '_PASSWORD']
      mongoUser = process.env[mongoServiceName + '_USER'];

  if (mongoHost && mongoPort && mongoDatabase) {
    mongoURLLabel = mongoURL = 'mongodb://';
    if (mongoUser && mongoPassword) {
      mongoURL += mongoUser + ':' + mongoPassword + '@';
    }
    // Provide UI label that excludes user id and pw
    mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
    mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;

  }
}
var db = null,
    dbDetails = new Object();

var initDb = function(callback) {
  if (mongoURL == null) return;

  var mongodb = require('mongodb');
  if (mongodb == null) return;

  mongodb.connect(mongoURL, function(err, conn) {
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

// app.get('/', function (req, res) {
//   // try to initialize the db on every request if it's not already
//   // initialized.
//   if (!db) {
//     initDb(function(err){});
//   }
//   if (db) {
//     var col = db.collection('counts');
//     // Create a document with request IP and current time of request
//     col.insert({ip: req.ip, date: Date.now()});
//     col.count(function(err, count){
//       res.render('index.html', { pageCountMessage : count, dbInfo: dbDetails });
//     });
//   } else {
//     res.render('index.html', { pageCountMessage : null});
//   }
// });

// app.get('/pagecount', function (req, res) {
//   // try to initialize the db on every request if it's not already
//   // initialized.
//   if (!db) {
//     initDb(function(err){});
//   }
//   if (db) {
//     db.collection('counts').count(function(err, count ){
//       res.send('{ pageCount: ' + count + '}');
//     });
//   } else {
//     res.send('{ pageCount: -1 }');
//   }
// });

// const Component1 = () => {
//   <div>
//     component1
//   </div>
// }

// ReactDOM.render(
//   <Component1/>,
//   document.getElementById('MainReact')
// );



var template = function(RootComponent){
  return `
    <html ng-app>
      <head>
      </head>
      <body id="MainReact">
      ${RootComponent}
      </body>
      <script src='index_bundle'></script>
    </html>
  `
};

// app.use(Express.static('dist'));
app.use('/google23c40b5aecbecfdf.html', Express.static('google23c40b5aecbecfdf.html'));
app.use('/layanan', Express.static('dist'));
// app.use('/aku', (req, res) => res.send('okedeh!'));

app.get('/view2', (req, res) => {
  res.send(template2());
});

// handle semua request
app.use(handleRender);
// dijalankan setiap ada request apapun
const handleRender = (req, res) => {
  // membuat baru redux store instance
  const store = createStore(reducersClient)

  // Render Component ke String
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <RootComponent/>
    </Provider>
  )

  // menangkap initial state dari redux store
  const preloadedState = store.getState()

  // Mengirim rendered page ke client lagi
  res.send(renderFullPage(html, preloadedState))
}
const renderFullPage = (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux universal tutorial</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}


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
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

initDb(function(err){
  console.log('Error connecting to Mongo. Message:\n'+err);
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
