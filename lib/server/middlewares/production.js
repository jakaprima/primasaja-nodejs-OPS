import {resolve} from 'path';
import Express from 'express';
import compression from 'compression';


const folderBundleClient = resolve(__dirname, '..', 'client');


module.exports = function setup(app) {
	app.use('/', Express.static(folderBundleClient));
	app.get('*', (req, res) => {
	res.sendFile(resolve(folderBundleClient, 'index.html'))
	});
}


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
