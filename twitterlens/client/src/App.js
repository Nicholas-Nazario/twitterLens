import './App.css';
import React from 'react';
import './index.css';
import Stock from './Stock';
import SearchBar from './components/Search'
import {Row} from 'react-bootstrap';
import Twitter from './Twitter';

class App extends React.Component {
  constructor(props) {
    //make a call to the superclass constructor
    super(props);
    //set initial value of this.state
    this.state = {
      term: null,
      value: ''
    };
    //create 2 references to reference the Stock and Twitter Components
    this.child = React.createRef();
    this.child2 = React.createRef();
    //bind the handleChange and handleClick methods to this Component
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //handles the event where the value of the search bar is changed
  handleChange(e, data) {
    //change the value of value when the search bar value is changed
    this.setState({
      value: data.value
    });
  }

  //handles the event where the user hits the submit button
  handleClick(e, data){
    this.setState({
      value: data.value
    });

    e.preventDefault();

    // //update the state of value and term before calling the search functions
    // this.setState ({
    //   value: '',
    //   term: this.state.value
    // });
    
    //check to make sure search query is not undefined or blank
    if (data.value != undefined && data.value != ''){
      //call the search functions of each child to search for the value in each API
      this.child.current.searchStocks(data.value);
      this.child2.current.searchTwitter(data.value);
    } 
    //handle error with the search term
    else {
      //display a helpful error message that tells the user how to input valid input
      alert("Error: search term cannot be empty. Please input a stock ticker (ex. MSFT)");
    }
  }

  //return a rendering of the html and javascript code below
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to TwitterLens
          </p>
          <Row>
            {/* create a SearchBar and override the props to allow the SearchBar to use the values and methods we pass in */}
            <SearchBar 
                    // defaultValue={this.state.value}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onClick={this.handleClick}/>
          </Row>
          {/* load in the Stock and Twitter components and set a reference to each one to be able to access the component's methods */}
          <Row> <Stock ref={this.child} /> </Row>
          <Row> <Twitter ref={this.child2} /> </Row>
      </header>
    </div>
    );
  }
}


export default App;
