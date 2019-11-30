import React from 'react';
import SelectGif from './SelectGif';
import Favorites from './Favorites';
import '../css/MainContent.css';

const MainContent = ({ 
    giphyObject, 
    handleSubmitSearch, 
    handleChangeSearchTerm, 
    searchTerm, 
    handleClearSearchTerm,
    handleClickAddToFavorites, 
    handleRemoveFromFavorites,
    favorites,
    favoritesError,
    weirdness,
    handleWeirdnessChange,
    isLoading,
    error }) => {
    
    return (
        <main>

            <SelectGif 
                giphyObject={giphyObject}
                handleSubmitSearch={handleSubmitSearch}
                handleClearSearchTerm={handleClearSearchTerm}
                handleChangeSearchTerm={handleChangeSearchTerm}
                searchTerm={searchTerm}
                handleClickAddToFavorites={handleClickAddToFavorites}
                favorites={favorites}
                favoritesError={favoritesError}
                weirdness={weirdness}
                handleWeirdnessChange={handleWeirdnessChange}
                isLoading={isLoading}
                error={error}
            />

            <Favorites 
                favorites={favorites} 
                handleRemoveFromFavorites={handleRemoveFromFavorites}
            />

        </main>
    );

}

export default MainContent; 