"use strict";

$(function () {

  // helper function to get the date
  function getDate(tweetObject) {
    let d = new Date().getTime();
    let date = Math.round((d - tweetObject['created_at'])/ 86400000);
    return date;
  }

  // Creates Tweet Element taking in information from the tweet generator 
  function createTweetElement(tweetObject) {

    let date = getDate(tweetObject);

    let $tweety = $("<article>").addClass("tweet");

    let $img = $(`<img src=${tweetObject['user']['avatars']['small']}>`),
      h1 = $(`<h1 class="name">${tweetObject['user']['name']}</h1>`),
      h4 = $(`<h4 class="handle">${tweetObject['user']['handle']}</h4>`);

    let $header = $("<header>").append($img, h1, h4);

    let $body = $("<div>").addClass("text");
    let $para = $("<p>").text(`${tweetObject['content']['text']}`);
    $body.append($para);

    let $footer = $("<footer>");
    let $p = $(`<p>Created ${date} days ago<p>`),
      icons = $(`<div class="icons"><i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i></div>`);

    $footer.append($p, icons);

    $tweety.append($header);
    $tweety.append($body);
    $tweety.append($footer);
    return $tweety;
  }

  // Renders the tweets descending order 
  function renderTweets(tweets) {
    for (let i in tweets) {
      $('#tweet-container').prepend(createTweetElement(tweets[i]));
    }
    return $('#tweet-container');
  }

  // Gets the tweets from the /tweets and sends it to the renderTweets function 
  function loadTweets() {
    $.get('/tweets').done(function (tweets) {
      renderTweets(tweets);
    })
  }

  // On user submit - checks the for form submission errors and then renders with an ajax call to post tweets 
  $('form#render-tweet').on('submit', function (e) {
    e.preventDefault();
    let data = $(this).serialize();
    let charError = $('#char-error');
    if (charError.is(':visible')) {
      charError.slideToggle("fast");
    }

    if ((data.length - 5) > 140) {
      charError.slideToggle("fast");
      return;
    } else {
      $.post("/tweets/", data).done(function () {
        $('#tweet-container').empty();
        loadTweets();
        $('form#render-tweet textarea').val('');
        $('form#render-tweet span.counter').text('140');
      });
    }
  });

  loadTweets();

});




