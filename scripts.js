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
We’ll create another element, a div this time, and set the class attribute to container.
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
      // Created a div with a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      // Created an h1 and set the text content to the film's title
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      // Created a 'p' and set the text content to the film's titles
      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300); // limits to 300 characters
      p.textContent = '${movie.description}...'; // End with an ellipses

      // Appended the cards to the container element
      container.appendChild(card);

      // Each card will contain an 'h1' and a 'p'
      card.appendChild(h1);
      card.appendChild(p);
    });
  }
  else {
    // Error message for 404 HTTP status code
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Gah, it\'s not working';
    app.appendChild(errorMessage);
  }
}

// Send request
request.send();
