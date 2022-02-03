# E-Commerce App

This responsive web app implements Firebase to allow the user to create an account or sign-in with Google with authentication and verification via Google's APIs. Stripe allows backend functionality that allows the app to take and process payments. This app is built with React, SASS, Styled Components and uses Redux to manage state.

## Languages/Frameworks/Libraries Used

* React
* React-Hooks
* Redux
* Redux-Saga
* Styled Components
* Sass
* Firebase
* Stripe
* Heroku

## Key Features

* Allows users to login with their Google account with user authentication via Firebase.
* Allows users to create an account, which create a new collections and documents for the user in the Firebase cloud database. This data is later used to authenticate the user via Firebase auth utility functions.
* Most of the information about the items, images and price is also stored on the firebase database is and accessed as the pages mount. 
* Users can keep adding and removing items, which is displayed both on the shopping cart and the cart page. This is possible because of state management via Redux-Sagas.
* The user is able to make payments thanks to the help of the Stripe integration. There is a client and server directory for the app; functions for stripe to handle the payments are in the server.
* There is a Spinner comoment that shows until the pages recive data from firebase asynchronously.
* It is fully responsive and adapts to mobile phones.
* It is PWA compliant(uses https, service workers and has a modified manifest file) and can somewhat run even without internet. 
