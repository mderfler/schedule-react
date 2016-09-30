import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOptionValue, defaultOptionLabel, value, error, options, icon}) => {
    let isDisabled = false;
    let showIcon;
    let showLabel;

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

    if (defaultOptionValue === "") {
        isDisabled = true;
    }

    return (
        <div>
            <div className="form-group">
                <label htmlFor={name} className={showLabel}>{label}</label>
                <div className="field input-group">
                  <span className={'input-group-addon ' + showIcon}><i className={icon}></i></span>
                    {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
                    <select
                        name={name}
                        onChange={onChange}                        
                        defaultValue={defaultOptionLabel}
                        disabled={isDisabled}
                        className="form-control">
                        <option value={defaultOptionValue} disabled={isDisabled}>{defaultOptionLabel}</option>
                        {options.map((option) => {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })
                        }
                    </select>
                </div>
            </div>
         {error && <div className="alert alert-danger">{error}</div>}
         </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultOptionValue: PropTypes.string,
    defaultOptionLabel: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    icon: PropTypes.string
};
export default SelectInput;
