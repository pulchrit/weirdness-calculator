import React from 'react';
import GifItem from './GifItem';
import '../css/GiphyResult.css';

const GiphyResult = ({ giphyObject, isLoading, error }) => {

    // Display gif, error message, or loading message depending on current status.
    // Default is set to gif so the static placeholder will display on load. 
    let display = <GifItem giphyObject={giphyObject} gifSize="large"/>;

    if (error) {
        display = <p className="error">{error}</p>;
    } else if (isLoading) {
        display = <p>Loading GIF...</p>;
    } 
    
    return (
        <section className="giphy-result">

            <h4>YOUR RESULT</h4>
            
            <div className="gif-item-result">
                {display}
            </div>

        </section>
    );
}

export default GiphyResult;