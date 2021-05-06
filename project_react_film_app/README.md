## Project React Film App

### The goal of this project is to practice working with React, specifically reacting to changes

Basic functionality: we want our app to request data from the Studio Ghibli API (https://ghibliapi.herokuapp.com), to show films, locations, film directors etc. 

Additional functionality: search function to search films, locations, and people

Note: the basic CSS code has been created in the `index.css` file. Don't forget to import the css! This is what the app will look like:  

<img src="/project_react_film_app/studio_ghibli_films.png" width="600" />

**Basic setup:**  

1. Create a project folder using `npx create-react-app`
1. Delete all unnecessary code
1. Use the classNames that are in the index.css file (save yourself some time!)
1. Create a Film component 
1. Write the code to get all the films from Studio Ghibli
1. Show the films on the screen: a header with the film title, and then the film details Director, Producer, Release date and Rotten Tomato Score


**Full project:**

1. Add search functionality to your app: when the user types on char in the search box, the results should show up immediately, and each time when more characters are typed the results that do not match should disappear
1. Create searches for film, location and people
1. Use buttons in the sidebar to change the type of search (film, location and people)
1. Show the search results on the screen