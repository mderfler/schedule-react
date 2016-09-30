import * as types from './actionTypes';
import HateoasUtils from '../utils/hateoasUtils';
import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';

export function loadProjectsSuccess(projects) {
    return {type: types.LOAD_PROJECTS_SUCCESS, projects};
}


export function loadProjects() {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch('/api/schedule/allowedAttributes').then((response) => {
            response.json().then((json) => {

                let allowedAttributesArray = HateoasUtils.getObjects(json);
                let projectArray = [];
                
                for (let i=0; i<allowedAttributesArray.length; i++){

                    if (allowedAttributesArray[i].attributeType.name==='PROJECT') {
                        projectArray.push(allowedAttributesArray[i]);
                    }
                }

                dispatch(loadProjectsSuccess(projectArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}