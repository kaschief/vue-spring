# CAPinside Frontend Challenge

**Every participant will try to create a small VueJS SPA that allows users to search and browse gifs from the [Giphy API](https://developers.giphy.com/docs/api/#quick-start-guide)**

This repository delivers a basic setup with webpack, jest and an express server that will "simulate" a rails server.
## **Acceptance Criteria**

### **Technical**

* The SPA will be written in Typescript, SCSS and VueJS
* It will use bootstrap as a basic style framework (no need to design further)
* It will have full test coverage on unit test level

### **Features**

* The root page will an index page, which loads 20 random giphys from the api and shows them in a grid on cards
* The user will be able to paginate the index page
* On the top of the Index page is a search bar, which allows the user to filter the results
* If the user clicks on a giphy, a modal will be opened showing the giphy and the corresponding links to the source file allowing the user to copy and pate into any messenger / social media

### _Optional features_

* On the index page and the detail modal, i have the option to add and remove the Giphy to / from a personal favourites list
* I can open my favourites list and remove the given items there too
* In the detail modal i will have a button called "copy to clipboard" which copies the link to the clipboard


## Hints

* To run the webpack dev with watch, run `yarn dev`
* To run the server, run `yarn serv`
* To run the tests, run `yarn jest`

Your application should be accessible on `localhost:3000`
