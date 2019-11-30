import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { buildFetchURL, handleServerErrors, handle404Errors, processData  } from './utilities';
import { placeholderGIF } from './tempData';
import Header from './Header';
import MainContent from './MainContent';
import Results from './Results';
import NotFoundPage from './NotFoundPage';
import Footer from './Footer';
import '../css/App.css';

/* I'm using class components instead of function components with hooks 
  because I'm learning Redux for this challenge, and I've only just learned hooks.
  So, it seemed safer and more expedient to hold one of the variables still
  (i.e., use class components with Redux). */


export default class App extends React.Component {

    // Set initial state.
    state = {
      searchTerm: '',
      weirdness: 0,
      giphyObject: placeholderGIF,
      favorites: [], 
      favoritesError: false,
      isLoading: false,
      error: null,
    };
    

  // Fetches data from the Giphy api based on searchTerm and 
  // weirdness value when the form is submitted in the SearchBox component.
  handleSubmitSearch = async (e) => {
    e.preventDefault();

    // Set isLoading to true so loading message will appear for users.
    this.setState({
      isLoading: true,
    })
    
    // Fetch data with async/await.
    try {
      const response = await fetch(buildFetchURL(this.state.searchTerm, this.state.weirdness));
      const responseVerified = await handleServerErrors(response);
      const json = await responseVerified.json();
      const data = await handle404Errors(json);
      const processedData = await processData(data);
      // I'm leaving searchTerm in state instead of clearing it, so that
      // the weirdness for this term can be adjusted, and so that the
      // searchTerm can be passed along with the object when it's favorited.
      this.setState({
        giphyObject: processedData,
        isLoading: false, 
        error: null
      });
    } catch(error) {  
      this.setState({
        // Replace giphyObject placeholder with empty object so error 
        // or loading message will be dislayed.
        giphyObject: {}, 
        error: error.message,
        isLoading: false
      });
    }  
  }

  // Changes the searchTerm in state as the user enters the term 
  // in the SearchBox component.
  handleChangeSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm,
      // Set favoritesError when a new searchTerm has been entered.
      favoritesError: false
    });
  }

  // Clears the searchTerm when the user clicks into the input element 
  // in the SearchBox component.
  handleClearSearchTerm = () => {
    this.setState({
      searchTerm: ''
    });
  } 

  // Adds a GIF object to favorites array in state on click of the favorite
  // button in SelectGif component. Only does so if a favorite
  // for the current searchTerm does NOT exist. This method also adds the
  // weirdness value and searchTerm to the GIF object before adding it to favorites.
  handleClickAddToFavorites = (giphyObject) => {
    
    // Check that no favorite yet exists for this searchTerm.
    // Filter for any favorites with the current searchTerm. If no
    // such favorites exist an empty array will be returned. 
    const duplicateSearchTermFound = this.state.favorites.filter(fav => fav.forSearchTerm === this.state.searchTerm);

    // Check that this specific GIF doesn't exist already in favorites. 
    // (Sometimes during testing, the giphy api returns the same gif even though the weirdness
    // value has changed. When this occurred, I WAS able to add a duplicate GIF to my favorites.
    // So, this check just ensures that the GIF itself isn't duplicated in favorites.)
    // Returns an array with the duplicate object if found.
    const duplicateGifFound = this.state.favorites.filter(fav => fav.id === giphyObject.id);

    // If a favorite for the current searchTerm exists (i.e., the array will 
    // have a length > 0), set favortiesError to true, thus conditionally rendering
    // the error message in the SelectGifs component. 
    if (duplicateSearchTermFound.length > 0 || duplicateGifFound.length > 0) {
      this.setState({favoritesError: true})
    // If no favorite for this searchTerm exists, add this GIF to favorites.
    } else {

      // favoriteError is set to false in handleChangeSearchTerm() 
      // so that the error message is removed as soon as a new search term is entered.
      
      // Add weirdness value and searchTerm from state to giphyObject.
      const newFavorite = {
        ...giphyObject,
        weirdness: this.state.weirdness,
        forSearchTerm: this.state.searchTerm
      };

      // Add this new favorite to the favorites list in state.
      // Rest searchTerm to empty string, so alert will display and focus 
      // will be passed to the search box in the SearchBox component.
      this.setState({
        searchTerm: '',
        favorites: [
          ...this.state.favorites,
          newFavorite
        ]
      });
    }
  }

  // Removes the specified GIF object from the favorites array in state when
  // the remove button is clicked in the Favorites component.
  handleRemoveFromFavorites = (id) => {

    // Filter for all favorites that do NOT have the id passed in. This effectively
    // removes the favorite that DOES have the id passed in (i.e., the one the
    // user wants to remove).
    const revisedFavorites = this.state.favorites.filter(fav => fav.id !== id);

    // Update state with this new favorites array.
    this.setState({
      favorites: revisedFavorites
    });

  }

  // Changes the weirdness state once the weirdness slider is moved in the 
  // WeirdSlider element.
  handleWeirdnessChange = (weirdness) => {
    this.setState({
      weirdness
    });
  }

  // When user clicks Start Over button in Results component, 
  // all state should be reset to original/default values. 
  handleClickStartOver = () => {
    this.setState({
      searchTerm: '',
      weirdness: 0,
      giphyObject: placeholderGIF,
      favorites: [], 
      favoritesError: false,
      isLoading: false,
      error: null,
    });
  }

  
  render() {
    return (
      <div className="App">
        
        <Header />

        <Switch>
          <Route 
            exact
            path="/"
            render={ () => 
              <MainContent
                giphyObject={this.state.giphyObject}
                handleSubmitSearch={this.handleSubmitSearch}
                handleChangeSearchTerm={this.handleChangeSearchTerm}
                handleClearSearchTerm={this.handleClearSearchTerm}
                searchTerm={this.state.searchTerm}
                handleClickAddToFavorites={this.handleClickAddToFavorites}
                handleRemoveFromFavorites={this.handleRemoveFromFavorites}
                favorites={this.state.favorites}
                favoritesError={this.state.favoritesError}
                weirdness={this.state.weirdness}
                handleWeirdnessChange={this.handleWeirdnessChange}
                isLoading={this.state.isLoading}
                error={this.state.error} 
              />
            }
          />

          <Route 
            path="/results"
            render={ () => 
              <Results 
                favorites={this.state.favorites}
                handleClickStartOver={this.handleClickStartOver}
              />
            }
          />

          <Route component={NotFoundPage} />
        </Switch>

        <Footer />

      </div>
    );
  }
}

