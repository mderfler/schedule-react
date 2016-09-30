import React, {PropTypes} from 'react';

const Checkbox = (props) => {

    return(
        <label className="col-xs-12">
            <input
                type="checkbox"
                defaultChecked={props.defaultChecked}
                defaultValue={props.value}
                name={props.name}
                onClick={props.onClick}
            /> {props.name}
        </label>
    );
};

Checkbox.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default Checkbox;