import React, {Component} from 'react';
/*import Button from 'react-bootstrap/Button';*/
/*import Form from 'react-bootstrap/Form';*/
import {Row} from 'react-bootstrap';
import axios from 'axios';
const qs = require('query-string');

var Twit = require('twit');
var config = require('./config')
const Tweet = require('./tweet').Tweet 

function searchTwitter(){
  var T = new Twit(config);
  const params = { 
    q: 'Google',
    language: 'en',
    count: 100    
  }
  T.get('search/tweets', params, searchedData);
}


function searchedData(err, data, response) {
  //console.log(data);
  var tweets = [];
  // Loop through the returned tweets
  for(let i = 0; i < data.statuses.length; i++) {
    // Get the tweet from the returned data
    //let tweetText = { text: data.statuses[i].text }
    let tweet = data.statuses[i];
    tweets.push(new Tweet(tweet.created_at, tweet.id, tweet.text, tweet.entities, tweet.user, tweet.retweet_count, tweet.favorite_count));
    //console.log(tweetText)
  }
  console.log(tweets[0])
}

class Twitter extends Component {
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
      change_value: e.target.value
    });
  }

  handleClick(e) {
    if (e) e.preventDefault();
    this.setState ({
      value: '',
      term: this.state.value
    });

    //let term = this.state.value;
    let term = 'Google';
    const api_key = '${process.env.REACT_APP_STOCK_API_KEY}';
    console.log(term);
    
    const twitter_api = 'https://api.twitter.com/1.1/search/tweets.json?q=${term}&language=en&count=100';
    // console.log(twitter_api)
    
    
    // const response = await axios.get(twitter_api)
    // .then(res => {
    //   console.log(res.data);
    // })
    // .catch(error => console.log(error))

    // console.log(response.data)

    const params = { 
      q: 'Google',
      language: 'en',
      count: 100    
    };

    axios({
      url: `https://api.twitter.com/1.1/search/tweets.json?${qs.stringify(
        params,
      )}`,
      method: 'GET',
      headers: {
        Authorization: 'OAuth oauth_consumer_key="PWgZm9kGHyw611SWf3AFPhJF7",oauth_token="1222989356992016390-A4oRtuva5nHsZPs0hFgyGz1F06Txh4",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1585175917",oauth_nonce="d8fVIIvhqqP",oauth_version="1.0",oauth_signature="fq5untfEh1d1RSO9Aj2O6KienbI%3D"'
      },
    })
      .then(items => {
          console.log(items.data.statuses)
      })
      .catch(() => {
        console.log("error occurred")
      });
  }

  render() {
    let twitter_data = this.state.twitter_data;
    const value = this.state.value;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the TwitterLens Tweet Analytics Page
          </p>
            <Row>
                <form className = "search_bar">
                  <input className="search_input"
                    defaultValue = {this.state.value}
                    onChange={this.handleChange}/>
                    <button className="search_button" onClick={searchTwitter}>Twitter Search</button>
                </form>
            </Row>
        </header>
      </div>
    );
  }
}

export default Twitter;