import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer';
import './index.css';
import App from './components/App';

// Using React Router for client-side route management.
// ScrollToTop ensures the page automatically scrolls to
// the top when the path changes. 
// Attribution: https://tinyurl.com/vtxmfqr

// Create Redux store. Use thunk as middleware to 
// make fetch calls to the Giphy api.
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/weirdness">
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>, 
    document.querySelector('#root')
);


