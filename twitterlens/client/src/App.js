import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stock from './Stock';
import Twitter from './Twitter';
import Navbar from './components/Navbar';
import Stockchart from './components/Stockchart';
import * as serviceWorker from './serviceWorker';
import { Container, Header, List } from "semantic-ui-react";

function App() {
  let componentList = (
    <div>
      <Navbar />
      <Stock />
      <Twitter />
    </div>
  );

  ReactDOM.render(
    componentList,
    document.getElementById('root')
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to TwitterLens
        </p>
      </header>
    </div>
  );
}

export default App;
