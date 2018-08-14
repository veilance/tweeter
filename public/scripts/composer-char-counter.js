$(document).ready(function () {
  $(".new-tweet form textarea").keyup(function () {
    let count = $(this).siblings(".counter");
    let remainingText = 140 - this.textLength;

    if((this.textLength) > 140){
      count.css('color', 'red');
    } else {
      count.css('color', 'black');
    }
    count.text(remainingText);
  });
});










