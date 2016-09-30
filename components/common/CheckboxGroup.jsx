import React, {PropTypes} from 'react';
import Checkbox from './Checkbox.jsx';

class CheckboxGroup extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div className="form-group">
                   {
                        this.props.list.map((obj) => {
                            return (
                                <label key={obj} className="checkbox-inline">
                                    <Checkbox onClick={this.props.onClick} name={obj} />
                                </label>
                            );
                        })
                    }
                    {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
            </div>
        );
    }
}

CheckboxGroup.propTypes = {
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default CheckboxGroup;
