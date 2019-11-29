import React from 'react';
import SelectGif from './SelectGif';
import Favorites from './Favorites';
import '../css/MainContent.css';

const MainContent = ({ 
    giphyObject, 
    handleSubmitSearch, 
    handleChangeSearchTerm, 
    handleClearSearchTerm,
    searchTerm, 
    handleClickAddToFavorites, 
    favorites,
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
                handleClearSearchTerm={handleClearSearchTerm}
                //handleChangeInputValue={handleChangeInputValue}
                handleChangeSearchTerm={handleChangeSearchTerm}
                searchTerm={searchTerm}
                handleClickAddToFavorites={handleClickAddToFavorites}
                favorites={favorites}
                weirdness={weirdness}
                handleWeirdnessChange={handleWeirdnessChange}
                isLoading={isLoading}
                error={error}
            />

            <Favorites 
                favorites={favorites} 
            />

        </main>
    );

}

export default MainContent; 