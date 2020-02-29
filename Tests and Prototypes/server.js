console.log("Test started")
var Twit = require('twit');
var config = require('./config')
const Tweet = require('./tweet').Tweet 
//import Tweet from './tweet'
var T = new Twit(config);
var params = { 
    q: 'Google',
    count: 100
}
//const tweet = new Tweet("", "","","","","","");
//console.log(tweet);
T.get('search/tweets', params, searchedData);

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