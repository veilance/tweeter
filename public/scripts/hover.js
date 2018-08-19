$(function () {
  $('body').on('mouseenter', 'article.tweet', function () {
    $(this).css('border-color', 'black');
    $(this).children('header').css('background', 'lightgrey');
    $(this).find('div.icons').css('display', 'inline');
  })

  $('body').on('mouseleave', 'article.tweet', function () {
    $(this).css('border-color', 'gainsboro');
    $(this).children('header').css('background', '#F0F0F0');
    $(this).find('div.icons').css('display', 'none');
  })

  $('button#compose').on('click', function (e) {
    e.preventDefault();
    $("section.new-tweet").slideToggle("fast");
    $("section.new-tweet form textarea").focus();
  });

});
