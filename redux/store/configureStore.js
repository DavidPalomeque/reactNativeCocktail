import { createStore, combineReducers } from 'redux';
import cocktailsReducer from '../reducers/cocktails';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(
    { cocktails : cocktailsReducer }
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;