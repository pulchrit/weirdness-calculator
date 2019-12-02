import React from 'react';
import { Link } from 'react-router-dom';
import GifItem from './GifItem';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { removeFromFavorites } from '../redux/actions';
import '../css/Favorites.css';

const Favorites = ({ favorites }) => {

    // Determine current number of favorites and the number of favorites
    // needed before score can be calculated. 5 GIFs must be liked before score
    // can be calculate.
    const numberFavorites = favorites.length;
    const numberFavoritesNeeded = 5 - numberFavorites;
    
    // Based on the above, save the tally message to alert the user about 
    // the number of GIFs they need to like before they can get their score. 
    // This little bit of logic really just renders 'GIF' as plural or singular.
    const tallyMessage = numberFavoritesNeeded === 1 
        ? `You must like 1 more GIF to calculate your score.`
        : `You must like ${numberFavoritesNeeded} more GIFs to calculate your score.`;
    
    // Set a toggle for disabling the calculate score button based on the 
    // current number of favorites. If number of favorites is 5, then 
    // the button should not be disabled, hence disableButton = false.
    const disableButton = numberFavorites === 5 ? false : true;

    const handleRemoveFromFavorites = (id) => {

        // Filter for all favorites that do NOT have the id passed in. This effectively
        // removes the favorite that DOES have the id passed in (i.e., the one the
        // user wants to remove).
        const revisedFavorites = favorites.filter(fav => fav.id !== id);
    
        // Update state with this new favorites array.
        this.props.dispatch(removeFromFavorites(revisedFavorites));
    }

    return (
        <section className="favorites">
            
            <h4>YOUR LIKED GIFS</h4>

            {/* This list could be a separate component instead of just a list rendered... */}
            <div className="favorites-list">

                {favorites.map((item) => (
                    <div className="favorite-item" key={`favorite-item-${item.id}`}>
                        
                        <FontAwesomeIcon 
                            key={`remove-${item.id}`}
                            className='fa-times-circle' 
                            icon={faTimesCircle} 
                            onClick={(event) => handleRemoveFromFavorites(item.id)}
                        />

                        <GifItem
                            key={item.id}
                            giphyObject={item}
                            gifSize="small"
                        />
                    </div>
                ))}
            </div>

            <div className="button-message">
                
                {/* This may not be the best solution, but disabling the button doesn't disable 
                the React Router Link. So, I conditionally render the Link based on whether 
                disableButton is true/false. This allows for the disabled=true to have an effect.  */}
                <Button 
                    buttonClassName={`${disableButton ? 'disable-link' : 'button calculate-button'}`} 
                    buttonType="button"
                    buttonContent={disableButton 
                        ? <span className="disable-link">CALCULATE MY WEIRDNESS SCORE</span>
                        : <Link to="/results" className="calculate-link">CALCULATE MY WEIRDNESS SCORE</Link>}
                    buttonDisabled={disableButton}
                />
                
                {/* If disableButton is true (i.e., the button should be disabled), then
                display the tally message to alert users to the number of GIFs they still
                need to like before their score can be calculated and the button can be enabled. */}
                {disableButton && 
                    <div className="tally-message">
                        <p>{tallyMessage}</p>
                    </div>}
            </div>

        </section>
    );
}

const mapStateToProps = (state) => ({
    favorites: state.appReducers.favorites
});

export default connect(mapStateToProps)(Favorites);