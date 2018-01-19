const app = document.getElementById('root');

/*
The first thing in our website is the logo, which is an img element.
We’ll create the image element with createElement().
*/
const logo = document.createElement('img');
/*
An empty img is no good, so we’ll set the src attribute to logo.png.
*/
logo.src = 'logo.png';

/*
We’ll create another element, a div this time,
and set the class attribute to container.
*/
const container = document.createElement('div');
container.setAttribute('class', 'container');

/*
Now we have a logo and a container, and we just need to place them
in the website. We’ll use the appendChild() method to append the logo
image and container div to the app root.
*/
app.appendChild(logo);
app.appendChild(container);






// Create a request a variable and assign a new XMLHttpRequest object to it
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);


  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      // Log each movie's title
      console.log(movie.title);
    });
  }
  else {
    console.log('error');
  }
}

// Send request
request.send();
