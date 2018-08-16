"use strict";

$(function () {

  function createTweetElement(tweetObject) {
    let $tweety = $("<article>").addClass("tweet");

    let $img = $(`<img src=${tweetObject['user']['avatars']['small']}>`),
      h1 = $(`<h1 class="name">${tweetObject['user']['name']}</h1>`),
      h4 = $(`<h4 class="handle">${tweetObject['user']['handle']}</h4>`);

    let $header = $("<header>").append($img, h1, h4);

    let $body = $("<div>").addClass("text");
    let $para = $("<p>").text(`${tweetObject['content']['text']}`);
    $body.append($para);

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
    for (let i in tweets) {
      $('#tweet-container').prepend(createTweetElement(tweets[i]));
    }
    return $('#tweet-container');
  }

  function loadTweets() {
    $.get('/tweets').done(function (tweets) {
      renderTweets(tweets);
    })
  }

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




