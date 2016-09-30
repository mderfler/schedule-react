import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import NumberInput from '../common/NumberInput';
let _ = require('lodash');


const listStyle = {
    textAlign: 'center'
};

const rowStyles = {
    verticalAlign: 'middle',
    overflow: 'hidden'
};

const questionStyling = {
    textAlign: 'left'
};

let tableStyle = "table table-hover table-striped";


const NumericQuestionList = ({surveyProps, handleNumericChange, errors}) => {
    const errorStyle = {
        backgroundColor: '#ffb3b3',
        maxWidth: '500px'
    };

    return (
        <table className={tableStyle}>
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
                                <td style={rowStyles}><b>{index+1}.</b></td>
                                <td style={rowStyles}> {question.questionText}</td>
                                <td className="col-xs-6 field">
                                    <NumberInput
                                        name={`${index}`}
                                        type="number"
                                        min={question.answerType.minRange}
                                        max={question.answerType.maxRange}
                                        onChange={handleNumericChange}
                                        className="form-control"

                                    />
                                </td>
                            </tr>
                        );
                    }
                )
            }
            </tbody>
        </table>
    );
};

NumericQuestionList.propTypes = {
    surveyProps: React.PropTypes.object.isRequired,
    handleNumericChange: React.PropTypes.func,
    errors: PropTypes.object.isRequired
};

export default NumericQuestionList;