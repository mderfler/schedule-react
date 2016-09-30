import * as types from './actionTypes';
import templateApi from '../api/mockTemplateApi';
import {initiateAjaxRequest, ajaxRequestError} from './ajaxStatusActions';

export function loadTemplatesSuccess(templates) {
    return { type: types.LOAD_TEMPLATES_SUCCESS, templates};
}

export function createTemplateSuccess(template) {
    return { type: types.CREATE_TEMPLATE_SUCCESS, template};
}

export function updateTemplateSuccess(template) {
    return { type: types.UPDATE_TEMPLATE_SUCCESS, template};
}

export function loadTemplates() {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch(`/api/survey/templates?projection=inlineTemplateDetail`).then((response) => {
            response.json().then(templateResponseJson => {
                let templateArray = Object.assign([], templateResponseJson._embedded.templates);
                dispatch(loadTemplatesSuccess(templateArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}

export function saveTemplate(template) {
    return function(dispatch, getState) {
        dispatch(initiateAjaxRequest());
        return templateApi.saveTemplate(template).then(savedTemplate => {
            template.id ? dispatch(updateTemplateSuccess(savedTemplate)) :
                dispatch(createTemplateSuccess(savedTemplate));
        }).catch(error => {
            dispatch(ajaxRequestError(error));
            throw(error);
        });
    };
}
