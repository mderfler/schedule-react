import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';
import {generateAllowedAttributesDropDownOptions} from '../../utils/generateAllowedAttributesDropDownOptions';

const noMargin = {
    marginBottom: '0px'
};

const recipientWell = {
    height: '80px'
};

const recipientLabel = {
    height: '40px',
    verticalAlign: 'middle',
    overflow: 'hidden'
};


const RespondentListRow = ({respondent, onChange, index, roles}) => {


    let roleOptions=generateAllowedAttributesDropDownOptions(roles) ;


    return (
      <div>
        {(respondent.allowedAttributes[0].attributeValue==="")?
            <div className="well col-md-5 col-md-offset-1" style={recipientWell}>
                  <div style={recipientLabel}>
                  <span className="col-md-5"><label>{`${respondent.user.firstName} ${respondent.user.lastName}`}</label></span>
                     <div className="col-md-7"> 
                          <SelectInput
                             style={noMargin}
                             name={`${index}`}
                             defaultOptionValue= "-choose-"
                             defaultOptionLabel= "--Select Role--"
                             onChange={onChange}
                             options={roleOptions}
                             className="col-md-7"
                         />
                      </div>
                  </div>
            </div>:
    
             <div className="well col-md-5 col-md-offset-1" style={recipientWell}>
                  <div style={recipientLabel}>
                  <span className="col-md-5"><label>{`${respondent.user.firstName} ${respondent.user.lastName}`}</label></span>
                     <div className="col-md-7"> 
                          <SelectInput
                             style={noMargin}
                             name={`${index}`}
                             defaultOptionValue= {respondent.allowedAttributes[0].attributeValue}
                             defaultOptionLabel= {respondent.allowedAttributes[0].attributeText}
                             onChange={onChange}
                             options={roleOptions}
                             className="col-md-7"
                         />
                      </div>
                  </div>
            </div>        

        }
      </div>

    );
};

RespondentListRow.propTypes = {
    respondent: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    index: PropTypes.number,
    roles: PropTypes.array.isRequired
};

export default RespondentListRow;
