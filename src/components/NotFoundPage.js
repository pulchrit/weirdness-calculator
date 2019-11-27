import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFoundPage.css';

const NotFoundPage = () => {
    
    return (
        <div className="not-found">
            <h3>Oops! This page cannot be found.</h3>
            <Link to="/" className="text-link">Go to the main page.</Link>
        </div>
    );
}

export default NotFoundPage;