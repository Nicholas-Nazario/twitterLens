import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col, Grid} from 'react-bootstrap';

var Twit = require('twit');
var config = require('./config')
const Tweet = require('./tweet').Tweet 

function Twitter() {
  function searchTwitter(keyword){
    var T = new Twit(config);
    var params = { 
      q: keyword,
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

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the TwitterLens Twitter Analytics Page
        </p>
        <Form>
            <Row>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Please enter a company name:  </Form.Label>
                    <Form.Control type="tick" placeholder="ex. Apple"/>
                </Form.Group>
                <Form.Group>
                    <Button onClick={searchTwitter} variant="primary" type="submit">Submit</Button>
                </Form.Group>
            </Row>
        </Form>
      </header>
    </div>
  );
}

export default Twitter;