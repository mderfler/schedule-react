import React, {PropTypes} from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../../actions/scheduleActions';
import ScheduleList from './ScheduleList.jsx';
import Button from '../common/Button.jsx';
import PageTitle from '../common/PageTitle.jsx';

const scheduleOuterDivStyle = {
    marginTop: '75px',
    marginBottom:'50px'
};

const jumbotronStyle = {
    paddingTop: '150px',
    paddingBottom: '150px',
    marginTop: '50px',
    textAlign: 'center'
};

class SchedulePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onClickUpdate = this.onClickUpdate.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    onClickUpdate(event) {
        let id = parseInt(event.target.value);
        browserHistory.push('/schedules/update/' + id);
    }

    onClickSubmit(){
        browserHistory.push('/schedules/manage');
    }

    render() {
        const {schedules, numAjaxRequestsInProgress} = this.props;

        return (
            <div className="container" style={scheduleOuterDivStyle}>
                 {(!numAjaxRequestsInProgress>0 && schedules.length>0)?
                    <div>
                        <PageTitle name={'Schedules'}/>
                        <Button label = {'Schedule New Survey'} type = {'button'} buttonClassName = {'btn btn-success'} onClick={this.onClickSubmit}/>
                        <ScheduleList schedules={schedules} onUpdate={this.onClickUpdate} />
                    </div>
                :
                   <div className="jumbotron" style={jumbotronStyle}> 
                        <p>Looks like there are no surveys scheduled.</p>
                        <Button label = {'Schedule a Survey'} type = {'button'} buttonClassName = {'btn btn-success btn-lg'} onClick={this.onClickSubmit}/>
                    </div>
                }
            </div>
        );
    }
}


SchedulePage.propTypes = {
    schedules: PropTypes.array.isRequired,
    numAjaxRequestsInProgress: PropTypes.number
};

function mapStateToProps(state, ownProps){
    return {
        schedules: state.schedules
    };
}

export default connect(mapStateToProps, null)(SchedulePage);
