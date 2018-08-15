/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
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
      "avatars": {
        "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



$(function () {
  renderTweets(data); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  // refactor later for a function to take in the parameters 
  $('article.tweet').hover(
    function () {
      $(this).css('border-color', 'black');
      $(this).children('header').css('background', 'lightgrey');
      $(this).find('div.icons').css('display', 'inline');
    }, function () {
      $(this).css('border-color', 'gainsboro');
      $(this).children('header').css('background', '#F0F0F0');
      $(this).find('div.icons').css('display', 'none');
    });
});

// Object -> Element containing HTML
function createTweetElement(tweetObject) {
  let $tweety = $("<article>").addClass("tweet");

  let $img = $(`<img src=${tweetObject['user']['avatars']['small']}>`),
    h1 = $(`<h1 class="name">${tweetObject['user']['name']}</h1>`),
    h4 = $(`<h4 class="handle">${tweetObject['user']['handle']}</h4>`);

  let $header = $("<header>").append($img, h1, h4);

  let $body = $("<div>").addClass("text");
  $body.append($(`<p>${tweetObject['content']['text']}</p>`));

  let $footer = $("<footer>");
  let $p = $(`<p>${tweetObject['created_at']}<p>`),
    icons = $(`<div class="icons"><i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i></div>`);

  $footer.append($p, icons);
  $tweety.append($header);
  $tweety.append($body);
  $tweety.append($footer);
  return $tweety;
}

function renderTweets(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let i in tweets) {
    $('#tweet-container').append(createTweetElement(tweets[i]));
  }
  return $('#tweet-container');
}


