import { combineReducers } from 'redux';
import data_reducer from './dataReducer'
// import all reducers here


// combine reducers
const reducers = combineReducers({
    data_reducer
});

// make the combined reducers available for import
export default reducers;

