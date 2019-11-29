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
      searchTerm
    });
  }

/*   handleClearSearchTerm = () => {
    this.setState({
      searchTerm: ''
    });
  } */

  handleClickAddToFavorites = (giphyObject) => {
    console.log('handleClickAddToFavorites ran');
    
    // Check that no favorite yet exists for this searchTerm.

    
    // Add weirdness value and searchTerm from state to giphyObject
    const newFavorite = {
      ...giphyObject,
      weirdness: this.state.weirdness,
      forSearchTerm: this.state.searchTerm
    };

    

    
    // Add newFavorite to favorites list from state.
   /*  const newfavorites = [
      ...this.state.favorites,
      newFavorite
    ]; */
    
    // Add new favorite and update state with new favorites list.
    this.setState({
      favorites: [
        ...this.state.favorites,
        newFavorite
      ]
    }); 
  }

  handleRemoveFromFavorites = (id) => {
    console.log('remove from favorites ran');
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
                favorites={this.state.favorites}
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

