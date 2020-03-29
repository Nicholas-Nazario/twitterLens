import React, {Component} from 'react';
/*import Button from 'react-bootstrap/Button';*/
/*import Form from 'react-bootstrap/Form';*/
import {Row} from 'react-bootstrap';
import axios from 'axios';
const qs = require('query-string');

var Twit = require('twit');
var config = require('./config')
const Tweet = require('./tweet').Tweet 

// function searchTwitter(){
//   var T = new Twit(config);
//   const params = { 
//     q: 'Google',
//     language: 'en',
//     count: 100    
//   }
//   T.get('search/tweets', params, searchedData);
// }


// function searchedData(err, data, response) {
//   //console.log(data);
//   var tweets = [];
//   // Loop through the returned tweets
//   for(let i = 0; i < data.statuses.length; i++) {
//     // Get the tweet from the returned data
//     //let tweetText = { text: data.statuses[i].text }
//     let tweet = data.statuses[i];
//     tweets.push(new Tweet(tweet.created_at, tweet.id, tweet.text, tweet.entities, tweet.user, tweet.retweet_count, tweet.favorite_count));
//     //console.log(tweetText)
//   }
//   console.log(tweets[0])
// }

class Twitter extends React.Component {
  static async getInitialProps() {
    let twitterAccessToken;
    try {
      twitterAccessToken = await Twitter.obtainAccessToken();
    } catch (error) {
      twitterAccessToken = '';
    }

    return {
      twitterAccessToken,
    };
  }

  constructor() {
    super();
    this.state = {
      term:null,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    q: '',
    isLoading: false,
    tweets: [],
  };

  searchTwitter(){
    const q = req.query.q || '@Google';

    const params = {
      q,
      include_entities: false,
      language: 'en',
      count: 100,
    };

    axios({
      url: `https://api.twitter.com/1.1/search/tweets.json?${qs.stringify(
        params,
      )}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${req.query.accessToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then(items => {
        res.json({
          error: false,
          items: items.data.statuses,
        });
      })
      .catch(() => {
        res.json({
          error: true,
          message: 'Something went wrong',
        });
      });
  }

  search(){
    this.setState({
      isLoading: true,
    });

    
  }

  handleChange(e) {
    this.setState( {
      change_value: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();

    this.search();
    
    
    // const response = await axios.get(twitter_api)
    // .then(res => {
    //   console.log(res.data);
    // })
    // .catch(error => console.log(error))

    // console.log(response.data)

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