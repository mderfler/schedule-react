import React, {PropTypes} from 'react';
import Checkbox from './Checkbox.jsx';

const scrollStyle = {
    height: '200px',
    width: 'auto',
    border: '2px solid #ccc',
    overflowY: 'scroll'
};


const ScrollableCheckboxGroup = ({options, onClick}) => {

    return(
        <div className="container" style={scrollStyle}>
            {
                options.map((option) => {
                    return(
                        <Checkbox
                            key={option.id}
                            value={option.id}
                            name={option.name}
                            onClick={onClick}
                            defaultChecked={option.checked}
                             />
                    );
                })
            }
        </div>
    );
};

ScrollableCheckboxGroup.propTypes = {
    options: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ScrollableCheckboxGroup;