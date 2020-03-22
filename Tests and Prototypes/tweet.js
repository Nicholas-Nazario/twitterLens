module.exports.Tweet = class Tweet { 
    constructor(time, id, text, entities, user, retweets, favorites){ 
        this.id = id; 
        this.time = time;
        this.text = text;
        this.entities = entities;
        this.user = user;
        this.retweets = retweets;
        this.favorites = favorites;
        console.log("Tweet: " + time + ", " + id + ", " + text + " created")
    } 
    // add_Address(add){ 
    //     this.add = add; 
    // } 
    getDetails(){ 
        console.log(`Name is ${this.user.screen_name}, Text is: ${this.text}`); 
    } 
} 
