import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';
let _ = require('lodash');

export default function surveyReducer(state = initialState.surveys, action) {

    switch(action.type) {

        case actionTypes.LOAD_SURVEYS_SUCCESS:
            action.surveys.map(survey=> {
                const surveyQuestions = survey.template.questions;
                surveyQuestions.map((question, index) => {
                    _.extend(surveyQuestions[index], {selectedValue: ''});
                });
            });
            return action.surveys;

        case actionTypes.CREATE_SURVEY_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.survey)
            ];

        default:
            return state;
    }
}