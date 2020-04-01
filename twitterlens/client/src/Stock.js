// React Imports 
import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import axios from 'axios';
import SearchBar from './components/Search.js';
import _ from 'lodash';

// This class creates the Stock part of a Page
// This component will be displayed on the front page 
// It extends the react Component inheriting essential react functionality such as render()
class Stock extends Component {
  // Constructor for the Stock Class
  constructor() {
    super();
    this.state = {
      term:null,
      value: '', 
      stocks: [],
      dataRet: false
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

  // handleClick is the function in charge of functionality after the button click
  // It creates the proper url to call to the AlphaVantage API site
  // It then uses axios.get() to reach out with the url and return data 
  //    If the data does not successfully return an error will be caught in console
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
      console.log(res.data['Time Series (Daily)']['2020-03-31']);
      console.log(Array.from(res.data['Time Series (Daily)']['2020-03-31']).map((stock) => [{open: stock['1. open'], high: stock['2. high'], low: stock['3. low'], close: stock['4. close'], volume: stock['5. volume']}]));
      // let stocks = _.flattenDeep(Array.from(res.data['Time Series (Daily)']['2020-03-31']).map((stock) => [{open: stock['1. open'], high: stock['2. high'], low: stock['3. low'], close: stock['4. close'], volume: stock['5. volume']}]));
      let stocks = res.data['Time Series (Daily)']['2020-03-31'];
      console.log(stocks);
      this.setState({
        stocks,
        dataRet: true
      });
      
    })
    .catch(error => console.log(error))
  }

  // Render the below HTML code and export as Stock
  // This lets the index.js read the HTML as a single object
  render() {
    let stocks = this.state.stocks;
    const value = this.state.value;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the TwitterLens Stock Analytics Page
          </p>
            <Row>
              {/*
                Render the SearchBar component
                handleChange - set the state of value to the user input
                handleClick - make the Stock API call once the user clicks
              */}
              <SearchBar 
                defaultValue={this.state.value}
                onChange={this.handleChange}
                onClick={this.handleClick}/>
            </Row>
            <Row>
              <div className = "stock_display">
                {this.state.dataRet &&
                  <div>
                    <table class="table table-striped"> 
                      <thead>
                        <tr>
                          <th scope="col">Open ($)</th>
                          <th scope="col">High ($)</th>
                          <th scope="col">Low ($)</th>
                          <th scope="col">Close ($)</th>
                          <th scope="col">Volume (Shares)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{stocks["1. open"]}</th>
                          <td>{stocks["2. high"]}</td>
                          <td>{stocks["3. low"]}</td>
                          <td>{stocks["4. close"]}</td>
                          <td>{stocks["5. volume"]}</td>
                        </tr>
                      </tbody>
                      <tfoot>
                      </tfoot>
                    </table>
                  </div>
                }
              </div>
            </Row>
        </header>
      </div>
    );
  }
}

export default Stock;