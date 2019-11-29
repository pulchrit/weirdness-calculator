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
      isLoading: false,
      error: null
    };
    
  


  handleSubmitSearch = async (e) => {
    e.preventDefault();

    this.setState({
      isLoading: true
    })
    
    try {
      const response = await fetch(buildFetchURL(this.state.searchTerm, this.state.weirdness));
      const responseVerified = await handleServerErrors(response);
      const json = await responseVerified.json();
      const data = await handle404Errors(json);
      const processedData = await processData(data);
      this.setState({
        giphyObject: processedData,
        isLoading: false,
        error: null
      });
    } catch(error) {  
      this.setState({
        error,
        isLoading: false
      });
    }  

  }



  handleChangeSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm
    });
  }

  handleClearSearchTerm = () => {
    this.setState({
      searchTerm: ''
    });
  }

  handleClickAddToFavorites = (giphyObject) => {
    console.log('handleClickAddToFavorites ran');
    
    // Add weirdness value from state to giphyObject
    const newFavorite = {
      ...giphyObject,
      weirdness: this.state.weirdness
    };

    
  
    
    // Add newFavorite to favorites list from state.
   /*  const newfavorites = [
      ...this.state.favorites,
      newFavorite
    ]; */
    
    // Add new favorite and update state with new favorites list.
 /*    this.setState({
      favorites: [
        ...this.state.favorites,
        newFavorite
      ]
    }); */
  }

  handleWeirdnessChange = (weirdness) => {
    this.setState({
      weirdness
    });
  }

  // TODO: componentDidMount() { add fetch async/await}
  // be sure to handle server errors from fetch, but also
  // handle 404 errors from giphy which are returned as status ok 200,
  // but with a blank array as the data { data: []}. Check for and handle 
  // empty arrary as no results found for a given search word. 
  


  

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
                //handleChangeInputValue={this.handleChangeInputValue}
                //inputValue={this.state.inputValue}
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

