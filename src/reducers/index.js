import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import bookReducer from './bookReducer';

const reducer = combineReducers({
    counterReducer,
    bookReducer,
});

export default reducer;