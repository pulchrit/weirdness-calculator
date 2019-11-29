import React from 'react';
import GifItem from './GifItem';
import '../css/GiphyResult.css';

const GiphyResult = ({ giphyObject, isLoading, error }) => {
    
    return (
        <section className="giphy-result">

            <h4>YOUR RESULT</h4>

            {error && <div className="error">{error}</div>}
            
            <div className="gif-item-result">
                {isLoading
                    ?   <p>Loading GIF...</p>
                    :   <GifItem 
                            giphyObject={giphyObject} 
                            gifSize="large"
                        />}
            </div>

        </section>
    );
}

export default GiphyResult;