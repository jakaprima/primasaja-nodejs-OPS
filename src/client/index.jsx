import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import MuiThemeProvider from 'material-ui';

// import store from './store';
import muiTheme from './muiTheme';
import Route from './router';

import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'



const render = (Route) => ReactDOM.render(
	 <AppContainer>  
      <Router>
        <div>
          <Route />
        </div>
      </Router>
    </AppContainer>,
	document.getElementById('root')
)

render(Route)
store.subscribe(render)


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




