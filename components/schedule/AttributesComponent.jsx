import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';
import TextInput from '../common/TextInput';
import {generateAllowedAttributesDropDownOptions} from '../../utils/generateAllowedAttributesDropDownOptions';



const AttributesComponent = ({allowedAttributesClient, allowedAttributesProject, allowedAttributesLocation, 
  onUpdateAttribute, scheduleToUpdate, errorsClient, errorsLocation, errorsProject,
  projects, clients, offices
}) => {

    let projectOptions = generateAllowedAttributesDropDownOptions(projects);
    let clientOptions = generateAllowedAttributesDropDownOptions(clients);
    let officeOptions = generateAllowedAttributesDropDownOptions(offices);

    return (
      <div>
        {(!scheduleToUpdate)?
      <div className="row">
       <div className="col-md-6">
           <ul className="list-unstyled">
               <li>
                   <SelectInput
                       name="CLIENT"
                       label="Client"
                       defaultOptionValue="-choose-"
                       defaultOptionLabel="--Select Client--"
                       
                       onChange={onUpdateAttribute}
                       error={errorsClient}
                       options={clientOptions}
                       icon="glyphicon glyphicon-user"
                   />
               </li>
               <li>
                   <SelectInput
                       name="PROJECT"
                       label="Project"
                       defaultOptionValue="-choose-"
                       defaultOptionLabel="--Select Project--"
                       onChange={onUpdateAttribute}
                       error={errorsProject}
                       options={projectOptions}
                       icon="glyphicon glyphicon-briefcase"
                   />
               </li>
           </ul>
       </div>
       <div className="col-md-6">
           <ul className="list-unstyled">
               <li>
                    <SelectInput
                        name="OFFICE"
                        label="Office"
                        defaultOptionValue="-choose-"
                        defaultOptionLabel="--Select Location--"
                        onChange={onUpdateAttribute}
                        error={errorsLocation}
                        options={officeOptions}
                        icon="glyphicon glyphicon-globe"
                    />
               </li>
           </ul>
       </div>
    </div>:

    <div className="row">
     <div className="col-md-6">
         <ul className="list-unstyled">
             <li>
                 <SelectInput
                     name="CLIENT"
                     label="Client"
                     defaultOption={scheduleToUpdate.client}
                     defaultOptionValue={scheduleToUpdate.client}
                     defaultOptionLabel={scheduleToUpdate.client}
                     value={allowedAttributesClient}
                     onChange={onUpdateAttribute}
                     error={errorsClient}
                     options={clientOptions}
                     icon="glyphicon glyphicon-user"
                 />
             </li>
             <li>
                 <SelectInput
                     name="PROJECT"
                     label="Project"
                     defaultOption={scheduleToUpdate.project}
                     defaultOptionValue={scheduleToUpdate.project}
                     defaultOptionLabel={scheduleToUpdate.project}
                     value={allowedAttributesProject}
                     onChange={onUpdateAttribute}
                     error={errorsProject}
                     options={projectOptions}
                     icon="glyphicon glyphicon-briefcase"
                 />
             </li>
         </ul>
     </div>
     <div className="col-md-6">
         <ul className="list-unstyled">
             <li>
                  <SelectInput
                      name="OFFICE"
                      label="Office"
                      defaultOption={scheduleToUpdate.office}
                      defaultOptionValue={scheduleToUpdate.office}
                      defaultOptionLabel={scheduleToUpdate.office}
                      value={allowedAttributesLocation}
                      onChange={onUpdateAttribute}
                      error={errorsLocation}
                      options={officeOptions}
                      icon="glyphicon glyphicon-globe"
                  />
             </li>
         </ul>
     </div>
  </div>
}

</div>
    );

};

AttributesComponent.propTypes = {
  allowedAttributesClient: PropTypes.string,
  allowedAttributesProject: PropTypes.string,
  allowedAttributesLocation: PropTypes.string,
  onUpdateAttribute: PropTypes.func,
  scheduleToUpdate: PropTypes.object,
  errorsClient: PropTypes.string.isRequired,
  errorsLocation: PropTypes.string.isRequired,
  errorsProject: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  clients: PropTypes.array.isRequired,
  offices: PropTypes.array.isRequired
};

export default AttributesComponent;
