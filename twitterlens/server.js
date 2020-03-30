const express = require("express");
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

  //parse q from the query and setup the rest of the parameters for the api call
  const q = req.query.q;
  var params = { 
      q,
      language: 'en',
      count: 100    
  }

  //call the Twitter api
  T.get('search/tweets', params, function(err, data, response) {
    //check to see if there are no errors
    if (err == null){
      //log the data for debugging purposes
      console.log(data);
      //send response to the client with data as a JSON
      res.json({
        error: false,
        items: data.statuses,
      });
    }
    //error has occurred, send back an error response
    else {
      //log the error for debugging purposes
      console.log(err);
      //send back an error response to the client as a JSON
      res.json({
        error: true,
        message: 'error: something went wrong',
      });
    }
  });
});

//open up express server at: http://localhost:3001/
app.listen(app.get("port"), () => {
  console.log(`Find the proxy server at: http://localhost:${app.get("port")}/`);
});