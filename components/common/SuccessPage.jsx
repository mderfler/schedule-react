import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import Button from '../common/Button.jsx';
import * as surveyActions from '../../actions/surveyActions';
import {bindActionCreators} from 'redux';

const success = {
    marginTop: '200px',
    color:'green',
    textAlign:'center'
};

class SuccessPage extends React.Component {
    constructor(props, context) {
        console.log("PROPS in success page", props);
        super();
    }

    render() {

        const successMessageHeader = 'Survey Submitted!';
        const successMessageBody = 'Thanks for submitting your survey!';

        return (
            <div style={success} className="container col-xs-6 col-xs-offset-3">
                <h1>{successMessageHeader}</h1>
                <p>{successMessageBody}</p>
            </div>
        );
    }


}

export default connect()(SuccessPage);