//  code you need to grab the data from keys.js. Then store the keys in a variable
var keysNeeded = require("./keys.js");
console.log(keysNeeded);


//npm install twitter was done
//taken from the NPM site.  Do I need to link this to the keys.js file?
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: keysNeeded.consumer_key,
  consumer_secret: keysNeeded.consumer_secret,
  access_token_key: keysNeeded.access_token_key,
  access_token_secret: keysNeeded.access_token_secret,
});



//request options
// client.get(path, params, callback);
// client.post(path, params, callback);
// client.stream(path, params, callback);



//Master reset incase I mess up the above
// var params = {screen_name: 'nodejs'};  //replaced screen_name with JasonNorthwest1
// client.get('statuses/user_timeline', params, function(error, tweets, response) { //'statuses/user_timeline' replacing and testing
//   if (!error) {
//     console.log("test");
//     console.log(params);
//   }
// });

//I think this is for the node console line
var myTweets = process.argv[2];

//test file
var params = {screen_name: 'JasonNorthwest1'};  //replaced screen_name with JasonNorthwest1
client.get('statuses/user_timeline', params, function(error, tweets, response) { //'statuses/user_timeline' replacing and testing
  if (!error) {
    // console.log(tweets[1].text);
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);
    }
  }
    


});


// client.get('favorites/list', function(error, tweets, response) {
//   if(error) throw error;
//   console.log(tweets);  // The favorites. 
//   console.log(response);  // Raw response object. 
// });




 //NPM copy and paste and I changed the username to ready my twitter username



//I think I'm creating a var and making it equal to the 2nd index of the command line for testing.  This console.logs  "myTweets", I need the actual tweet.
// var myTweets = process.argv[2];
// console.log(myTweets);