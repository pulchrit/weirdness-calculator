import React from 'react';
import Button from './Button';
import '../css/SearchBox.css';

const SearchBox = ({ handleSubmitSearch, handleChangeSearchTerm, searchTerm, handleClearSearchTerm }) => {


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
                    onFocus={(event) => handleClearSearchTerm(event)}
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