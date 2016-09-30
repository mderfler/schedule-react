import React, {PropTypes} from 'react';

const PageTitle = ({name}) =>  {
    return (
      <h1 
        className="pageTitle"
        style={{
            marginBottom: '15px'
        }}>{name}
        </h1>
    );
};

PageTitle.propTypes = {
    name: PropTypes.string.isRequired
};

export default PageTitle;