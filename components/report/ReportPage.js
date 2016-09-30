import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reportActions from '../../actions/reportActions';
import Button from '../common/Button.jsx';
import ReportList from './ReportList.js';
import {Link} from 'react-router';
import PageTitle from '../common/PageTitle.jsx';

const reportOuterDivStyle = {
    marginTop: '75px',
    marginBottom:'50px'
};

class ReportPage extends React.Component {
    constructor(props, context){
        super(props, context);
    }
    render() {
        const reports = this.props.reports;

        return (
            <div className="container" style={reportOuterDivStyle}>
                <PageTitle name={'Reports'}/>
                {(reports.length>0)?
                    <ReportList reports={reports} />:
                    <div>NO REPORTS. Please click to <Link to={`/schedules`}>schedule surveys.</Link></div>
                }
            </div>
        );
    }
}
ReportPage.propTypes ={
    reports: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired

};
function mapStateToProps(state, ownProps){
    return {
        reports: state.reports
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(reportActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);