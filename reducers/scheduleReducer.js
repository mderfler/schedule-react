import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scheduleReducer(state = initialState.schedules, action) {
    switch (action.type) {

        case types.LOAD_SCHEDULES_SUCCESS:
        return action.schedules;

        case types.CREATE_SCHEDULE_SUCCESS:
        return [
          ...state,
          Object.assign({}, action.schedule)
        ];

        case types.UPDATE_SCHEDULE_SUCCESS:
        // console.log("schedule reducer after update:", action.schedule);
        return [
          ...state.filter(schedule => schedule.id !== action.schedule.id),
          Object.assign({}, action.schedule)
        ];

        default:
        return state;
    }
}
