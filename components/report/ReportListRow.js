/**
 * Created by Jblair on 7/6/2016.
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../common/Button.jsx';

const ReportListRow = ({ report }) => {
    let alignMiddleStyle = {
        verticalAlign: 'middle'
    };
    return (
        <tr>
            <td style = {alignMiddleStyle}>{report.generationDate}</td>
            <td style = {alignMiddleStyle}>{report.clientName}</td>
            <td style = {alignMiddleStyle}>{report.projectName}</td>
            <td style = {alignMiddleStyle}>{report.surveyName}</td>
            <td>&nbsp;</td>
            <td>
               
                <a href={report.reportBucketUrl}>
                    <Button label = {'CSV'} type = {'button'} buttonClassName = {'btn btn-primary'}/>
                </a>

            </td>
        </tr>
    );
};

ReportListRow.propTypes = {
    report : PropTypes.object.isRequired
};

export default ReportListRow;