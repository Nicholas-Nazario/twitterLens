const { Keystone } = require('@keystonejs/keystone');
const { Text } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');
var Twit = require('twit');
var config = require('./public/config')
const Tweet = require('./public/tweet').Tweet 

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const PROJECT_NAME = "Twitter Lens";


const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

keystone.createList('Todo', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    name: { type: Text, schemaDoc: 'This is the thing you need to do' },
  },
});

function searchTwitter(keyword){
  //var Twit = require(['./../index']).Twit;
  //var config = require(['./config']) 
  var T = new Twit(config);
  var params = { 
    q: keyword,
    language: 'en',
    count: 100    
  }
  T.get('search/tweets', params, searchedData);
}

function searchedData(err, data, response) {
  //const Tweet = require(['./tweet']).Tweet 
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

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: '/', src: 'public' }),
    new AdminUIApp({ enableDefaultRoute: true }),
  ],
  Twit,
  config,
  Tweet,
  searchTwitter,
  searchedData,
};
