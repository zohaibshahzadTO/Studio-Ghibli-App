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
