import React, {PropTypes} from 'react';
import UserCheckboxGroup from './UserCheckboxGroup.jsx';
import RespondentList from './RespondentList.jsx';

const UserForm = ({users, respondents, updateUsers, updateRole, scheduleToUpdate,
 statefulUsers, errorsRespondents, errorsRoles, roles}) => {

    const schedulePanel = {
        backgroundColor:'#999999',
        borderColor: '#999999',
        color: '#ffffff'
    };



    return (
    <div>
      {(!scheduleToUpdate)?
        <div>
        <div className="panel-heading" style={schedulePanel}><h4>2. Select Recipients</h4></div>
                <div className="panel-body">
                    <div className="col-md-3">
                        <UserCheckboxGroup users={users}
                            onClick={updateUsers}
                        />
                        <br/>
                      {errorsRespondents.required && <div className="alert alert-danger">{errorsRespondents.required}</div>}
                    </div>
                    <div className="col-md-9">
                        <RespondentList
                            respondents={respondents}
                            onChange={updateRole}
                            roles={roles}
                        />
                        {errorsRoles.required && <div className="alert alert-danger">{errorsRoles.required}</div>}
                    </div>
                </div>
                <div>{updateUsers}</div>
                </div>:

    <div>
        <div className="panel-heading" style={schedulePanel}><h4>2. Select Recipients</h4></div>
                <div className="panel-body">
                    <div className="col-md-3">
                        <UserCheckboxGroup statefulUsers={statefulUsers}
                            onClick={updateUsers}
                            scheduleToUpdate={scheduleToUpdate}
                        />
                        <br/>
                        {errorsRespondents.required && <div className="alert alert-danger">{errorsRespondents.required}</div>}
                    </div>
                    <div className="col-md-9">
                        <RespondentList
                            respondents={respondents}
                            onChange={updateRole}
                            scheduleToUpdate={scheduleToUpdate}
                            roles={roles}
                        />
                        {errorsRoles.required && <div className="alert alert-danger">{errorsRoles.required}</div>}
                    </div>
                </div>
                <div>{updateUsers}</div>
    </div>
      }
    </div>
    );

};

UserForm.propTypes = {
    users: PropTypes.array,
    roles: PropTypes.array,
    respondents: PropTypes.array,
    updateUsers: PropTypes.func,
    updateRole: PropTypes.func,
    scheduleToUpdate: PropTypes.object,
    statefulUsers: PropTypes.array,
    errorsRespondents: PropTypes.object.isRequired,
    errorsRoles: PropTypes.object.isRequired
};

export default UserForm;
