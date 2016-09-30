import * as types from './actionTypes';
import * as Urls from '../constants/urlConstants';
import ScheduleApi from '../api/mockScheduleApi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';


export function loadSchedulesSuccess(schedules) {
    return {type: types.LOAD_SCHEDULES_SUCCESS, schedules};
}

export function getScheduleByIdSuccess(schedule) {

    return {type: types.GET_SCHEDULE_BY_ID_SUCCESS, schedule};
}

export function createScheduleSuccess(schedule) {
    return {type: types.CREATE_SCHEDULE_SUCCESS, schedule};
}

export function updateScheduleSuccess(schedule) {
    return {type: types.UPDATE_SCHEDULE_SUCCESS, schedule};
}

export function loadSchedules() {
    return function(dispatch) {
        return fetch(`/api/schedule/schedules?projection=scheduleDetails`).then((response) => {
            dispatch(initiateAjaxRequest());
            response.json().then(json => {
                let scheduleArray = Object.assign([], json._embedded.schedules);
                
                let cleanedSchedules=[];
                scheduleArray.map(schedule => {
                const cleanedSchedule = Object.assign({}, schedule);

                let clientAttribute;
                let projectAttribute;
                let officeAttribute;
                let projectAttributes = schedule.respondents[0].allowedAttributes;
               
                let newScheduleFrequency = schedule.frequency.toLowerCase().replace("_", " ");

                //regex changes the first letter of each word to upper case
                newScheduleFrequency = newScheduleFrequency.replace(/\b[a-z]/g,function(f){return f.toUpperCase();});

                    for (let attribute of projectAttributes) {

                        if(attribute.attributeType.name === "CLIENT"){
                            clientAttribute = attribute.attributeValue;
                        }
                        if(attribute.attributeType.name === "PROJECT"){
                            projectAttribute = attribute.attributeValue;
                        }
                        if(attribute.attributeType.name === "OFFICE"){
                            officeAttribute = attribute.attributeValue;
                        }
                    }
                cleanedSchedule.frequency = newScheduleFrequency;
                cleanedSchedule.client = clientAttribute;
                cleanedSchedule.project = projectAttribute;
                cleanedSchedule.office = officeAttribute;
                cleanedSchedules.unshift(cleanedSchedule);
                });

                dispatch(loadSchedulesSuccess(cleanedSchedules));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}

export function getScheduleById(scheduleId) {
    return function(dispatch) {
       dispatch(initiateAjaxRequest());
        return fetch(`/api/schedule/schedules/${scheduleId}?projection=scheduleDetails`).then((response) => {
            response.json().then(json => {
                let schedule = Object.assign({}, json);
                dispatch(getScheduleByIdSuccess(schedule));
            });
        }).catch((error) => {
            throw(error);
        });
    };
  }

 export function createSchedule(schedule) {

     const request = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(schedule)
    };


    return function (dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch(Urls.BASE_SCHEDULE_URL, request).then((response) => {
            response.json().then((postedSchedule) => {
                dispatch(createScheduleSuccess(postedSchedule));
                dispatch(loadSchedules());

            });
        }).catch((error) => {
            dispatch(ajaxRequestError(error));
            throw(error);
        });
    };
}

export function updateSchedule(schedule) {
    const request = {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(schedule)
    };

    const cleanedSchedule = Object.assign({}, schedule);
    let newScheduleFrequency = schedule.frequency.toLowerCase().replace("_", " ");
    newScheduleFrequency = newScheduleFrequency.replace(/\b[a-z]/g,function(f){return f.toUpperCase();});
    cleanedSchedule.frequency = newScheduleFrequency;

    return function (dispatch) {
        dispatch(updateScheduleSuccess(cleanedSchedule));
        dispatch(initiateAjaxRequest());
        return fetch('/api/schedule/schedules/' + schedule.id, request).then((response) => {
            response.json().then((updatededSchedule) => {
                dispatch(loadSchedules());
            });
        }).catch((error) => {
            dispatch(ajaxRequestError(error));
            throw(error);
        });

    };
}
