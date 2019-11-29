import React from 'react';
import Intro from './Intro';
import SearchBox from './SearchBox';
import GiphyResult from './GiphyResult';
import WeirdSlider from'./WeirdSlider';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import '../css/SelectGif.css';
//import FavButton from './FavButton';

const SelectGif = ({ 
    giphyObject, 
    handleSubmitSearch, 
    handleChangeSearchTerm, 
    handleClearSearchTerm,
    searchTerm,  
    handleClickAddToFavorites,
    weirdness,
    handleWeirdnessChange,
    isLoading,
    error }) => {

    return (
        <section className="select-gif">

            <Intro />

            <SearchBox 
                handleSubmitSearch={handleSubmitSearch}
                handleChangeSearchTerm={handleChangeSearchTerm}
                handleClearSearchTerm={handleClearSearchTerm}
                //handleChangeInputValue={handleChangeInputValue}
                searchTerm={searchTerm}
                //inputValue={inputValue}
            />

            <GiphyResult 
                giphyObject={giphyObject}
                isLoading={isLoading}
                error={error} 
            />

            {/* It might make more sense to create this as a separate FavButton component, 
            which I started to do, but it seemed a little unnecessary...but I can also see
            how this is not DRY... */}
            {/* <button 
                className="button fav-button" 
                type="button"
                onClick={handleClickAddToFavorites(giphyObject)}
            >
                <FontAwesomeIcon className='fa-thumbs-up' icon={faThumbsUp} />
            </button> */}
            <Button 
                buttonName="favButton"
                buttonClassName="button fav-button"
                buttonType="button"
                buttonEvent={handleClickAddToFavorites}
                buttonEventArg={giphyObject}
                buttonContent={<FontAwesomeIcon className='fa-thumbs-up' icon={faThumbsUp} />}
                buttonDisabled={false}
            />

            <WeirdSlider 
                weirdness={weirdness} 
                handleWeirdnessChange={handleWeirdnessChange}
            />

        </section>

    )
}

export default SelectGif;