const express = require("express");
let Twit = require('twit');
const dotenv = require("dotenv");
const Sentiment = require('sentiment');

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
  const params = { 
      q,
      language: 'en',
      count: 100    
  }

  //call the Twitter api
  T.get('search/tweets', params, function(err, data, response) {
    //check to see if there are no errors
    if (err == null){
      //log the data for debugging purposes
      //console.log(data);

      //create a json to hold all important metrics about the sentiment of the search
      let metrics = {
        totalScore: 0,
        overallSentiment: "",
        numPositiveTweets: 0,
        numNegativeTweets: 0,
        numNeutralTweets: 0,
      };

      //sentiment analysis here
      let twitterData = [];
      let sentiment = new Sentiment();

      for (var i = 0; i < data.statuses.length; i++) {
        //use analyze function in sentiment library to analyze the tweet sentiment
        const sentScore = sentiment.analyze(data.statuses[i].text);
        //console.log(sentScore);
        //determine the tweet sentiment and increment the corresponding variable to count number of each sentiment
        var tweet_sentiment = '';
        //neutral
        if(sentScore.score == 0) {
          tweet_sentiment = 'neutral';
          metrics.numNeutralTweets++;
        }
        //positive
        else if(sentScore.score > 0) {
          tweet_sentiment = 'positive';
          metrics.numPositiveTweets++;
        }
        //negative
        else if(sentScore.score < 0) {
          tweet_sentiment = 'negative';
          metrics.numNegativeTweets++;
        }
        //add current score to overall total score
        metrics.totalScore += sentScore.score;

        //add data to twitterData
        twitterData.push({
            tweet: data.statuses[i].text,
            sentiment: tweet_sentiment,
        });
        //add all sentiment analysis data for current tweet to twitterData
        for (var key in sentScore){
          twitterData[twitterData.length - 1][key] = sentScore[key];
        }
        //add all tweet data for current tweet to twitterData
        for (var key in data.statuses[i]){
          twitterData[twitterData.length - 1][key] = data.statuses[i][key];
        }
      }

      //calculate overall sentiment and update metrics.overallSentiment
      if (metrics.totalScore > 0){
        metrics.overallSentiment = "positive";
      }
      else if (metrics.totalScore < 0) {
        metrics.overallSentiment = "negative";
      }
      else {
        metrics.overallSentiment = "neutral";
      }

      //send response to the client with data as a JSON
      res.json({
        error: false,
        items: data.statuses,
        sentiment: twitterData,
        "metrics": metrics
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