import React, {PropTypes} from 'react';
import ScrollableCheckboxGroup from '../common/ScrollableCheckboxGroup.jsx';

const UserCheckboxGroup = ({users, onClick, statefulUsers}) => {

    let formattedUsers = [];
    if(statefulUsers) {
        statefulUsers.forEach((user) => {
          formattedUsers.push(Object.assign({},user));
        });
    }else{
        users.forEach((user) => {
            formattedUsers.push(Object.assign({},{id: user.id, name: user.firstName + ' ' + user.lastName}));
        });
    }

    return(
        <ScrollableCheckboxGroup
            options={formattedUsers}
            onClick={onClick}
        />
    );
};

UserCheckboxGroup.propTypes = {
    users: PropTypes.array,
    scheduleToUpdate: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    statefulUsers: PropTypes.array
};

export default UserCheckboxGroup;
