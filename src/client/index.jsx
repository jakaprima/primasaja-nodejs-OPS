import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'react-promise';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './redux/reducers';

import {AppContainer} from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import store from './store';
import muiTheme from './muiTheme';
import Route from './router';

import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'


// const createStoreWithMiddleware = createStore(reducers, {}, compose(applyMiddleware(promise)));
const createStoreWithMiddleware = createStore(reducers, {}, compose(applyMiddleware()));

// const render = (Route) => 

ReactDOM.render(
  pug`
  AppContainer
    Provider(store=${createStoreWithMiddleware})
      Router
        MuiThemeProvider
          Route
  `
,
  document.getElementById('root')
);
// )

// render(Route)

if (module.hot) {
  module.hot.accept('./router.jsx', () => {
    render(require('./router').default);
  });
}

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