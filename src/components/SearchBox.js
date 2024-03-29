import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { 
    fetchGif,
    changeSearchTerm,
    clearSearchTerm
 } from '../redux/actions';

import '../css/SearchBox.css';

class SearchBox extends React.Component {

    // Adding a ref to the input element to pass focus to it after a user
    // likes a GIF. 
    //constructor(props) {
    constructor() {
        super()
        this.searchRef = React.createRef();
    } 

    // This component will update when the searchTerm is changed to an empty string 
    // This happens in the handleClickAddToFavorites() method in App component; after 
    // a user likes a GIF, the searchTerm is replaced with an empty string and this 
    // component updates based on changes to searchTerm. So, we compare the state of
    // searchTerm from current to prevProps and pass focus to the input element (via the ref)
    // when the searchTerm changes. 
    // (I feel like this is kind of a weird round-about way to handle passing focus and 
    // I'm not sure how/if this will work with Redux.)
    componentDidUpdate(prevProps) {
        if (this.props.searchTerm !== prevProps.searchTerm) { 
          this.searchRef.current.focus();
        }
    }

    handleSubmitSearch = (event, searchTerm, weirdness) => {
        event.preventDefault();
        // Dispatch action to get gif from Giphy API based on 
        // searchTerm and weirdness from state.
        this.props.dispatch(fetchGif(searchTerm, weirdness));
    }

    handleChangeSearchTerm = (searchTerm) => {
        // Dispatch action to change searchTerm.
        this.props.dispatch(changeSearchTerm(searchTerm));
    }

    handleClearSearchTerm = () => {
        this.props.dispatch(clearSearchTerm());
    }


    render() {

       const { searchTerm, weirdness } = this.props;

        return (

            <form className='search-form' onSubmit={(event) => this.handleSubmitSearch(event, searchTerm, weirdness)} >

                {!searchTerm && <p className="enter-search-term">Please enter a search term below.</p>}
                
                <label className="search-label" htmlFor="search-box">
                    Search term
                </label>

                <div className="search-box-button">
                    <input 
                        type="search"
                        required
                        className="search-input"
                        id="search-box"
                        name="search-box"
                        placeholder="Hamburger"
                        ref={this.searchRef} 
                        value={searchTerm}
                        onChange={(event) => this.handleChangeSearchTerm(event.target.value)}
                        onClick={this.handleClearSearchTerm}
                    />
                    
                    <Button 
                        buttonName="search"
                        buttonClassName="button search-button"
                        buttonType="submit"
                        buttonEvent={null}
                        buttonEventArg={null}
                        buttonContent="SEARCH"
                        buttonDisabled={false}
                    />

                </div>
            </form>
        );  
    }
}

const mapStateToProps = (state) => ({
    searchTerm: state.appReducers.searchTerm,
    weirdness: state.appReducers.weirdness
});

export default connect(mapStateToProps)(SearchBox);

