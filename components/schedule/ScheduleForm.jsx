import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';
import TextInput from '../common/TextInput';
import UserCheckboxGroup from './UserCheckboxGroup.jsx';
import RespondentList from './RespondentList.jsx';
import UserForm from './UserSelection.jsx';
import SurveyScheduleDate from './SurveyScheduleDate.jsx';
import AttributesComponent from './AttributesComponent.jsx';
import Button from '../common/Button.jsx';



const ScheduleForm = ({initialState,formatTemplateLink, templateUri,
  onUpdateTemplate, errorsTemplateUri, scheduleFrequency, onUpdate, scheduleStartDate,
  validateStartDate, errorsStartDate, scheduleEndDate, validateEndDate, errorsEndDate,
  allowedAttributesClient, allowedAttributesProject, allowedAttributesLocation, onUpdateAttribute,
  users, respondents, updateUsers, updateRole, onClickSubmit, viewSchedules, templateOptions,
  schedule, statefulUsers, errorsFrequency, errorsClient, errorsLocation, errorsProject, errorsRespondents,
  errorsRoles, roles, projects, clients, offices
})  =>  {

        const schedulePanel = {
            backgroundColor:'#999999',
            borderColor: '#999999',
            color: '#ffffff'
        };

          const marginTop = {
            marginTop: '20px'
        };


        return(
            <div className="container">
                <form className="myForm" noValidate>
                    <div className="row">
                        <div className="panel">
                            <div className="panel-heading"  style={schedulePanel}><h4>1. General Information</h4></div>
                              <div className="panel-body">
                                <div className="col-xs-6">
                                  <div className="col-xs-12">

                                    <SurveyScheduleDate
                                      templateUri={templateUri}
                                      onUpdateTemplate={onUpdateTemplate}
                                      templateOptions={templateOptions}
                                      errorsTemplateUri={errorsTemplateUri}
                                      scheduleFrequency={scheduleFrequency}
                                      errorsFrequency={errorsFrequency}
                                      onUpdate={onUpdate}
                                      scheduleStartDate={scheduleStartDate}
                                      validateStartDate={validateStartDate}
                                      errorsStartDate={errorsStartDate}
                                      scheduleEndDate={scheduleEndDate}
                                      validateEndDate={validateEndDate}
                                      errorsEndDate={errorsEndDate}
                                      scheduleToUpdate={schedule}
                                    />

                                  </div>
                                </div>
                                <div className="col-xs-6">
                                  <div className="col-xs-12 well">
                                    <AttributesComponent
                                      allowedAttributesClient={allowedAttributesClient}
                                      errorsClient={errorsClient}
                                      allowedAttributesProject={allowedAttributesProject}
                                      errorsProject={errorsProject}
                                      allowedAttributesLocation={allowedAttributesLocation}
                                      errorsLocation={errorsLocation}
                                      onUpdateAttribute={onUpdateAttribute}
                                      scheduleToUpdate={schedule}
                                      projects={projects} clients={clients} offices={offices}
                                    />

                                  </div>
                                </div>
                              </div>
                            </div>
                    </div>
                    <div className="row">
                       <UserForm users={users} 
                        respondents={respondents}
                        errorsRespondents={errorsRespondents}
                        errorsRoles={errorsRoles} 
                        updateUsers={updateUsers} 
                        updateRole={updateRole} 
                        scheduleToUpdate={schedule}
                        statefulUsers={statefulUsers}
                        roles={roles}
                       />
                    </div>
                    <br />
                    <div className="col-md-12">
                        <Button label = {'Submit'} type = {'button'} buttonClassName = {'btn btn-primary'} onClick={onClickSubmit}/>
                        <Button label = {'Cancel'} type = {'button'} buttonClassName = {'btn btn-secondary'} onClick={viewSchedules}/>
                    </div>
                </form>
            </div>
        );
    };


ScheduleForm.propTypes = {
    users: PropTypes.array.isRequired,
    roles: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    clients: PropTypes.array.isRequired,
    offices: PropTypes.array.isRequired,
    schedules: PropTypes.array,
    initialState: PropTypes.object.isRequired,
    formatTemplateLink: PropTypes.func.isRequired,
    templateOptions: PropTypes.array.isRequired,
    templateUri: PropTypes.string.isRequired,
    errorsTemplateUri: PropTypes.string.isRequired,
    onUpdateTemplate: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    scheduleFrequency: PropTypes.string.isRequired,
    scheduleStartDate: PropTypes.string.isRequired,
    errorsStartDate: PropTypes.string.isRequired,
    scheduleEndDate: PropTypes.string,
    errorsEndDate: PropTypes.string.isRequired,
    allowedAttributesClient: PropTypes.string,
    allowedAttributesProject: PropTypes.string,
    allowedAttributesLocation: PropTypes.string,
    respondents: PropTypes.array.isRequired,
    validateStartDate: PropTypes.func.isRequired,
    validateEndDate: PropTypes.func.isRequired,
    onUpdateAttribute: PropTypes.func.isRequired,
    updateUsers: PropTypes.func.isRequired,
    updateRole: PropTypes.func.isRequired,
    onClickSubmit: PropTypes.func.isRequired,
    viewSchedules: PropTypes.func.isRequired,
    schedule: PropTypes.object,
    statefulUsers: PropTypes.array,
    errorsFrequency: PropTypes.string.isRequired,
    errorsClient: PropTypes.string.isRequired,
    errorsLocation: PropTypes.string.isRequired,
    errorsProject: PropTypes.string.isRequired,
    errorsRespondents: PropTypes.object.isRequired,
    errorsRoles: PropTypes.object.isRequired
};


export default ScheduleForm;
