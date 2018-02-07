'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { createStore } from 'redux';
// import Counter from './components/Counter';
// import counter from './reducers';

// const store = createStore(counter)
var rootEl = document.getElementById('root');

var RootComponent = function RootComponent() {
	return _react2.default.createElement(
		'div',
		null,
		'ini adalah root component'
	);
};

var render = function render() {
	return _reactDom2.default.render(_react2.default.createElement(RootComponent, null), rootEl);
};

render();
store.subscribe(render);