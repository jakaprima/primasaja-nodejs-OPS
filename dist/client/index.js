'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactHotLoader = require('react-hot-loader');

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _muiTheme = require('./muiTheme');

var _muiTheme2 = _interopRequireDefault(_muiTheme);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import store from './store';
var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    'halo aja'
  );
};
// import Router from './router';

var About = function About() {
  return _react2.default.createElement(
    'div',
    null,
    'About'
  );
};

var RootComponent = function RootComponent(AppRouter) {
  return _react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: About })
      )
    )
  );
};

var render = function render(AppRouter) {
  return _reactDom2.default.render(_react2.default.createElement(RootComponent, { AppRouter: AppRouter }), document.getElementById('root'));
};

render(_reactRouterDom.BrowserRouter);
store.subscribe(render);

// <AppContainer>
// <Provider store={store}>
// <IntlProvider locale="en">
// <MuiThemeProvider muiTheme={muiTheme}>
// <AppRouter />
// </MuiThemeProvider>
// </IntlProvider>
// </Provider>
// </AppContainer>,


// import 'babel-polyfill';
// import 'whatwg-fetch';

// import 'sanitize.css/sanitize.css';

// import intl from 'intl';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import {IntlProvider} from 'react-intl';
// import {AppContainer} from 'react-hot-loader';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import api from 'api/index';
// import store from './store';
// import Router from './router';
// import muiTheme from './muiTheme';

// // global styles
// import './style.scss';

// // apply polyfill
// if (!window.Intl) {
//   window.Intl = intl;
// }

// api.setEndpoint('/api');

// const render = (AppRouter) => {
//   ReactDOM.render(
//     <AppContainer>
//       <Provider store={store}>
//         <IntlProvider locale="en">
//           <MuiThemeProvider muiTheme={muiTheme}>
//             <AppRouter />
//           </MuiThemeProvider>
//         </IntlProvider>
//       </Provider>
//     </AppContainer>,
//     document.getElementById('app')
//   );
// };

// render(Router);

// // need to re-mount app component on hot reload
// if (module.hot) {
//   module.hot.accept('./router.js', () => {
//     render(require('./router').default);
//   });
// }