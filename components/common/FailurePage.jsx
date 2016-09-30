import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import Button from '../common/Button.jsx';

const style = {
    marginTop: '200px',
    color:'red',
    textAlign:'center'
};

class SuccessPage extends React.Component {
    constructor(props, context) {
        super();
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        browserHistory.goBack();
    }

    render() {

        const successMessageHeader = 'Internal Server Error.';
        const successMessageBody = 'We are encountering some issues on our end. Please contact the admin.' ;

        return (
            <div style={style} className="container col-xs-6 col-xs-offset-3">
                <h1>{successMessageHeader}</h1>
                <p>{successMessageBody}</p>
            </div>
        );
    }


}


export default connect()(SuccessPage);