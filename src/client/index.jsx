import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import promise from "redux-promise";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes.js';
import reducers from './redux/reducers/index.js'
import 'bootstrap';
require('bootstrap/dist/css/bootstrap.css');

const createStoreWithMiddleware = createStore(reducers, {}, compose(applyMiddleware(promise)));

ReactDOM.render(
	<Provider store = {createStoreWithMiddleware}>
	  <Router>
	    {/* kick it all off with the root route */}
	    {renderRoutes(routes)}
	  </Router>
	</Provider>,
	document.getElementById('MainReact')
)
