import * as types from './actionTypes';
import {initiateAjaxRequest, ajaxRequestError} from './ajaxStatusActions';
import {createSchedule} from './scheduleActions';
const SURVEY_ACTION_FORMATTER = 'background: #222; color: #bada55';

export function loadSurveysSuccess(surveys) {
    return { type: types.LOAD_SURVEYS_SUCCESS, surveys};
}

export function getSurveySuccess(survey) {
    return { type: types.GET_SURVEY_SUCCESS, survey};
}

export function saveSurveySuccess(surveyObject) {
    return {
        type: types.CREATE_SURVEY_SUCCESS,
        surveyObject,
        receivedAt: Date.now()
    };
}

export function loadSurveys() {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch(`/api/survey/surveys?projection=inlineSurveyDetail`).then((response) => {
            response.json().then(surveyResponseJson => {
                let surveyArray = Object.assign([], surveyResponseJson._embedded.surveys);
                dispatch(loadSurveysSuccess(surveyArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}

export function getSurveyBySuid(suid) {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        let survey;
        return fetch(`/surveys/search/findSurveyBySuid?suid=${suid}&projection=inlineSurveyDetail`).then((response) => {
            response.json().then(surveyResponseJson => {
                survey = Object.assign({}, surveyResponseJson);
                dispatch(getSurveySuccess(survey));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}

export function postToSurveyWithSchedule(schedule) {

    console.log("%c Schedule Object in createSurvey() >>>>>>>>>", SURVEY_ACTION_FORMATTER, schedule);
    const surveyName = schedule.templateName;
    const template = schedule.templateUri;

    let surveyObject = {};
    surveyObject.surveyName = surveyName;
    surveyObject.template = template;
    console.log("%c Survey Object in createSurvey() >>>>>>>>>", SURVEY_ACTION_FORMATTER, surveyObject);

    return dispatch => {
        dispatch(initiateAjaxRequest());
        const request = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(surveyObject)
        };
        return fetch(`/api/survey/surveys`, request).then(
            response => {
            response.json().then((postSurveyObject) => {
                return dispatch(saveSurveySuccess(postSurveyObject));
            }).then(result => {
                console.log("%c RESULT OF SURVEY POST", SURVEY_ACTION_FORMATTER, result);
                const surveyUniqueId = result.surveyObject.suid;
                schedule.templateUri = surveyUniqueId;
                console.log("%c SCHEDULE TO POST >>>>>>>>>>", SURVEY_ACTION_FORMATTER, schedule);
                dispatch(createSchedule(schedule));

            });
        }).catch((error) => {
            dispatch(ajaxRequestError(error));
            throw(error);
        });
    };
}
