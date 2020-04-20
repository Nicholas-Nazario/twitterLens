import React from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import qs from 'query-string';
import './Twitter.css';
import GenericChart from './components/GenericChart';
import { trackPromise } from 'react-promise-tracker';

class Twitter extends React.Component {
  //constructor for Twitter
  //makes call to superclass React.Component and sets up this.state
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      isLoading: false,
      tweets: [],
      metrics: {}
    };
  }

  //function that takes in a keyword, updates this.state, and makes a call to this.search()
  searchTwitter(keyword){
    this.state.q = keyword;
    this.setState({
      q: keyword,
      isLoading: true,
      tweets: [],
      metrics: {}
    });

    this.search();
  }

  //function that makes an api call to search Twitter
  search(){
    //hide the tweet-container until results are returned
    let tweetContainer = document.getElementById("tweet-container");
    let tweetSentiment = document.getElementById("tweet-sentiment");
    tweetContainer.style.display = 'none';
    tweetSentiment.style.display = 'none';

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
    trackPromise(
    axios(options)
    .then(res => {
      //parse the tweets and metrics data from the response data
      const tweets = res.data.items;
      const metrics = res.data.metrics;
      
      //update the states of the variables tweets, isLoading, and metrics
      this.setState({
        tweets,
        isLoading: false,
        metrics
      });

      //set the display of the tweet-container and sentiment-table to 'block' to show the search results
      tweetContainer.style.display = 'block';
      tweetSentiment.style.display = 'block';
    }));
  }

  //function that handles when the user presses the submit button
  onSearch = e => {
    e.preventDefault();

    this.search();
  };

  //function that handles when the value of the input textfield changes
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //return a rendering of the html and javascript code below
  render() {
    {/* 
      Select options for the tweet sentiment pie chart
      Allows for font color, slive color and 3D styling
    */}
    let options={
      title:"Tweet Sentiment",
      backgroundColor: '#2f3238',
      is3D: true,
      titleTextStyle: {
        color: 'white',
        fontSize: 24,
      },
      pieSliceTextStyle: {
        color: 'black',
        fontSize: 20,
      },
      legend: {
        textStyle: {
          color: 'white',
          fontSize: 20,
        }
      },
      slices: {
        0:{color: 'green'},
        1:{color: 'red'},
        2:{color: 'yellow'},
      }
    };

    {/*
      Creation of tweet sentiment data into an array for pie chart
      Uses positive, negative and neutral tweets
      Pie chart automatically determines total and percentages
    */}
    let data = [
      ['TweetType', 'Number of Tweets'],
      ['Positive Tweets', this.state.metrics.numPositiveTweets],
      ['Negative Tweets', this.state.metrics.numNegativeTweets],
      ['Neutral Tweets', this.state.metrics.numNeutralTweets],
    ];

    return (
      <div className="Twitter">
        <header className="App-header">
          <Row>
            {/* Render tweet sentiment pie chart with options and data */}
            <div id="tweet-sentiment" className="tweet-sentiment">
              {!this.state.isLoading &&
                  <GenericChart
                    chartType = {"PieChart"}
                    width={'1100px'}
                    height={'600px'}
                    data={data}
                    options={options}
                  />
              }
            </div>
          </Row>
          <Row>
            <div id="tweet-container" className="tweet-container">
              {/* if the API return call is loading, display a loading message */}
              {this.state.isLoading && <p>Loading...</p>}
              {/* tweets are loaded in, display the search results */}
              {!this.state.isLoading &&
              this.state.tweets.map((item, key) => (
                /* code below handles the rendering of each tweet item */
                <div key={key} className={item.sentiment + "-tweet-item"}>
                  {/* render the user's picture */}
                  <Col xs={{ right: 10 }}>
                    <img
                      className={item.sentiment + "-profile-image"}
                      src={item.user.profile_image_url_https}
                      alt="Profile"
                    />
                  </Col>
                  {/* render a link to the user's twitter page */}
                  <Col>
                    <p><a href={`https://twitter.com/${item.user.screen_name}`} target="_blank" rel="noreferrer noopener">{item.user.name}</a></p>
                  </Col>
                  <p className="tweet-text">{item.text}</p>
                  {/* render a link to the user's tweet */}
                  <Col>
                    <a href={`https://twitter.com/${item.user.screen_name}/statuses/${item.id_str}`} target="_blank" rel="noreferrer noopener">More...</a>
                  </Col>     
                </div>
              ))}
            </div>
          </Row>    
        </header>
      </div>
    );
  }
}

Twitter.propTypes = {};

export default Twitter;