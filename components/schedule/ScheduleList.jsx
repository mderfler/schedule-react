import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScheduleListRow from './ScheduleListRow.jsx';

const ScheduleList = ({schedules, onUpdate}) => {

    return (
        <table className = "table table-hover">
            <thead>
            <tr>
                <th>Survey Type</th>
                <th>Client</th>
                <th>Project</th>
                <th>Frequency</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {
                    
                    schedules.map(schedule => {
                        return (
                            <ScheduleListRow
                                key={schedule.id}
                                schedule={schedule}
                                onUpdate={onUpdate}/>
                        );
                    })

                }
            </tbody>
        </table>
    );

};

ScheduleList.propTypes = {
    schedules: PropTypes.array,
    onUpdate: PropTypes.func
};

export default ScheduleList;
