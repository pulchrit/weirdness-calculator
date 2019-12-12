
This project was created for the Politech code challenge.

## Weirdness Calculator
Find and favorite weird gifs with this single page asynchronous web app. 

### Notes on this code challenge submission
- The master branch is a fully functional app using simple state. I am learning Redux for this challenge, so I thought it best to get the app working with simple state first.
- The redux-version branch is a *basically* functional app using Redux state, but needs a lot of debugging. However, I think this is what I can reasonably finish to submit the challenge by the deadline.
- My styles for the top border of the YOUR RESULTS section don't match the mock-up, and that's due to how I nested those components. 
- I'm not sure how granular my commits should be. If you have rules/recommendations around appropriate commit milestones, I will follow them. 
- I have one silly little smoke test written, but no other tests...so this was definitely not developed using test-driven-development.
- Chrome has a lot of warnings about cookies from the Giphy API. From my research (granted it was not at all exhaustive), it seems like this is something that Giphy needs to change on their end.

### Technical notes
- Frameworks and libraries:  React, React Router, Fontawesome
    - for redux-version branch: Redux, React-Redux, Redux-Thunk
- Powered by [Giphy](https://giphy.com/) and the [Giphy API](https://developers.giphy.com/) 
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Clone
(I'm not sure what other cloning instructions are required. Here is what I know to do.)
- Click clone and copy clone url from Github.
- In terminal: 
    - $ git clone clone-url new-project-name // clone repo to new repo on your computer
    - $ rm -rf .git && git init // remove old git commits and reinitialize a new git project
    - $ npm install // install dependencies
- Be sure to create an env.local file with your own API_KEY. Be sure to use REACT_APP_API_KEY as 
the variable name so the config file will pick it up correctly and so Create-React-App's build
script will find it for a production build as well. 

### Run, test, build
- These are default scripts direct from Create React App. You can learn more from the [Create React App documentation](https://create-react-app.dev/docs/getting-started/).
- Run the app in development mode at http://localhost:3000  
    - $ npm start
- Run tests 
    - $ npm test
- Build for production
    - $ npm run build



