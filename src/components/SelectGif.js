import React from 'react';
import Intro from './Intro';
import SearchBox from './SearchBox';
import GiphyResult from './GiphyResult';
import WeirdSlider from'./WeirdSlider';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addToFavorites, throwFavoritesError } from '../redux/actions';
import '../css/SelectGif.css';


class SelectGif extends React.Component {

    // Probably should split this into two actions...? One for actually 
    // adding a favorite and one for only updating the value of favoritesError.
    handleClickAddToFavorites = (giphyObject) => {
        
        // Check that no favorite yet exists for this searchTerm.
        // Filter for any favorites with the current searchTerm. If no
        // such favorites exist an empty array will be returned. 
        const duplicateSearchTermFound = this.props.favorites.filter(fav => fav.forSearchTerm === this.props.searchTerm);

        // Check that this specific GIF doesn't exist already in favorites. 
        // (Sometimes during testing, the giphy api returns the same gif even though the weirdness
        // value has changed. When this occurred, I WAS able to add a duplicate GIF to my favorites.
        // So, this check just ensures that the GIF itself isn't duplicated in favorites.)
        // Returns an array with the duplicate object if found, otherwise returns
        // an empty array.
        const duplicateGifFound = this.props.favorites.filter(fav => fav.id === this.props.giphyObject.id);

        // If a favorite for the current searchTerm exists or the current giphyObject 
        // already exists in favorites (i.e., either array will 
        // have a length > 0), set favortiesError to true, thus conditionally rendering
        // the error message. Also, set the searchTerm to empty string, so that focus will 
        // be passed to the search box and prompt the user to enter a new searchTerm.
        if (duplicateSearchTermFound.length > 0 || duplicateGifFound.length > 0) {
            this.props.dispatch(throwFavoritesError('', true));

        
        // If no favorite for this searchTerm or GIF exists, add this GIF as a new favorite.
        } else {

            // favoritesError is also set to false in handleChangeSearchTerm() 
            // so that the error message is removed as soon as a new search term is entered.
            // This duplication might cause problems...???
            
            // Add weirdness value and searchTerm from state to giphyObject.
            const newFavorite = {
                ...this.props.giphyObject,
                weirdness: this.props.weirdness,
                forSearchTerm: this.props.searchTerm
            };

            // Add this new favorite to the favorites list in state.
            // Reset searchTerm to empty string, so alert will display and focus 
            // will be passed to the search box in the SearchBox component.
            this.props.dispatch(addToFavorites('', newFavorite, false));

        }
    }

    render() {

        const { giphyObject, favoritesError } = this.props;

        return (
            <section className="select-gif">

                <Intro />

                <SearchBox />

                {favoritesError && 
                    <div className="error">
                        Oops! You are only allowed to like one GIF per search term. Please enter a different search term.
                    </div>}

                <GiphyResult />

                <Button 
                    buttonClassName="button fav-button"
                    buttonType="button"
                    buttonEvent={this.handleClickAddToFavorites}
                    buttonEventArg={giphyObject}
                    buttonContent={<FontAwesomeIcon className='fa-thumbs-up' icon={faThumbsUp} />}
                    buttonDisabled={false}
                />

                <WeirdSlider />

            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    giphyObject: state.fetchReducers.giphyObject,
    searchTerm: state.appReducers.searchTerm,
    weirdness: state.appReducers.weirdness, 
    favorites: state.appReducers.favorites,
    favoritesError: state.appReducers.favoritesError
});

export default connect(mapStateToProps)(SelectGif);
