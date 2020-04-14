// React Imports 
import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import axios from 'axios';
import StockTable from './components/StockTable.js';
import Stockchart from './components/Stockchart.js';
//import Moment from 'react-moment';

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
      stock_map:null,
      dataRet: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Function to create array of past thirty trading days
  //    Loops through data from Stock API to get dates 
  //    Doesn't include holidays or weekends
  // Return an array of the dates in String format
  createThirtyDays(e) {
    let dates = [];
    for (const [key,] of Object.entries(e)) {
      dates.push(key);
    }
    let sortedDates = dates.sort((a,b) => a.valueOf() - b.valueOf());
    let sortedThirty = sortedDates.slice(0,30);
    return sortedThirty;
  }

// Function to create a map of stock data from the thirty trading days
//    Loops through past thirty trading days
//    Gets data from StockAPI and adds to an array
//    Map is created with date as key and value of stock data
// Return map to handler
createMapOfStocks(d, s) {
  let map = new Map();
  for (var i in d) {
    let stockForDate = s[d[i]];
    let arr = [];
    for (var j in stockForDate) {
      arr.push(stockForDate[j]);
    }
    map.set(d[i], arr);
  }
  return map;
}


  // Function to create an array of stock data from the thirty trading days
  //    Loops through past thirty trading days
  //    Gets data from StockAPI and adds to an array in format for Stockchart
  // Return array to handler
  createArrOfStocks(d, s) {
    let retArr = [];
    for (var i in d) {
      let stockForDate = s[d[i]];
      let arr = [];
      arr.push(d[i]);
      arr.push(parseFloat(stockForDate['3. low']));
      arr.push(parseFloat(stockForDate['1. open']));
      arr.push(parseFloat(stockForDate['4. close']));
      arr.push(parseFloat(stockForDate['2. high']));
      retArr.push(arr);
    }
    retArr.push(["Day", "", "", "", ""]);
    return retArr;
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
      let stocks = res.data['Time Series (Daily)'];
      console.log(stocks);
      let dates = this.createThirtyDays(stocks);
      let thirtyStocksMap = this.createMapOfStocks(dates, stocks);
      let thirtyStocksArr = (this.createArrOfStocks(dates, stocks)).reverse();
      this.setState({
        stocks:thirtyStocksArr,
        stock_map:thirtyStocksMap,
        dataRet: true
      });
      
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
    let stocks = this.state.stocks;
    let stock_map = this.state.stock_map;
    return (
      <div className="Stock">
        {/* Render the table for the stocks data here */}
        <Row>
          <div className = "stock-chart">
            {this.state.dataRet &&
              <Stockchart
                data={stocks}
              />
            }
          </div>
        </Row>   
        {/* Render the table for the stocks data here */}          
        <Row>
          <div className = "stock_display">
            {this.state.dataRet &&
              <StockTable
                stocks={Array.from(stock_map)[0]}
              />
            }
          </div>
        </Row>
      </div>
    );
  }
}

export default Stock;