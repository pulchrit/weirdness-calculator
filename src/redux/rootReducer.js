import { combineReducers } from 'redux';
import fetchReducers from './fetchReducers';
import appReducers from './appReducers';

const rootReducer = combineReducers({
    fetchReducers,
    appReducers
});

export default rootReducer;