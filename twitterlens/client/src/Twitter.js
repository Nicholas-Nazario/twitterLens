import React from 'react';
import {Row, Col} from 'react-bootstrap';
import App from './components/App'
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
    };
  }

  //function that takes in a keyword, updates this.state, and makes a call to this.search()
  searchTwitter(keyword){
    this.state.q = keyword;
    this.setState({
      q: keyword,
      isLoading: true,
      tweets: [],
    })

    this.search();
  }

  //function that makes an api call to search Twitter
  search(){
    //hide the tweet-container until results are returned
    var div = document.getElementById("tweet-container");
    div.style.display = 'none';
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

      //set the display of the tweet-container to 'block' to show the search results
      div.style.display = 'block';
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
      <App>
        <header className="App-header">
          <Row>
            <div id="tweet-container" className="tweet-container">
            {/* if the API return call is loading, display a loading message */}
            {this.state.isLoading && <p>Loading...</p>}
            {/* tweets are loaded in, display the search results */}
            {!this.state.isLoading &&
            this.state.tweets.map((item, key) => (
              /* code below handles the rendering of each tweet item */
              <div key={key} className="tweet-item">
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
        </header>
      </App>
    );
  }

}

Twitter.propTypes = {};

export default Twitter;