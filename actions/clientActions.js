import * as types from './actionTypes';
import HateoasUtils from '../utils/hateoasUtils';
import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';

export function loadClientsSuccess(clients) {
    return {type: types.LOAD_CLIENTS_SUCCESS, clients};
}


export function loadClients() {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch('/api/schedule/allowedAttributes').then((response) => {
            response.json().then((json) => {

                let allowedAttributesArray = HateoasUtils.getObjects(json);
                let clientArray = [];
                
                for (let i=0; i<allowedAttributesArray.length; i++){

                    if (allowedAttributesArray[i].attributeType.name==='CLIENT') {
                        clientArray.push(allowedAttributesArray[i]);
                    }
                }
console.log("clientArray",clientArray);
                dispatch(loadClientsSuccess(clientArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}