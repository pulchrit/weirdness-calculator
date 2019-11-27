import React from 'react';
import giphyLogo from '../images/PoweredBy_200px-White_HorizText.png';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <a href="https://giphy.com/"> <img src={giphyLogo} alt="Powered by Giphy" /> </a>
            <p>Code challenge submitted by Melissa Lafranchise.</p>
        </footer>
    );
}

export default Footer; 