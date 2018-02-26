import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Testing from './containers/testing';

export default function() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/tentang-kami" component={About}/>
      <Route path="/testing" component={Testing}/>
    </div>
  )
}

// import App from 'containers/App';
// // import LoginForm from 'containers/LoginForm';

// export default function() {
//   return (
//     <BrowserRouter>
//       <Switch>
//        <Route path='/' name='homejaka' component={App} />
//       </Switch>
//     </BrowserRouter>
//   );
// }
