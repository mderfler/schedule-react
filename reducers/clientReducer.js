import * as types from '../actions/actionTypes';

export default function clientReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_CLIENTS_SUCCESS:
            return action.clients;
        default:
            return state;
    }
}
