import React, {Component} from 'react';
/*import Button from 'react-bootstrap/Button';*/
/*import Form from 'react-bootstrap/Form';*/
import {Row} from 'react-bootstrap';
import axios from 'axios';
import SearchBar from './components/Search.js';

class Stock extends Component {
  constructor() {
    super();
    this.state = {
      term:null,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleChange(e) {
    this.setState( {
      value: e.target.value
    });
  }

  handleClick(e) {
    if (e) e.preventDefault();
    this.setState ({
      value: '',
      term: this.state.value
    });

    let term = (this.state.value).toString();
    const api_key = `${process.env.REACT_APP_STOCK_API_KEY}`;
    const stock_api = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${term}&apikey=${api_key}`;
    console.log(term);
    console.log(stock_api)
    
  
    
    axios.get(stock_api)
    .then(res => {
      console.log(res.data);
    })
    .catch(error => console.log(error))
  }

  render() {
    let stock_data = this.state.stock_data;
    const value = this.state.value;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the TwitterLens Stock Analytics Page
          </p>
            <Row>
              <SearchBar 
                defaultValue={this.state.value}
                onChange={this.handleChange}
                onClick={this.handleClick}/>
            </Row>
        </header>
      </div>
    );
  }
}

export default Stock;