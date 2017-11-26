import React from 'react';
import PropTypes from 'prop-types';
import HeaderWrapper from './header/index.jsx';

const App = ({ route }) => (
	<HeaderWrapper route={route}/>
);

App.propTypes = {
  route: PropTypes.object
};

export default App;
