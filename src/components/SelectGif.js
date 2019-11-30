import React from 'react';
import Intro from './Intro';
import SearchBox from './SearchBox';
import GiphyResult from './GiphyResult';
import WeirdSlider from'./WeirdSlider';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import '../css/SelectGif.css';

const SelectGif = ({ 
    giphyObject, 
    handleSubmitSearch, 
    handleChangeSearchTerm, 
    searchTerm,  
    handleClearSearchTerm,
    handleClickAddToFavorites,
    favoritesError,
    weirdness,
    handleWeirdnessChange,
    isLoading,
    error}) => {

    return (
        <section className="select-gif">

            <Intro />

            <SearchBox 
                handleSubmitSearch={handleSubmitSearch}
                handleChangeSearchTerm={handleChangeSearchTerm}
                handleClearSearchTerm={handleClearSearchTerm}
                searchTerm={searchTerm}
            />

            <GiphyResult 
                giphyObject={giphyObject}
                isLoading={isLoading}
                error={error} 
            />

            <Button 
                buttonClassName="button fav-button"
                buttonType="button"
                buttonEvent={handleClickAddToFavorites}
                buttonEventArg={giphyObject}
                buttonContent={<FontAwesomeIcon className='fa-thumbs-up' icon={faThumbsUp} />}
                buttonDisabled={false}
            />

            {favoritesError && 
                <div className="error">
                    Oops! You are only allowed to like one GIF per search term. Please enter a different search term.
                </div>}

            <WeirdSlider 
                weirdness={weirdness} 
                handleWeirdnessChange={handleWeirdnessChange}
            />

        </section>

    )
}

export default SelectGif;