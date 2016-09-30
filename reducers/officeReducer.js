import * as types from '../actions/actionTypes';

export default function officeReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_OFFICES_SUCCESS:
            return action.offices;
        default:
            return state;
    }
}
