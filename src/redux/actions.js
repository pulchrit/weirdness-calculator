import {
    buildFetchURL,
    handleServerErrors,
    handle404Errors,
    processData
} from '../components/utilities';

// Action types - save constants as strings of same name for ease of use.
export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';
export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const CHANGE_WEIRDNESS = 'CHANGE_WEIRDNESS';
export const START_OVER = 'START_OVER';
export const FETCH_GIF_BEGIN = 'FETCH_GIF_BEGIN';
export const FETCH_GIF_SUCCESS = 'FETCH_GIF_SUCCESS';
export const FETCH_GIF_FAILURE = 'FETCH_GIF_FAILURE';

// Action creators - save functions that return type for each action type
export const changeSearchTerm = (searchTerm) => ({
    type: CHANGE_SEARCH_TERM, 
    searchTerm 
});
  
export const clearSearchTerm = () => ({
    type: CLEAR_SEARCH_TERM,  
});

export const addToFavorites = (searchTerm, newFavorite, favoritesError) => ({
    type: ADD_TO_FAVORITES,
    searchTerm,
    newFavorite,
    favoritesError  
});

export const removeFromFavorites = (revisedFavorites) => ({
    type: REMOVE_FROM_FAVORITES,
    revisedFavorites 
});

export const changeWeirdness = (weirdness) => ({
    type: CHANGE_WEIRDNESS,
    weirdness  
});

export const startOver = () => ({
    type: START_OVER,  
});

export const fetchGifBegin = (searchTerm, weirdness) => ({
    type: FETCH_GIF_BEGIN,
    searchTerm,
    weirdness  
}); 

export const fetchGifSuccess = (gifObject) => ({
    type: FETCH_GIF_SUCCESS,
    payload: { gifObject } 
    //payload: gifObject// ?? brackets not needed? and object is returned from process data...
});

export const fetchGifFailure = (error) => ({
    type: FETCH_GIF_FAILURE,
    payload: { error }
});

// Thunk action to fetch GIF from Giphy api. 
// Attribution: https://daveceddia.com/where-fetch-data-redux/ 
export const fetchGif = (searchTerm, weirdness) => {
    return dispatch => {
        dispatch(fetchGifBegin()); // dispatch BEGIN before the api call
        return fetch(buildFetchURL(searchTerm, weirdness)) // make the api call
            .then(handleServerErrors)
            .then(response => response.json())
            .then(handle404Errors)
            .then(json => processData(json))
            .then(processedData => {
                dispatch(fetchGifSuccess(processedData));
                return processedData;
            })
            .catch(error => dispatch(fetchGifFailure(error)));
    };
};

