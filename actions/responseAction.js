import * as types from './actionTypes';
import {initiateAjaxRequest, ajaxRequestError} from './ajaxStatusActions';
import { browserHistory } from 'react-router';

export function saveSurveyResponseSuccess(surveyResponse) {
    return {
        type: types.SAVE_SURVEY_RESPONSE_SUCCESS,
        surveyResponse
    };
}

export function saveSurveyResponse(surveyResponse) {

    const request = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(surveyResponse)
    };
    return (dispatch) => {
        // console.log(request);
        dispatch(initiateAjaxRequest());
        return fetch(`/api/response/surveyResponses`, request).then((response) => {
            console.log('RESPONSE', response);
            if(response.status === 500) {
                browserHistory.push('/surveys/fail');
            } else {
                response.json().then((postedSurveyResponse) => {
                    dispatch(saveSurveyResponseSuccess(postedSurveyResponse));
                    browserHistory.push('/surveys/success');
                });
            }
        }).catch((error) => {
            dispatch(ajaxRequestError(error));
            throw(error);

        });
    };
}