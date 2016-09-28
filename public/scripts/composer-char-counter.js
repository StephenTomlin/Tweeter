'use strict'

let $text = $('#text');
let $counter = $('#countdwn');

$(document).ready($text.on('input', function(ev){
  let tweetLength = $text.val().length
  $counter.text(140 - tweetLength); // this.value.length
  if (tweetLength > 140) {
    $counter.css('color', 'red');
  }else{
    $counter.css('color', 'black');
  }
}));

$(document).ready($("form").submit(function(event){
  event.preventDefault();
  let entryLength = $(this.text).val().length
  if (entryLength >= 140) {
    event.preventDefault();
    alert("Your entry is too long!");
    return
  }
  else if (entryLength === 0 || entryLength === "") {
    event.preventDefault();
    alert("Your entry is too short!");
    return
  }
}));

$(".compose-button").click(function() {
  $(".new-tweet").slideToggle("slow", function() {
    const input = $('#text');
    input.focus();
    input.select();
  })
})

