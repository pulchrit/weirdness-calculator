import React from 'react';
import { connect } from 'react-redux';
import { changeWeirdness } from '../redux/actions';
import '../css/WeirdSlider.css';

class WeirdSlider extends React.Component {
    
    handleWeirdnessChange = (weirdness) => {
        this.props.dispatch(changeWeirdness(weirdness));
    }
    
    render() {

        const { weirdness } = this.props;

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
                    onChange={(event) => this.handleWeirdnessChange(event.target.valueAsNumber)}
                />

                <label htmlFor="weirdness">Weirdness: {weirdness}</label>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    weirdness: state.appReducers.weirdness,
})

export default connect(mapStateToProps)(WeirdSlider);