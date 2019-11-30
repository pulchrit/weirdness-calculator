import React from 'react';
import GifItem from './GifItem';
import '../css/ResultsFavorites.css';

const ResultsFavorites = ({ favorites }) => {

    return (

        <section className="results-favorites">
            
            <h4 className="results-favorites-header">The GIFs you liked</h4>
                
                <div className="results-favorites-list">
                    {favorites.map((item, i) => (
                        <div className="results-item" key={`favorite-${i}`}>
                        <GifItem
                            key={`results-favorites-${i}`}
                            giphyObject={item}
                            gifSize="small"
                        />
                        <p className="individual-score" key={`individual-score-${i}`}>{item.weirdness}/10</p>
                        </div>
                    ))}
                </div>

        </section>
       
    );
}

export default ResultsFavorites;