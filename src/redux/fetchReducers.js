// This reducer pattern is based on the following tutorials: 
// https://daveceddia.com/redux-tutorial/
// https://daveceddia.com/where-fetch-data-redux/ 

import { placeholderGIF } from '../components/tempData';
import {
    FETCH_GIF_BEGIN,
    FETCH_GIF_SUCCESS,
    FETCH_GIF_FAILURE
} from './actions';

const initialState = {
    giphyObject: placeholderGIF, 
    isLoading: false, 
    error: null, 
};

const fetchReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_GIF_BEGIN: 
        //mark isLoading as true, reset any previous errors.
            return {
                ...state,
                isLoading: true,
                error: null
                // set giphyObject to empty object here so that loading message will appear?
            };
        case FETCH_GIF_SUCCESS:
            // API should be complete; set isLoading to false,
            // replace giphyObject with new one from the Giphy API.
            // error was reset above in BEGIN action.
            return {
                ...state,
                isLoading: false,
                giphyObject: action.payload.gifObject
            };
        case FETCH_GIF_FAILURE:
            // API request is complete, but it failed; set isLoading
            // to false, save the error message to state.
            // The giphyObject will be replaced with an empty object so 
            // that the error message will appear. 
            return {
                ...state,
                giphyObject: {},
                error: action.payload.error
            };
        default: 
            return state;
    }
}

export default fetchReducer;