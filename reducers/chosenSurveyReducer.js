import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chosenSurveyReducer(state = initialState.chosenSurvey, action) {
    switch (action.type) {
        case types.GET_SURVEY_SUCCESS:
            return action.survey;

        default:
            return state;
    }
}
