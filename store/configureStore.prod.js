import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
/* eslint-disable */

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}