import * as types from '../actions/actionTypes';

export default function roleReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_ROLES_SUCCESS:
            return action.roles;
        default:
            return state;
    }
}
