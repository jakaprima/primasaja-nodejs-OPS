import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import Counter from './components/Counter';
// import counter from './reducers';

// const store = createStore(counter)
const rootEl = document.getElementById('root')

const RootComponent = () => (
	<div>
	ini adalah root component
	</div>
)



const render = () => ReactDOM.render(
<RootComponent/>,
  rootEl
)

render()
store.subscribe(render)