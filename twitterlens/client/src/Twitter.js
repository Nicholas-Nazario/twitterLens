import React from 'react';
import {Row, Col} from 'react-bootstrap';
import App from './components/App'
import axios from 'axios';
import qs from 'query-string'
import './Twitter.css'

class Twitter extends React.Component {
  //constructor for Twitter
  //makes call to superclass React.Component and sets up this.state
  constructor() {
    super();
    this.state = {
      q: '',
      isLoading: false,
      tweets: [],
    };
  }

  //set initial state variables
  state = {
    q: '',
    isLoading: false,
    tweets: [],
  };

  //function that makes an api call to search Twitter
  searchTwitter(){
    //set the state to reflect that the tweets are loading in
    this.setState({
      isLoading: true,
    });

    //parse the q value from this.state.q
    const q = this.state.q;

    //setup the parameters for the api call
    const params = {
      q
    }

    //setup the options for the api call
    const options = {
      url: `/tweets?${qs.stringify(params)}`,
      method: 'GET',
    };

    //make call to /tweets route to the proxy server with the params and options
    axios(options)
    .then(res => {
      //parse the tweets from the response data
      const tweets = res.data.items;
      //update the states of the variables tweets and isLoading
      this.setState({
        tweets,
        isLoading: false,
      });
    });
  }

  //function that handles when the user presses the submit button
  onSearch = e => {
    e.preventDefault();

    this.searchTwitter();
  };

  //function that handles when the value of the input textfield changes
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  //return a rendering of the html and css code below
  render() {
    return (
      <App>
        <header className="App-header">
          <p>
            Welcome to the TwitterLens Tweet Analytics Page
          </p>
            <Row>
                <form className = "search-bar">
                  <input 
                    type="text" 
                    className="input-search" 
                    name="q"
                    value = {this.state.q}
                    onChange={this.onChange}
                  />
                    <button className="search_button" onClick={this.onSearch}>Twitter Search</button>
                </form>
                <div className="tweet-container">
                {this.state.isLoading && <p>Loading...</p>}
                {!this.state.isLoading &&
                this.state.tweets.map((item, key) => (
                  <div key={key} className="tweet-item">
                    
                      <Col xs={{ right: 10 }}>
                        <img
                          className="profile-image"
                          src={item.user.profile_image_url_https}
                          alt="Profile"
                        />
                      </Col>
                      <Col>
                        <p><a href={`https://twitter.com/${item.user.screen_name}`} target="_blank" rel="noreferrer noopener">{item.user.name}</a></p>
                      </Col>
                    
                    <p className="tweet-text">{item.text}</p>
                    
                      <Col>
                        <a href={`https://twitter.com/${item.user.screen_name}/statuses/${item.id_str}`} target="_blank" rel="noreferrer noopener">More...</a>
                      </Col>
                    
                  </div>
                ))}
              </div>
            </Row>
        </header>
      </App>
    );
  }
}

Twitter.propTypes = {};

export default Twitter;