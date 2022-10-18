### `Instructions`

Here are the first steps to set up the project:

1.Must have a Spotify account (if not sign up here : https://www.spotify.com/us/signup)
2.Go to the Spotify Developer Dashboard and Log In.
3.Once logged in, click on Create App.
4.Name it and describe it.
5.Once created and on its page, click on the Edit Settings button.
6.In the Redirect URIs section, add http://localhost:3000 (or wherever you are going to host the website).
7.Also next to the Edit Settings button, click on 'Users And Access' to manage the Spotify users you want to allow access to your app in development mode. You can add spotify accounts by Email and Name .
8.Copy the client ID in src/components/Authentication.js and also make sure that http://localhost:3000 (or wherever you're running the app from) is placed in its redirect URIs also in src/components/Authentication.js .

### `Time spent on project`

Around 11 hours (Lots of tutorials included)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Open http://localhost:3000 to view it in your browser.
