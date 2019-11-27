import React from 'react';
import SelectGif from './SelectGif';
import Favorites from './Favorites';
import '../css/MainContent.css';

const MainContent = ({ 
    giphyObject, 
    handleSubmitSearch, 
    handleChangeInputValue, 
    inputValue, 
    handleClickAddToFavorites, 
    favorites,
    weirdness,
    handleWeirdnessChange }) => {
    
    return (
        <main>

            <SelectGif 
                giphyObject={giphyObject}
                handleSubmitSearch={handleSubmitSearch}
                handleChangeInputValue={handleChangeInputValue}
                inputValue={inputValue}
                handleClickAddToFavorites={handleClickAddToFavorites}
                favorites={favorites}
                weirdness={weirdness}
                handleWeirdnessChange={handleWeirdnessChange}
            />

            <Favorites 
                favorites={favorites} 
            />

        </main>
    );

}

export default MainContent; 