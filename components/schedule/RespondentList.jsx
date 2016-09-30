import React, {PropTypes} from 'react';
import RespondentListRow from './RespondentListRow.jsx';

const RespondentList = ({respondents, onChange, roles}) => {
  


    return (
        <div className="col-xs-12">
            {
                respondents.map((respondent, index) => {
                    return (
                        <RespondentListRow index={index} key={respondent.user.id} respondent={respondent} onChange={onChange} roles={roles}/>
                    );
                })
            }
        </div>
    );
};

RespondentList.propTypes = {
    respondents: PropTypes.array.isRequired,
    roles: PropTypes.array,
    onChange: PropTypes.func.isRequired
};

export default RespondentList;
