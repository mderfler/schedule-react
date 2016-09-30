import React, {PropTypes} from 'react';

const jumbotronStyles = {
    backgroundColor: '#03A9F4',
    borderBottomColor: '#0288D1',
    borderBottomStyle: 'solid',
    borderBottomWidth: '15px',
    borderRadius: '0px',
    color: '#ffffff',
    padding: '15px'
};

const imgLogoStyle = {
    position: 'absolute',
    top: '-24px',
    right: '0px'
};


const SurveyResponsePageHeader  = ({ headerTitle, subHeader }) => {
    return (

        <div style={jumbotronStyles} className="jumbotron">
            <div>
                <div className="logoContainer col-xs-2">
                    <img src={'https://s3-us-west-2.amazonaws.com/overwatch-assets/overwatch-logo.png'} className="img-responsive" style={imgLogoStyle}/>
                </div>
                <div className="container">
                    <div className="surveyHeaderContainer col-xs-10">
                        <h1>{headerTitle}</h1>
                        <h3>{subHeader}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

SurveyResponsePageHeader.propTypes = {
    headerTitle: PropTypes.string,
    subHeader: PropTypes.string
};

export default SurveyResponsePageHeader;