import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import config from './config';
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



 
 /* const tempFavorite = {
   ...tempData,
   weirdness: 3
 }; */

export default class App extends React.Component {

 
    state = {
      searchTerm: '',
      weirdness: 0,
      giphyObject: placeholderGIF,
      favorites: [], 
      favoritesError: false,
      isLoading: false,
      error: null
    };
    
  


  handleSubmitSearch = async (e) => {
    e.preventDefault();

    console.log('weirdness:', this.state.weirdness);

    this.setState({
      isLoading: true
    })
    
    try {
      const response = await fetch(buildFetchURL(this.state.searchTerm, this.state.weirdness));
      const responseVerified = await handleServerErrors(response);
      const json = await responseVerified.json();
      const data = await handle404Errors(json);
      const processedData = await processData(data);
      console.log(processedData);
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



  handleChangeSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm,
      // Set favoritesError when a new searchTerm has been entered.
      favoritesError: false
    });
  }

/*   handleClearSearchTerm = () => {
    this.setState({
      searchTerm: ''
    });
  } */

  handleClickAddToFavorites = (giphyObject) => {
    
    // Check that no favorite yet exists for this searchTerm.
    // Filter for any favorites with the current searchTerm. If no
    // such favorites exist an empty array will be returned. 
    const duplicateFound = this.state.favorites.filter(fav => fav.forSearchTerm === this.state.searchTerm);

    // If a favorite for the current searchTerm exists (i.e., the array will 
    // have a length > 0), set favortiesError to true, thus conditionally rendering
    // the error message in the SelectGifs component. 
    if (duplicateFound.length > 0) {
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
      this.setState({
        favorites: [
          ...this.state.favorites,
          newFavorite
        ]
      });
    }
  }

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

  handleWeirdnessChange = (weirdness) => {
    this.setState({
      weirdness
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
                //handleClearSearchTerm={this.handleClearSearchTerm}
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

