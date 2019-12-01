import { 
    CHANGE_SEARCH_TERM, 
    CLEAR_SEARCH_TERM,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    CHANGE_WEIRDNESS,
    START_OVER
} from './actions';
import { placeholderGIF } from '../components/tempData';


const initialState = {
    searchTerm: '',
    weirdness: 0,
    giphyObject: placeholderGIF, // move to fetchReducer???
    favorites: [], 
    favoritesError: false,
    isLoading: false, // move to fetchReducer???
    error: null, // move to fetchReducer???
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        // Changes the searchTerm in state as the user enters the term 
        // in the SearchBox component.
        case CHANGE_SEARCH_TERM: 
            return {
                ...state,
                searchTerm,
                // Set favoritesError to false when a new searchTerm has been entered.
                favoritesError: false
            };
        // Clears the searchTerm when the user clicks into the input element 
        // in the SearchBox component.
        case CLEAR_SEARCH_TERM:
            return {
                ...state,
                searchTerm: ''
            };
        // Adds a GIF object to favorites array in state on click of the favorite
        // button in SelectGif component. Only does so if a favorite
        // for the current searchTerm does NOT exist, and if the current GIF object is
        // not already in state (but this logic is contained in the presentation component).
        //  This method also adds the
        // weirdness value and searchTerm to the GIF object before adding it to favorites.
        case ADD_TO_FAVORITES:
            return {
                ...state,
                searchTerm,
                favorites: [
                    ...state.favorites,
                    newFavorite,
                ],
                favoritesError
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: revisedFavorites
            };
        case CHANGE_WEIRDNESS:
            return {
                ...state,
                weirdness
            };
        case START_OVER:
            return {
                state: initialState
            };
        default:
            return state;        
    }
}

export default appReducer;