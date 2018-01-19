# Studio Ghibli App

In this project, we'll be creating a simple web app with vanilla Javascript that will retrieve information from an API and display it on the page.

No servers, dependencies, build tools used in this project.

# Goals

We'll be writing a simple web app that connects to a Studio Ghibli API that retrieves the data with Javascript and then displays it on the front end of a website.

# Overview

<b>What is an API?</b>
- API stands for Application Program Interface.
- Basically, an API can be defined as a set of methods of communication between various software components. In layman terms, it allows software to communicate with another software.

In this project we'll be focusing on Web API's, which allow a web server to interact with third party software. In this case, the web server will be using HTTP requests to communicate with publicly available URL endpoints containing JSON data.

Something else to note is that the HTTPS requests that will be used in this project correspond to CRUD terminology.

NOTE: CRUD = Create, Read, Update, Delete

# Connecting to the API

The Studio Ghibli API documentation was actually designed to help developers learn how to interact with and use HTTP requests.

What we're going to do is scroll to the films section (https://ghibliapi.herokuapp.com/#tag/Films). On the right hand side, you'll notice GET /films and upon clicking it, you'll see the URL of our API endpoint, https://ghibliapi.herokuapp.com/films. Clicking on the link provided will display an array of objects in JSON.

# Retrieving the Data with an HTTP request

First, we'll be creating a connection to the API using XMLHttpRequest objects which is a way to open files and make HTTP requests.

We’ll create a request variable and assign a new XMLHttpRequest object to it. Then we’ll open a new connection with the open() method – in the arguments we’ll specify the type of request as GET as well as the URL of the API endpoint. The request completes and we can access the data inside the onload function. When we’re done, we’ll send the request.

# Working with the JSON response

After receiving a response from our HTTP request, we can now do some work with it. However, the problem is that the response is in JSON and we need to convert that JSON into Javascript objects in order to work with it.

To do that, we'll use JSON.parse() to parse the response and create a 'data' variable that contains all the JSON as an array of Javascript objects.
