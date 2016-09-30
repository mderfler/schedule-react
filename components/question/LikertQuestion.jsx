import React, { PropTypes } from 'react';
import {RadioGroup, Radio} from 'react-radio-group';
let _ = require('lodash');

const listStyle = {
    textAlign: 'center'
};

const rowStyles = {
    verticalAlign: 'middle'
};

const questionStyling = {
    textAlign: 'left'
};

const radioGroupStyle = {
   textAlign: 'center',
    padding: '0px',
    margin: '0px auto',
    overflow: 'hidden'

};

const radioStyle = {
    display: 'inline',
    padding: '2px',
    width: '20%',
    float: 'left'
};

let tableStyle = "table table-hover table-striped";

const LikertQuestionList = ({surveyProps, handleChange, errors}) => {

    const errorStyle = {
        backgroundColor: '#ffb3b3',
        maxWidth: '500px'
    };

    return (
        <table className={tableStyle}>
            <thead>
            <tr>
                <th> </th>
                <th> </th>
                <th style={listStyle}>Strongly <br/> Disagree</th>
                <th style={listStyle}>Disagree</th>
                <th style={listStyle}>Neutral</th>
                <th style={listStyle}>Agree</th>
                <th style={listStyle}>Strongly<br/>Agree</th>
            </tr>
            </thead>
            <tbody>

            {
                surveyProps.template.questions.map((question, index) => {
                    let dirtyStyle = {};
                    if(!_.isEmpty(errors) && errors.questions.length > 0) {
                        errors.questions.filter(questionInErrorArray => {
                            if(questionInErrorArray.question.id === question.id) {
                                dirtyStyle = errorStyle;
                            }
                        });
                    }

                    return (
                        <tr key={index} style={dirtyStyle}>
                            <td style={rowStyles}><b>{index + 1}.</b></td>
                            <td style={rowStyles}> {question.questionText}</td>
                            <td colSpan="5">
                                <RadioGroup
                                    name={String(index)}
                                    selectedValue={question.selectedValue}
                                    onChange={handleChange}>
                                    <ul style={radioGroupStyle}>
                                        <li style={radioStyle}>
                                            <Radio value={1}/>
                                        </li>
                                        <li style={radioStyle}>
                                            <Radio value={2}/>
                                        </li>
                                        <li style={radioStyle}>
                                            <Radio value={3}/>
                                        </li>
                                        <li style={radioStyle}>
                                            <Radio value={4}/>
                                        </li>
                                        <li style={radioStyle}>
                                            <Radio value={5}/>
                                        </li>
                                    </ul>
                                </RadioGroup>
                            </td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    );
};

LikertQuestionList.propTypes = {
    surveyProps: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default LikertQuestionList;
