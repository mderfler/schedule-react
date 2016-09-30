import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function reportReducer(state = initialState.reports, action) {
    switch (action.type) {

        case types.LOAD_REPORTS_SUCCESS:
            return action.reports;

        default:
            return state;
    }
}