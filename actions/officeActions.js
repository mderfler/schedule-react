import * as types from './actionTypes';
import HateoasUtils from '../utils/hateoasUtils';
import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';

export function loadOfficesSuccess(offices) {
    return {type: types.LOAD_OFFICES_SUCCESS, offices};
}


export function loadOffices() {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch('/api/schedule/allowedAttributes').then((response) => {
            response.json().then((json) => {

                let allowedAttributesArray = HateoasUtils.getObjects(json);
                let officeArray = [];
                
                for (let i=0; i<allowedAttributesArray.length; i++){

                    if (allowedAttributesArray[i].attributeType.name==='OFFICE') {
                        officeArray.push(allowedAttributesArray[i]);
                    }
                }

                dispatch(loadOfficesSuccess(officeArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}