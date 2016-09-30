import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function templateReducer(state = initialState.templates, action) {
    switch(action.type) {

        case types.LOAD_TEMPLATES_SUCCESS:
            return action.templates;

        case types.CREATE_TEMPLATE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.template)
            ];

        case types.UPDATE_TEMPLATE_SUCCESS:
            return [
                ...state.filter(template => template.id !== action.template.id),
                Object.assign({}, action.template)
            ];

        default:
            return state;
    }
}