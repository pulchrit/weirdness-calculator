import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import Results from './Results';
import NotFoundPage from './NotFoundPage';
import Footer from './Footer';
import '../css/App.css';

/* I'm using class components where needed instead of function components with hooks 
  because I'm learning Redux for this challenge, and I've only just learned hooks.
  So, it seemed safer and more expedient to hold one of the variables still
  (i.e., use class components with Redux). */


const App = () => {
  
    return (
      <div className="App">
        
        <Header />

        <Switch>
          <Route 
            exact
            path="/"
            component={MainContent}
          />

          <Route 
            path="/results"
            component={Results}
          />

          <Route component={NotFoundPage} />
        </Switch>

        <Footer />

      </div>
    );
}

export default App;

