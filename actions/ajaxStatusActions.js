import * as actionTypes from './actionTypes';

export function initiateAjaxRequest() {  
    return {
        type: actionTypes.INITIATE_AJAX_REQUEST
    };
}

export function ajaxRequestError() {
    return {
        type: actionTypes.AJAX_REQUEST_ERROR
    };
}
