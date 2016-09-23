'use strict'

// function $(query) {
//   return document.querySelector(query);
// }

// function $$(query) {
//   return document.querySelectorAll(query);
// }


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
  if (entryLength > 140) {
    alert("Your entry is too long!");
  }
  else if (entryLength ===0 || entryLength === "") {
    alert("Your entry is too short!");
  }
}));

$(".compose-button").click(function() {
  $(".new-tweet").slideToggle("slow", function() {
    const input = $('#text');
    input.focus();
    input.select();
  })
})
// $(document).ready(function(){
//    {
//
//     let new_tweet_body = {}
//     new_tweet_body = $(this).serializeArray();
//     onsole.log($(this).serializeArray());
//   });
// });
