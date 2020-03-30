import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Stock from './Stock';
// import Twitter from './Twitter';
import Navbar from './components/Navbar';
import * as serviceWorker from './serviceWorker';

let componentList = (
  <div>
    <Navbar />
    <Stock />
  </div>
);

ReactDOM.render(
  componentList,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
