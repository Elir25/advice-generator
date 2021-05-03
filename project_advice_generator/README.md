### The goal of this project is to practice working with an API

We will use the Advice Slip JSON API for our project (https://api.adviceslip.com/#top).

Basic funtionality: we want our programme to generate a new advice whenever the user presses the button.

1. Create an index.html file with the general template code
1. Create a main.js file
1. Create a style.css file
1. Link the JavaScript file to the HTML document so that the JavaScript code will be able interact with the HTML document
1. Add **Advice Generator** within the `<title>` tags
1. Add an `<h1>` element with the title of your app as the first element in the `<body>`
1. Create a `<div>` element with an id name of `adviceDisplay`
1. Add a `<button>` element with an onclick attribute with `newAdvice()` passed into it
1. The `advice.json` file contains three advice objects that you can use for testing the javascript functionality before you start working with the API
1. The newAdvice() function needs to generate a random whole number that ranges from 0 to the length of our advice array (in the `advice.json` file). 