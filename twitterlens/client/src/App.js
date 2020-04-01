import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stock from './Stock';
import SearchBar from './components/Search'
import {Row} from 'react-bootstrap';
import axios from 'axios';
import Twitter from './Twitter';
import Navbar from './components/Navbar';
import Stockchart from './components/Stockchart';
import * as serviceWorker from './serviceWorker';
import { Container, Header, List } from "semantic-ui-react";

class App extends React.Component {
  // let componentList = (
  //   <div>
  //     <Navbar />
  //     <Stock />
  //     <Twitter />
  //   </div>
  // );

  // ReactDOM.render(
  //   componentList,
  //   document.getElementById('root')
  // );

  constructor(props) {
    super(props);
    this.state = {
      term: null,
      value: ''
    };
    this.child = React.createRef();
    this.child2 = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    term: null,
    value: ''
  };

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    //Stock.state.term = this.state.value;
    // Stock.setState({
    //   value: e.target.value
    // });
    //Stock.handleChange(e);
  }

  handleClick(e){
    e.preventDefault();

    this.setState ({
      value: '',
      term: this.state.value
    });
    
    this.child.current.searchStocks(this.state.value)
    this.child2.current.searchTwitter2(this.state.value)
  }

  render() {
    const {keyword} = this.state.value,
    {handleColorChange} = this;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to TwitterLens
          </p>
          <Row>
            <SearchBar 
                    defaultValue={this.state.value}
                    onChange={this.handleChange}
                    onClick={this.handleClick}/>
            <Stock ref={this.child} />
            <Twitter ref={this.child2} />
        </Row>
      </header>
    </div>
    );
  }
}


export default App;
