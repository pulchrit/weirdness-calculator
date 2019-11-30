import React from 'react';
import SelectGif from './SelectGif';
import Favorites from './Favorites';
import '../css/MainContent.css';

const MainContent = ({ 
    giphyObject, 
    handleSubmitSearch, 
    handleChangeSearchTerm, 
    searchTerm, 
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

           {/*  {error && <div className="error">{error}</div>}

            {isLoading 
                ? <div className="loading">Loading </div>} */}
            <SelectGif 
                giphyObject={giphyObject}
                handleSubmitSearch={handleSubmitSearch}
               // handleClearSearchTerm={handleClearSearchTerm}
                //handleChangeInputValue={handleChangeInputValue}
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