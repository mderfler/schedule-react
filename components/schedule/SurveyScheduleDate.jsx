import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';
import TextInput from '../common/TextInput';

const SurveyScheduleDate = ({templateUri, onUpdateTemplate, templateOptions, errorsTemplateUri,
  scheduleFrequency, onUpdate, scheduleStartDate, validateStartDate, errorsStartDate,
  scheduleEndDate, validateEndDate, errorsEndDate, scheduleToUpdate, errorsFrequency}) => {

let frequency;
    if(scheduleToUpdate){
      frequency = scheduleToUpdate.frequency;
    }
    const schedulePanel = {
        backgroundColor:'#999999',
        borderColor: '#999999',
        color: '#ffffff'
    };

    const marginTop = {
      marginTop: '20px'
    };
    
    return (
    <div>
    {(!scheduleToUpdate)?
      <div className="row">
        <div className="row">
                <div className="col-md-6" style={marginTop}>
                    <SelectInput
                        name="templateUri"
                        label="Select a Template"
                        value={templateUri}
                        onChange={onUpdateTemplate}
                        options={templateOptions}
                        defaultOptionValue="-choose-"
                        defaultOptionLabel="--Select a Template--"
                        error={errorsTemplateUri}

                    />
                </div>

                <div className="col-md-6"  style={marginTop}>
                   <SelectInput
                       name="frequency"
                       label="Frequency"
                       value={scheduleFrequency}
                       defaultOptionLabel = "--Select Frequency--"
                       defaultOptionValue = "-choose-"
                       onChange={onUpdate}
                       error={errorsFrequency}
                       options={[
                          {
                               text: "1 Time",
                               value: "ONE_TIME"
                           },
                           {
                               text: "One Week",
                               value: "One Week"
                           },
                           {
                               text: "Two Weeks",
                               value: "Two Weeks"
                           },
                           {
                               text: "Three Weeks",
                               value: "Three Weeks"
                           },
                           {
                               text: "Four Weeks",
                               value: "Four Weeks"
                           }
                       ]}
                   />
                </div>
              </div>


      <div className="row">
        <div className="col-md-6" style={marginTop}>
          <TextInput
            name="startDate"
            label="Start Date"
            type="date"
            value={scheduleStartDate}
            validate={validateStartDate}
            onChange={onUpdate}
            error={errorsStartDate}
            icon="glyphicon glyphicon-calendar"
            />
        </div>
        <div className="col-md-6" style={marginTop}>
          <TextInput
            name="endDate"
            label="End Date"
            type="date"
            value={scheduleEndDate}
            validate={validateEndDate}
            onChange={onUpdate}
            error={errorsEndDate}
            icon="glyphicon glyphicon-calendar"
            />
        </div>
        </div>

      </div>:


      <div className="row">
        <div className="row">
                 <div className="col-md-6" style={marginTop}>

                    <SelectInput
                        name="templateUri"
                        label="Survey Template"
                        value={templateUri}
                        onChange={onUpdateTemplate}
                        options={templateOptions}
                        defaultOptionValue={""}
                        defaultOptionLabel={scheduleToUpdate.templateName}
                        error={errorsTemplateUri}

                    />

                </div>

                <div className="col-md-6"  style={marginTop}>
                   <SelectInput
                       name="frequency"
                       label="Frequency"
                       value={scheduleFrequency}
                       defaultOptionLabel = {scheduleFrequency}
                       defaultOptionValue = {scheduleFrequency}
                       onChange={onUpdate}
                       error={errorsFrequency}
                       options={[
                          {
                               text: "One Time",
                               value: "One Time"
                           },
                           {
                               text: "One Week",
                               value: "One Week"
                           },
                           {
                               text: "Two Weeks",
                               value: "Two Weeks"
                           },
                           {
                               text: "Three Weeks",
                               value: "Three Weeks"
                           },
                           {
                               text: "Four Weeks",
                               value: "Four Weeks"
                           }
                       ]}
                   />
                </div>
              </div>
      <div className="row">
        <div className="col-md-6" style={marginTop}>
          <TextInput
            name="startDate"
            label="Start Date"
            type="date"
            value={scheduleToUpdate.startDate}
            validate={validateStartDate}
            onChange={onUpdate}
            error={errorsStartDate}
            icon="glyphicon glyphicon-calendar"
            />
        </div>
        <div className="col-md-6" style={marginTop}>
          <TextInput
            name="endDate"
            label="End Date"
            type="date"
            value={scheduleToUpdate.endDate}
            validate={validateEndDate}
            onChange={onUpdate}
            error={errorsEndDate}
            icon="glyphicon glyphicon-calendar"
            />
        </div>
      </div>
      </div>
    }
    </div>
    );

};

SurveyScheduleDate.propTypes = {
  templateUri: PropTypes.string,
  onUpdateTemplate: PropTypes.func,
  templateOptions: PropTypes.array,
  errorsTemplateUri: PropTypes.string,
  scheduleFrequency: PropTypes.string,
  onUpdate: PropTypes.func,
  scheduleStartDate: PropTypes.string,
  validateStartDate: PropTypes.func,
  errorsStartDate: PropTypes.string,
  scheduleEndDate: PropTypes.string,
  validateEndDate: PropTypes.func,
  errorsEndDate: PropTypes.string,
  scheduleToUpdate: PropTypes.object,
  errorsFrequency: PropTypes.string.isRequired
};

export default SurveyScheduleDate;
