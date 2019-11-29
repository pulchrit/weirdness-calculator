import React from 'react';
import '../css/WeirdSlider.css';

const WeirdSlider = ({ weirdness, handleWeirdnessChange }) => {
    
    return (
        <div className="weirdness-slider">
            <input 
                type="range" 
                id="weirdness" 
                className="slider" 
                name="weirdness" 
                min="0" 
                max="10" 
                value={weirdness}
                onChange={(event) => handleWeirdnessChange(event.target.valueAsNumber)}
            />

            <label htmlFor="weirdness">Weirdness: {weirdness}</label>
        </div>

    );
}

export default WeirdSlider;