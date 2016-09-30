/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute, Redirect  } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import App from './container/App';
import HomePage from './components/home/HomePage';
import SchedulePage from './components/schedule/SchedulePage';
import ScheduleForm from './components/schedule/ScheduleForm.jsx';
import ManageSchedulePage from './components/schedule/ManageSchedulePage.jsx';
import UpdateSchedule from './components/schedule/UpdateSchedule.jsx';
import ReportPage from './components/report/ReportPage';
import SurveyResponsePage from './components/survey/SurveyResponsePage';
import SurveySuccessPage from './components/common/SuccessPage.jsx';
import NotFoundPage from './components/common/NotFoundPage.jsx';
import FailurePage from './components/common/FailurePage.jsx';

import {loadSchedules} from './actions/scheduleActions';
import {loadSurveys} from './actions/surveyActions';
import {loadReports} from './actions/reportActions';
import {loadUsers} from './actions/userActions';
import {loadTemplates} from './actions/templateActions';
import {loadRoles} from './actions/roleActions';
import {loadClients} from './actions/clientActions';
import {loadProjects} from './actions/projectActions';
import {loadOffices} from './actions/officeActions';

const store = configureStore();
store.dispatch(loadUsers());
store.dispatch(loadSchedules());
//store.dispatch(loadSurveys());
store.dispatch(loadReports());
store.dispatch(loadTemplates());
store.dispatch(loadRoles());
store.dispatch(loadProjects());
store.dispatch(loadOffices());
store.dispatch(loadClients());


render(
    <Provider store = {store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                <Route path="schedules" component={SchedulePage} />
                <Route path="schedule/create" component={ScheduleForm} />
                <Route path="schedules/manage" component={ManageSchedulePage} />
                <Route path="schedules/update/:id" component={ManageSchedulePage} />
                <Route path="reports" component={ReportPage} />
            </Route>
            <Route path="surveys" component={SurveyResponsePage} />
            <Route path="surveys/success" component={SurveySuccessPage} />
            <Route path="surveys/fail" component={FailurePage} />
            <Route path="*" component={NotFoundPage} />

        </Router>
    </Provider>, document.getElementById('app')
);
