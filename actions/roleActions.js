import * as types from './actionTypes';

import HateoasUtils from '../utils/hateoasUtils';
import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';

export function loadRolesSuccess(roles) {
    return {type: types.LOAD_ROLES_SUCCESS, roles};
}


export function loadRoles() {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch('/api/schedule/allowedAttributes').then((response) => {
            response.json().then((json) => {

                let allowedAttributesArray = HateoasUtils.getObjects(json);
                let roleArray = [];

                for (let i=0; i<allowedAttributesArray.length; i++){

                    if (allowedAttributesArray[i].attributeType.name==='ROLE') {
                        roleArray.push(allowedAttributesArray[i]);
                    }
                }

                dispatch(loadRolesSuccess(roleArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}
