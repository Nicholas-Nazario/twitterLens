import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import './index.css';
import App from './App';
import Stock from './Stock';
// import Twitter from './Twitter';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import About from './components/About';
import Team from './components/Team';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Stock} />
        <Route path="/stock" component={Stock} />
        <Route path="/about" component={About} />
        <Route path="/Team" component={Team} />
        <Route path="/twitter" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);


let componentList = (
  <div>
	  <Navbar />
	  <Stock />
  </div>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
