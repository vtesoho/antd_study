import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Life from './pages/demo/Life';
// import Admin from './admin'
import Router from './pages/route_demo/route2/router'
import Hooks from './pages/hooks/hooks'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Hooks />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
