import { 
    CHANGE_SEARCH_TERM, 
    CLEAR_SEARCH_TERM,
    ADD_TO_FAVORITES,
    THROW_FAVORITES_ERROR,
    REMOVE_FROM_FAVORITES,
    CHANGE_WEIRDNESS,
    START_OVER
} from './actions';


const initialState = {
    searchTerm: '',
    weirdness: 0,
    favorites: [], 
    favoritesError: false,
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        // Changes the searchTerm in state as the user enters the term 
        // in the SearchBox component.
        case CHANGE_SEARCH_TERM: 
            return {
                ...state,
                searchTerm: action.searchTerm,
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
                searchTerm: action.searchTerm,
                favorites: [
                    ...state.favorites,
                    action.newFavorite
                ],
                favoritesError: action.favoritesError
            };
        case THROW_FAVORITES_ERROR:
            return {
                ...state,
                searchTerm: action.searchTerm,
                favoritesError: action.favoritesError
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: action.revisedFavorites
            };
        case CHANGE_WEIRDNESS:
            return {
                ...state,
                weirdness: action.weirdness
            };
        case START_OVER:
            return {
                searchTerm: '',
                weirdness: 0,
                favorites: [], 
                favoritesError: false,
            };
        default:
            return state;        
    }
}

export default appReducer;