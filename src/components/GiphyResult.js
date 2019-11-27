import React from 'react';
import GifItem from './GifItem';
import '../css/GiphyResult.css';

const GiphyResult = ({ giphyObject }) => {
    
    return (
        <section className="giphy-result">

            <h4>YOUR RESULT</h4>
            
            <div className="gif-item-result">
                <GifItem 
                    giphyObject={giphyObject} 
                    gifSize="large"
                />
            </div>

        </section>
    );
}

export default GiphyResult;