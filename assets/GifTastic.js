// //change cat to user's input
// $("button").on("click", function() {
// var userInput = $(this).attr("cat");
// var API_KEY = "mAhE7iqIcCAwTNupTLQFftXPFTL7tFjm";
// var queryURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${API_KEY}&limit=10`;

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   });
//     then(function(response) {
//       var results = response.data;
//       console.log(response);
//     )};
// });

var topics = ['Cat', 'Dog', 'Skunk'];

$(document).on("click", 'button', function () {

  var animal = $(this).attr("data-animal");
  var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + animal + '&api_key=mAhE7iqIcCAwTNupTLQFftXPFTL7tFjm&limit=10';

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      var results = response.data;
      console.log(response)
      $("#gifs-appear-here").empty();
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var title = results[i].title;

        var p = $("<p>").text("Title: " + title);

        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(animalImage);

        $("#gifs-appear-here").prepend(gifDiv);

        //rating, username, title
      }
    })
})

function makeButtons() {

  $('#buttons').empty();
  for (var i = 0; i < topics.length; i++) {
    var b = $('<button>').text(topics[i]);

    b.attr("data-animal", topics[i]);
    $('#buttons').append(b);
  }
}
makeButtons();
// var input = document.createElement("input");
    // input.setAttribute('type', 'text');
    // var parent = document.getElementById("addCriteria");
    // parent.appendChild(input);

    // create an input and a button that says Add Criteria
    // on button clicked
    // get text from input
    // push onto topics
    // recreate buttons