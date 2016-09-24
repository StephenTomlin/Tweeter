/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
function loadTweets() {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    dataType: 'json',
    success: function (data2) {
      renderTweets(data2)
    }
  });
}
loadTweets();


function createTweetElement(tweet) {
  console.log(tweet)
  let $tweet = $(
    `<article class="tweet">
      <header>
        <img class="profile-pic" src="${tweet.user.avatars.small}" />
        <p class="tweeter-handle">${tweet.user.handle}</p>
        <h2 class"posted-profile-name">${tweet.user.name}</h2>
      </header>
      <section class="post">
        <p>${tweet.content.text}</p>
      </section>
      <footer>

        <div>
          <i class="fa fa-flag" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
        <p class="footer-text">${timeSince(tweet.created_at)}</p>
       </footer>
    </article>`
  );
  // $tweet.addClass("tweet");
  $("#contain-tweets").append($tweet);
}


function renderTweets(tweetDatabase) {
  $('#contain-tweets').empty();
  tweetDatabase.forEach(function(val) {
    createTweetElement(val);
  });
};
$("form").submit(function(ev) {
  event.preventDefault();
  let req_body = {};
  $(this).serializeArray().forEach((field) => {
    req_body[field.name] = field.value;
  })
  console.log(req_body)
  $.ajax({
    url: '/tweets',
    method: 'POST',
    dataType: 'json',
    data: req_body,
    success: loadTweets
  });
});

function timeSince (pre) {
  var result = Date.now() - pre;

  result = result / 1000;
  var minutes = result / 60;
  var hours = minutes / 60;
  var days = hours / 24;
  var weeks = days / 7;
  console.log(`days ${Math.floor(days)} ago`)
  console.log(new Date(pre))
  if (minutes < 30) {
   return (`a few moments ago.`)
  } else if (minutes < 59) {
   return (`${Math.floor(minutes)} minutes ago.`)
  } else if (hours < 24) {
   return (`${Math.floor(hours)} hours ago.`)
  } else if (days < 7) {
   return (`${Math.floor(days)} days ago`)
  } else if (weeks > 1) {
   return (`${Math.floor(weeks)} weeks ago.`)
  }

}
