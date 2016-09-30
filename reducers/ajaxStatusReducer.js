import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function actionTypesEndsInSuccess(type) {
    return type.substring(type.length- 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.numAjaxRequestsInProgress, action) {
    if(action.type === actionTypes.INITIATE_AJAX_REQUEST) {
        return state + 1;
    } else if(action.type === actionTypes.AJAX_REQUEST_ERROR || actionTypesEndsInSuccess(action.type)) {
        return state -1;
    }

    return state;
}
