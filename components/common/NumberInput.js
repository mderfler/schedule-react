import React, { PropTypes } from 'react';

const NumberInput = ({name, label, onChange, placeholder, value, error, type, min, max}) => {
    let wrapperClass = 'form-group';

    const topMargin = {
        margin : '15px'
    };

    if(error && error.length > 0) {
        wrapperClass += " " + 'has-error';
        type = type ? type : "text";
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field col-xs-3" style={topMargin}>
                <input type={type}
                       name = {name}
                       placeholder = {placeholder}
                       className="form-control"
                       value={value}
                       onChange = {onChange}
                       min = {min}
                       max = {max}
                />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

NumberInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.number,
    value: PropTypes.number,
    error: PropTypes.string,
    type: PropTypes.string,
    min : PropTypes.number,
    max : PropTypes.number

};

export default NumberInput;
