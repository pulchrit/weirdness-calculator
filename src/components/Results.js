import React from 'react';
import Button from './Button';
import ResultsFavorites from './ResultsFavorites';
import { Link } from 'react-router-dom';
import '../css/Results.css';

const Results = ({ favorites, handleClickStartOver }) => {
    
    // Calculate total weirdness score by finding average weirdness from 
    // the weirdness value of each favorite.
    const totalScore = Math.round(
            favorites.reduce((total, currVal) => (total += currVal.weirdness), 0)
        )/favorites.length;
    
    return (
        <section className="results">

            <h2 className="total-score">
                You scored {totalScore} out of 10 on the weirdness scale!
            </h2>

            <ResultsFavorites 
                favorites={favorites}
            />

            <Button
                buttonClassName="button"
                buttonType="button"
                buttonEvent={handleClickStartOver}
                buttonEventArg={null}
                buttonContent={<Link to="/" className='start-over-button'>START OVER</Link>}
                buttonDisabled={false}
            />
 
        </section>
    );
}

export default Results; 
