//change cat to user's input
$("button").on("click", function() {
var userInput = $(this).attr("cat");
var API_KEY = "mAhE7iqIcCAwTNupTLQFftXPFTL7tFjm";
var queryURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${API_KEY}&limit=10`;

$.ajax({
    url: queryURL,
    method: "GET"
  });
    then(function(response) {
      var results = response.data;
      console.log(response);
    )};
});