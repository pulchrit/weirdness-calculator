import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom';
import './index.css';
import App from './App';

// Using React Router for client-side route management.

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.querySelector('#root')
);


