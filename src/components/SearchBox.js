import React from 'react';
import Button from './Button';
import '../css/SearchBox.css';

const SearchBox = ({ handleSubmitSearch, handleChangeSearchTerm, searchTerm }) => {

    // TODO: Need to research clearing the input field when clicked into. I tried a few things
    // that cleared the input's value on focus, but those didn't work. So maybe I need 
    // to try to clear it onClick instead of onFocus? 

    return (
        <form className='search-form' onSubmit={handleSubmitSearch} >
            
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
                    value={searchTerm}
                    onChange={(event) => handleChangeSearchTerm(event.target.value)}
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

export default SearchBox;