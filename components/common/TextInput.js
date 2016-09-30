import React, { PropTypes } from 'react';

const dateWidth = {
    width: '80%'
};

const TextInput = ({name, label, onChange, placeholder, value, error, type, icon}) => {
    let wrapperClass = 'form-group';
    let showIcon;
    let showLabel;
    let inputStyle;

    if (icon) {
        showIcon = '';
    } else {
        showIcon = 'hidden';
    }

    if (label) {
        showLabel = '';
    } else {
        showLabel = 'hidden';
    }

    if(type === 'date') {
        inputStyle = dateWidth;
    }

    if(error && error.length > 0) {
        wrapperClass += " " + 'has-error';
        type = type ? type : "text";
    }
    return (
        <div>
            <div className={wrapperClass}>
                <label htmlFor={name} className={showLabel}>{label}</label>
                <div className="field input-group">
                    <span className={"input-group-addon" + showIcon}><i className={icon}></i></span>
                    <input type={type}
                           name = {name}
                           className={"form-control"}
                           placeholder={placeholder}
                           value={value}
                           onChange = {onChange}
                           style={inputStyle}

                    />
                </div>
            </div>
         {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string,
    icon : PropTypes.string

};

export default TextInput;
