/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const renderTweets = function (tweets) {
  $(".tweets-container").empty();
  for (let tweet of tweets) {
    $(".tweets-container").prepend(createTweetElement(tweet));
  }
};

const createTweetElement = function (tweet_data) {
  let $tweet = $("<article>").addClass("tweet-cont2");
  $tweet.append(`
          <div>
            <header>
              <div class="tweet-head">
               
                <div>
                  <span><img src="https://i.imgur.com/73hZDYK.png"/></span>
                  <span>
                  ${tweet_data.user.name}
                  </span>
                </div>
                <div>
                  <span>${tweet_data.user.handle}</span>
                </div>
              </div>        
            </header>
              
              <div class= "tweet-body">
              <span>${tweet_data.content.text}</span>
              </div>
             
              <div class="tweet-footer">
                <div>
                 <span>${timeago.format(tweet_data.created_at)}</span>
                </div>
                <footer>
                  <i class="fas fa-flag"></i>
                  <i class="fas fa-retweet"></i>
                  <i class="fas fa-heart"></i>
                </footer>
              </div>
          </div>
      
`);
  return $tweet;
};




const loadTweets = function () {
  $.ajax({
    url: "/tweets",
    method: "GET",
    dataType: "json",
  })
    .then(function (data) {
      renderTweets(data);
    })
    .catch(function (error) {
      alert(error.message);
    });
};

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let form = $(this);
    let char = $("textarea").val().length;

    if (char === 0) {
      $(".errormsg").text("⚠ Please compose tweet ⚠").slideDown("slow");
    }
    if (char > 140) {
      $(".errormsg")
        .text("⚠ Tweet can only be 140 characters or less ⚠")
        .slideDown("slow");
    }
    if (char > 0 && char < 140) {
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: form.serialize(),
      })
        .then(function (data) {
          loadTweets();
          $(".errormsg").hide();
          $("textarea").val("");
        })
        .catch(function (error) {
          console.log(error.message);
        });
    }
  });

  loadTweets();
  $("#arrow").click(() => {
    $("#tweet-text").focus()
  })
});

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


