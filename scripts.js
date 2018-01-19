// Create a request a variable and assign a new XMLHttpRequest object to it
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);

  data.forEach(movie => {
    // Log each movie's title
    console.log(movie.title);
  });
}

// Send request
request.send();
