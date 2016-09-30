import * as types from './actionTypes';

import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';

export function loadReportsSuccess(reports) {
    return {type: types.LOAD_REPORTS_SUCCESS, reports};
}

export function generateReportSuccess(report) {
    return {type: types.GENERATE_REPORT_SUCCESS, report};
}

export function loadReports() {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch(`/api/report/report/get_reports`).then((response) =>

        {
            response.json().then(json => {
                let reportArray = Object.assign([], json);
                dispatch(loadReportsSuccess(reportArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}