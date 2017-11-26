import React from 'react';
import App from './component/App.jsx';
import Home from './component/home/index.jsx';
import About from './component/about_us/index.jsx';

const routes = [
  {
  	component: App,
    routes: [
      {
      	path: '/',
        exact: true,
        component: Home
      },
      {
      	path: '/about-us',
        component: About
      }
    ]
  }
];

export default routes;
