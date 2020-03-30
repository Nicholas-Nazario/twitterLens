import React, {Component} from 'react';
/*import Button from 'react-bootstrap/Button';*/
/*import Form from 'react-bootstrap/Form';*/
import {Row, Col} from 'react-bootstrap';
import TwitterService from './TwitterService'
import App from './components/App'

class Twitter extends React.Component {
  state = {
    q: '',
    isLoading: false,
    tweets: [],
  };

  constructor() {
    super();
    this.state = {
      q: '',
      isLoading: false,
      tweets: [],
    };
  }

  state = {
    q: '',
    isLoading: false,
    tweets: [],
  };

  searchTwitter(){
    this.setState({
      isLoading: true,
    });

    const q = '@Google';

    //console.log(q);
    TwitterService.searchTweets({
      q: '@Google',
    }).then(tweets => {
      //fetch.addHistory(q, tweets.length);
      this.setState({
        tweets,
        isLoading: false,
      });
    });
  }

  onSearch = e => {
    e.preventDefault();

    this.searchTwitter();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
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
        <style jsx global>{`
          body {
            font-family: sans-serif;
          }

          a {
            color: #00A4EF;
            text-decoration: none;
          }

          p {
            margin: 0;
          }
        `}</style>
        <style jsx>
          {`
            .content {
              padding: 0 15px;
            }

            .search-bar {
              height: 15vh;
              border-radius: 10px;
              box-shadow: 0 5px 20px 0 rgba(204, 204, 204, 0.5);
              padding: 10px 15px;
              margin: 10px 0;
              word-break: break-all;
            }

            .category-item {
              color: #00A4EF;
              margin-right: 10px;
              cursor: pointer;
            }

            .tweet-container {
              height: 75vh;
              background: #fff;
              padding: 0 15px;
              overflow-y: scroll;
              border-radius: 10px;
              box-shadow: 0 5px 20px 0 rgba(204, 204, 204, 0.5);
            }

            .tweet-item {
              color: #14171a;
              border-bottom: 1px solid #e6ecf0;
              word-break: break-all;
              margin: 10px 0;
              padding-bottom: 10px;
            }

            .profile-image {
              height: 30px;
              border-radius: 50%;
              border: 1px solid #ccc;
            }

            .tweet-text {
              margin: 5px 0;
            }

            .input-search {
              width: 100%;
              box-sizing: border-box;
              border: 0;
              border-bottom: 1px solid #d3dfef;
              font-size: 14px;
              letter-spacing: 0.3px;
              padding: 14px 20px;
            }

            .btn {
              width: 100%;
              box-sizing: border-box;
              border: 0;
              border-bottom: 1px solid #d3dfef;
              font-size: 14px;
              letter-spacing: 0.3px;
              padding: 14px 20px;
              transition: all 0.2s linear;
              box-shadow: 0 4px 16px 0 rgba(69, 91, 99, 0.08);
            }
          `}
        </style>
      </App>
    );
  }
}

Twitter.propTypes = {};

export default Twitter;