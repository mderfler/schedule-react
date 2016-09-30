import * as types from './actionTypes';
import HateoasUtils from '../utils/hateoasUtils';
import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}

export function loadUsers() {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch('/api/schedule/users/?size=1000&sort=firstName&firstName.dir=desc').then((response) => {
            response.json().then((json) => {
                let userArray = HateoasUtils.getObjects(json);
                dispatch(loadUsersSuccess(userArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}
