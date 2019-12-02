import React from 'react';
import GifItem from './GifItem';
import { connect } from 'react-redux';
import '../css/GiphyResult.css';

const GiphyResult = ({ giphyObject, isLoading, error }) => {

    // Display gif, error message, or loading message depending on current status.
    // Default is set to gif so the static placeholder will display on load. 
    let display = <GifItem giphyObject={giphyObject} gifSize="large"/>;

    if (error) {
        display = <p className="error">{error}</p>;
    } else if (isLoading) {
        display = <p className="loading">Loading GIF...</p>;
    } 
    
    return (
        <section className="giphy-result">

            <h4>YOUR RESULT</h4>
            
            <div className="gif-item-result">
                {display}
            </div>

        </section>
    );
}

const mapStateToProps = (state) => ({
    giphyObject: state.fetchReducers.giphyObject,
    isLoading: state.fetchReducers.isLoading,
    error: state.fetchReducers.error
});

export default connect(mapStateToProps)(GiphyResult);