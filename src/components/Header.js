import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>
                <Link to="/" className="headline">Weirdness Calculator</Link>
            </h1>
        </header>
    );
}

export default Header; 

