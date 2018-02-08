import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import MuiThemeProvider from 'material-ui';

// import store from './store';
import muiTheme from './muiTheme';
// import Router from './router';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    halo aja
  </div>
)

const About = () => (
  <div>
    About
  </div>
)


const RootComponent = (AppRouter) => (
	<AppContainer>  
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
	</AppContainer>
)



const render = (AppRouter) => ReactDOM.render(
	<RootComponent AppRouter={AppRouter}/>,
	document.getElementById('root')
)

render(Router)
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




