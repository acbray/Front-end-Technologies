// var request = new XMLHttpRequest();

// request.open(
//   "GET",
//   "https://api.giphy.com/v1/gifs/trending?api_key=zABJgHwzsd79ZQ8yMn3PMplXtD2xSDXU&limit=10&offset=2&rating=g"
// );

// request.onload = function () {
//   var response = request.response;
//   var parsedData = JSON.parse(response);
//   console.log(parsedData);
//   var originalUrl = parsedData.data[0].images.original.url;
//   console.log(originalUrl);

//   var gif = document.createElement("img");
//   gif.setAttribute("src", originalUrl);
//   document.body.appendChild(gif);
// };

// request.send();

$.ajax ({
  url: 'https://api.giphy.com/v1/gifs/random?api_key= YOUR_WRONG_API_KEY&rating=g',
  success: function(response) {
      console.log(response)
      if (response.data.user != null) {
          var originalUrl = response.data.user.avatar_url;
          $("body").append("<img src = '" + originalUrl + "'></img>")
      }
  },
  error: function() {
      console.log("Something went wrong!");
  }
})

