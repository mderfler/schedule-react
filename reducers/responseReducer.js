import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function responseReducer(state = initialState.surveyResponse, action) {
    switch (action.type) {

        case types.SAVE_SURVEY_RESPONSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.surveyResponse)
            ];

        default:
            return state;
    }
}