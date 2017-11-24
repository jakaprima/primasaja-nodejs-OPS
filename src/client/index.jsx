import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainComponent from './components/MainComponent.jsx';

ReactDOM.render(
	<Provider>
		<Router>
			<Route path="/" component={MainComponent}/>
		</Router>
	</Provider>,
	document.getElementById('MainReact')
);
