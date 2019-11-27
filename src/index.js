import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './index.css';
import App from './components/App';

// Using React Router for client-side route management.
// ScrollToTop ensures the page automatically scrolls to
// the top when the path changes. 
// Attribution: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition 

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </BrowserRouter>, 
    document.querySelector('#root')
);


