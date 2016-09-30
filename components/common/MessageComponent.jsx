import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as surveyActions from '../../actions/surveyActions';
import {bindActionCreators} from 'redux';
import { browserHistory } from 'react-router';


const error = {
  color:'red',
  textAlign:'center'
};

const MessageComponent = ({title, text, className}) => {
    return (
            <div style={error} className={className + " container col-xs-6 col-xs-offset-3"}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
         );
};

MessageComponent.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string
};


export default (MessageComponent);
