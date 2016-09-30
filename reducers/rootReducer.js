import { combineReducers } from 'redux';
import schedules from './scheduleReducer';

import chosenSurvey from './chosenSurveyReducer';
import reports from './reportReducer';
import surveys from './surveyReducer';
import templates from './templateReducer';
import users from './userReducer';
import roles from './roleReducer';
import projects from './projectReducer';
import clients from './clientReducer';
import offices from './officeReducer';
import surveyResponse from './responseReducer';
import numAjaxRequestsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    chosenSurvey,
    schedules,
    reports,
    surveys,
    templates,
    users,
    roles,
    projects,
    clients,
    offices,
    surveyResponse,
    numAjaxRequestsInProgress
});

export default rootReducer;
