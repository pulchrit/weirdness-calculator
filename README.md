
This project was created for the Politech code challenge.

## Weirdness Calculator
Find and favorite weird gifs with this single page asynchronous web app. 

### Technical notes
- Frameworks and libraries:  React, React Router, Fontawesome
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

