const express = require("express");
const axios = require('axios');
const qs = require('query-string');
var Twit = require('twit');
const dotenv = require("dotenv")

//pulls api keys from an environment variable file
dotenv.config({path:__dirname+'/./client/src/.env'});

//create express server and setup to host on port 3001
const app = express();
app.set("port", 3001);

//the /tweets route handles a Twitter seach request from the client
app.get("/tweets", (req, res)=> {
  //create a new Twit object with the protected credentials
  var T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_KEY,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  //parse q from the parameters and setup the rest of the parameters for the api call
  const q = req.params.q;
  console.log(q);
  var params = { 
      q,
      language: 'en',
      count: 100    
  }

  // //call the Twitter api
  // T.get('search/tweets', params, function(err, data, response) {
  //   //error checking
  //   if (err == null){
  //     //log the data for debugging purposes
  //     console.log(data);
  //     //send response to the client with data as a JSON object
  //     res.json({
  //       error: false,
  //       items: data.statuses,
  //     });
  //   }
  //   else {
  //     console.log(err);
  //     res.json({
  //       error: true,
  //       message: 'error: something went wrong',
  //     });
  //   }
    
  // });
});

app.get("/tweets2", (req, res) => {
  //const q = 'Google';
  //http://localhost:3001/tweets?q=Google&accessToken=1222989356992016390-A4oRtuva5nHsZPs0hFgyGz1F06Txh4
  const q = req.query.q;

  const params = {
    q,
    include_entities: false,
    language: 'en',
    count: 100,
  };

  console.log(`https://api.twitter.com/1.1/search/tweets.json?${qs.stringify(params,)}`);
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
      console.log(items.data.statuses);
      res.json({
        error: false,
        items: items.data.statuses,
      });
    })
    .catch((error) => {
      //console.log("ERROR");
      res.json({
        error: true,
        message: 'Something went wrong',
      });
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
        res.send("Error");
      } 
      else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
        res.send("Error");
      }
      res.send("ERROR");
      console.log(error.config);
    });
});

//open up express server at: http://localhost:3001/
app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});