import React from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import qs from 'query-string'
import './Twitter.css'

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
    let sentimentTable = document.getElementById("sentiment-table");
    tweetContainer.style.display = 'none';
    sentimentTable.style.display = 'none';

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
      //parse the tweets and metrics data from the response data
      const tweets = res.data.items;
      const metrics = res.data.metrics;
      console.log(metrics); 
      //update the states of the variables tweets, isLoading, and metrics
      this.setState({
        tweets,
        isLoading: false,
        metrics
      });

      //set the display of the tweet-container and sentiment-table to 'block' to show the search results
      tweetContainer.style.display = 'block';
      sentimentTable.style.display = 'block';
    });
  }

  //function that handles when the user presses the submit button
  onSearch = e => {
    e.preventDefault();

    this.search();
  };

  //function that handles when the value of the input textfield changes
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  //return a rendering of the html and javascript code below
  render() {
    return (
        <header className="App-header">
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
                      className="profile-image"
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
          <Row>
          {/* // Navabar component and formatting is following the template from BootStrap 4.4.x */}
          {!this.state.isLoading &&
            <div id="sentiment-table" name="sentiment-table" className="sentiment-table">
              <header className="Table-header">
                <div>
                  <table className="table table-bordered"> 
                    <thead>
                    <tr>
                      <th scope="col">Tweets analyzed</th>
                      <th scope="col">Overall Sentiment</th>
                      <th scope="col"># of Positve Tweets</th>
                      <th scope="col"># of Neutral Tweets</th>
                      <th scope="col"># of Negative Tweets</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>{(this.state.metrics.numPositiveTweets + this.state.metrics.numNeutralTweets + this.state.metrics.numNegativeTweets).toString()}</td>
                      <td>{this.state.metrics.overallSentiment}</td>
                      <td>{this.state.metrics.numPositiveTweets}</td>
                      <td>{this.state.metrics.numNeutralTweets}</td>
                      <td>{this.state.metrics.numNegativeTweets}</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    </tfoot>
                  </table>
                </div>
              </header>
            </div>
          }
          </Row>
        </header>
    );
  }
}

Twitter.propTypes = {};

export default Twitter;