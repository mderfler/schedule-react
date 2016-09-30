import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

/* eslint-disable */

const logger = createLogger();

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk, logger)
    );
}// reduxImmutableStateInvariant(),