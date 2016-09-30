import React, {PropTypes} from 'react';

const buttonMargin = {
    margin: '15px 15px 15px 0px'
};

const Button = ({type, buttonClassName, onClick, label}) =>  {
    return (
        <button 
            type = {type}
            className = {buttonClassName}
            onClick = {onClick}
            style = {buttonMargin}
        >{label}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    buttonClassName: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired
};

export default Button;