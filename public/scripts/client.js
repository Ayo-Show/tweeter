/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
  let html = "";
  for (let tweet of tweets) {
    html += createTweetElement(tweet);
  }
  return html;
}

const createTweetElement = function(tweet) {


 return `<article class="tweet-component">
        <!-- image-username-refkey -->         
        <div class="image-username-refkey">
          <div class="image-username">             
            <img src="${tweet.user.avatars}" alt="" />             
            <span>${tweet.user.name}</span>           
          </div>
          <div>${tweet.user.handle}</div>           
        </div>         
        <!-- tweet contect -->         
        <div class="tweet-content">

          <p>${tweet.content.text}</p>         
               
        <!-- time and reactions icons -->

          <div class="time-reactions">           
            <p>${timeago.format(tweet.created_at)}</p>           
            <div class="icons">

          <i class="fas fa-flag"></i>             
          <i class="fas fa-retweet"></i>             
          <i class="fas fa-heart"></i> 
                
        </div>         
      </div>       
    </article>`

}

const $tweet = renderTweets(data);

$(document).ready(function(){$('#tweets-container').append($tweet);})
// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
 // to add it to the page so we can make sure it's got all the right elements, classes, etc.