import React from 'react';
import { connect } from 'react-redux';
import { changeWeirdness } from '../redux/actions';
import '../css/WeirdSlider.css';

const WeirdSlider = ({ weirdness }) => {

    const  handleWeirdnessChange = (weirdness) => {
        this.props.dispatch(changeWeirdness(weirdness));
    }
    
    return (
        <div className="weirdness-slider">
            <input 
                type="range" 
                id="weirdness" 
                className="slider" 
                name="weirdness" 
                min="0" 
                max="10" 
                value={weirdness}
                onChange={(event) => handleWeirdnessChange(event.target.valueAsNumber)}
            />

            <label htmlFor="weirdness">Weirdness: {weirdness}</label>
        </div>

    );
}

const mapStateToProps = (state) => ({
    weirdness: state.appReducers.weirdness,
})

export default connect(mapStateToProps)(WeirdSlider);