// React Imports 
import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import axios from 'axios';
import SearchBar from './components/Search.js';

// This class creates the Stock part of a Page
// This component will be displayed on the front page 
// It extends the react Component inheriting essential react functionality such as render()
class Stock extends Component {
  // Constructor for the Stock Class
  constructor() {
    super();
    this.state = {
      term:null,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Set the state of value to the event variable e
  // When the user types, it is considered an event and
  //    is sets the value to the text typed
  handleChange(e) {
    this.setState( {
      value: e.target.value
    });
  }

  // Searches the Stock API for a given keyword
  // It creates the proper url to call to the AlphaVantage API site
  // It then uses axios.get() to reach out with the url and return data 
  //    If the data does not successfully return an error will be caught in console
  searchStocks(keyword){
    let term = keyword;
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

  // handleClick is the function in charge of functionality after the button click
  handleClick(e) {
    if (e) e.preventDefault();
    this.setState ({
      value: '',
      term: this.state.value
    });

    this.searchStocks(this.state.value.toString())
    
  }

  // Render the below HTML code and export as Stock
  // This lets the index.js read the HTML as a single object
  render() {
    let stock_data = this.state.stock_data;


    return (
      <div className="App">
        <header className="App-header">
            <Row>
              {/*
                Render the table for the stocks data here
              */}
              
            </Row>
        </header>
      </div>
    );
  }
}

export default Stock;