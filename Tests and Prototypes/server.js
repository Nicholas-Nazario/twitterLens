console.log("Test started")
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);
var params = { 
    q: 'Google',
    count: 100
}

T.get('search/tweets', params, searchedData);

function searchedData(err, data, response) {
    //console.log(data);
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++) {
        // Get the tweet from the returned data
        let tweet = { text: data.statuses[i].text }
        console.log(tweet)
    }
}