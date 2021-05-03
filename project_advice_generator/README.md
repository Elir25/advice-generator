## Project Advice Generator

### The goal of this project is to practice working with an API

We will use the Advice Slip JSON API for our project (https://api.adviceslip.com/#top).

Basic funtionality: we want our programme to generate a new advice whenever the user presses the button.

**Basic setup (without API requests):**

1. Create an index.html file with the general template code
1. Create a main.js file
1. Create a style.css file
1. Link the JavaScript file to the HTML document so that the JavaScript code will be able interact with the HTML document
1. Add **Advice Generator** within the `<title>` tags
1. Add an `<h1>` element with the title of your app as the first element in the `<body>`
1. Create a `<div>` element with an id name of `adviceDisplay`
1. Add a `<button>` element with an onclick attribute with `newAdvice()` passed into it
1. The `advice.js` file contains an array of strings that you can use for testing the javascript functionality before you start working with the API
1. The `newAdvice()` function needs to generate a random whole number that ranges from 0 to the length of our advice array (in the `advice.js` file)
1. Use the number from the previous step as value called `randomNumber` to get the content of the random advice into the `adviceDisplay` element
1. Add styling to the style.css file you created 

**Full project, working with the API:**

1. Instead of getting an advice string from the `advice.js` file, you request a random advice using the Advice Slip JSON API (see url at the top of this README)
1. Write a `getAdvice()` function and use this as the onclick attribute for the button
1. The `getAdvice()` function should return a random advice from the Advice Slip JSON API
1. Show the response data (the advice) in the `adviceDisplay` element