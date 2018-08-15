/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function () {
  console.log('IM READY');
  let header = $('article.tweet header');
  let footer = $('article.tweet footer');
  $('article.tweet').hover(
    function () {
      $(this).css('border-color', 'black');
      header.css('background', 'lightgrey');
      footer.
    }, function () {
      $(this).css('border-color', 'gainsboro');
      header.css('background', 'white');
    });
});