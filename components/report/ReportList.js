/**
 * Created by jblair on 7/18/2016.
 */
import React, { PropTypes } from 'react';
import ReportListRow from './ReportListRow';

const ReportList = ({reports}) => {

    return (
        <table className="table table-hover">
            <thead>
            <tr>

                <th>Report Generated Date</th>
                <th>Client Name</th>
                <th>Project Name</th>
                <th>Survey Name</th>
                <th>&nbsp;</th>
                <th></th>
               

            </tr>
            </thead>
            <tbody>
            {
                reports.map(report =>{
                    return (
                    <ReportListRow key={report.generationDate} report = {report}/>
                );
            })
            }
            </tbody>
        </table>
    );
};

ReportList.propTypes = {
    reports: PropTypes.array.isRequired
};

export default ReportList;