import React from 'react';
import { toTitleCase } from './utilities';
import '../css/GifItem.css';

const GifItem = ({ giphyObject, gifSize }) => {

    // Get title. Initialize url.
    const {title} = giphyObject;
    let url;

    // Get url based on gif size needed for this view.
    // GiphyResult uses large. Favorites and ResultsFavorits use small.
    // large is the original.webp, small is fixed_width.webp (200px)
    gifSize === 'large'
        ? url = giphyObject.largeUrl 
        : url = giphyObject.smallUrl; 
    
    return (
        <div className="gif-item" >
            
            <h5>{toTitleCase(title)}</h5>

            <img 
                className="gif-image"
                src={url} 
                alt={title}
            />

        </div>
    );
}

export default GifItem;