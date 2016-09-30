/*import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';
import TextInput from '../common/TextInput';
import CheckboxGroup from '../common/CheckboxGroup.jsx';
import UserCheckboxGroup from './UserCheckboxGroup.jsx';
import RespondentList from './RespondentList.jsx';
import toastr from 'toastr';
import { Router, browserHistory, Route, IndexRoute  } from 'react-router';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../../actions/scheduleActions';
import HateoasUtils from '../../utils/hateoasUtils';
import ScheduleUtils from '../../utils/scheduleUtils';

class UpdateScheduleForm extends React.Component {

    constructor(props, context) {
        super(props, context);

       // console.log('In the UpdateScheduleForm constructor');
       // console.log('In the UpdateScheduleForm constructor, props', this.props);
//schedule is sent as props from UpdateSchedule.jsx
        const errorSurveyRequired = 'Survey is required';
        const errorUsernameRequired = 'Username is required';
        const errorStartDateRequired = 'Start date is required';
        const errorEndDatePreviousToStartDate = 'End date must occur after start date';

        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.updateDays = this.updateDays.bind(this);
        this.updateUsers = this.updateUsers.bind(this);
        this.validateStartDate = this.validateStartDate.bind(this);
        this.validateSeven = this.validateSeven.bind(this);
        //this.getFrequencyValue = this.getFrequencyValue.bind(this);
        //this.getRoleAttributeValue = this.getRoleAttributeValue.bind(this);
        this.getLocationAttributeValue = this.getLocationAttributeValue.bind(this);
        this.getClientAttributeValue = this.getClientAttributeValue.bind(this);
        this.getProjectAttributeValue = this.getProjectAttributeValue.bind(this);
        this.onUpdateAttribute = this.onUpdateAttribute.bind(this);
        this.onUpdateLocation = this.onUpdateLocation.bind(this);
        this.resetState = this.resetState.bind(this);
        this.onUpdateSurvey = this.onUpdateSurvey.bind(this);

        this.state = {
            schedule: Object.assign({}, this.props.schedule),

            allowedAttributes: [
                {
                    attributeValue: 'Overwatch', //hardcoded for now
                    attributeTypes: {
                        name: 'PROJECT'
                    }
                },
                {
                    attributeValue: 'Catalyst DevWorks', //hardcoded for now
                    attributeTypes: {
                        name: 'CLIENT'
                    }
                },
                {
                    attributeValue: '',
                    attributeTypes: {
                        name: 'OFFICE'
                    }
                }
            ],

            officeIndex: '',
            clientIndex: '',
            projectIndex: '',

            isFormValid: 'true',

            errors: {
              username: {
                required: '',
                length: ''
              },
              survey: {
                required: ''
              },
              startDate: {
                required: ''
              },
              endDate: {
                afterStart: '',
                sevenDays: ''
              },
              days: {
                required: ''
              }
            }
        };

        //console.log('***Schedule in UpdateScheduleForm*** ', this.state.schedule);
        //this.state.schedule.frequency = this.getFrequencyValue();

         this.getLocationAttributeValue();
         this.getClientAttributeValue();
        // this.getClientAttributeValue();
         //this.getRoleAttributeValue();

      }

      resetState(){
        let schedule = Object.assign({}, this.state.schedule);
        let user = this.props.schedule.respondents[0].user;
        let id = 99;
             // let user = `/users/${schedule.respondents[0].user.id}`;
              //console.log("user:", user);
             // console.log("user id:", schedule.respondents[0].user.id);
              let respondent = schedule.respondents[0];//.concat( {"user":`users/${schedule.respondents[0].user.id}`} );
              respondent.user = user;
              respondent.id = id;
              return this.setState({schedule});
      }

      onClickSubmit() {
//console.log("schedule In submit:",this.props.schedule);
          if (this.isFormValid()) {

              this.resetState();
         //console.log("schedule In submit:",this.props.users); 
              //console.log("schedule In submit:",this.state.schedule.respondents[0].user);
              // console.log("schedule In submit:",this.state.schedule.respondents[1].user);
               console.log("schedule In submit:",this.state.schedule);
   //this.props.actions.updateSchedule(this.state.schedule);
              toastr.options.positionClass = 'toast-top-full-width';
              toastr.success('Schedule submitted!');
              
              browserHistory.push("/schedules/manage");
              

              
          }
          else{
              toastr.options.positionClass = 'toast-top-full-width';
              toastr.error('Validation errors');
          }
      }



    onUpdate(event) {
        const property = event.target.name;
        let val = event.target.value;
        let schedule = Object.assign({}, this.state.schedule);
        let errors = Object.assign({},this.state.errors);

        schedule[property] = event.target.value;
        this.setState({errors: errors});
        console.log("updated attributes?", schedule.property);
        return this.setState({schedule});
    }

    onUpdateSurvey(event) {
        const property = event.target.name;
        let val = event.target.value;
        let schedule = Object.assign({}, this.state.schedule);
        let errors = Object.assign({},this.state.errors);

        schedule.templateURI = event.target.value;
        this.setState({errors: errors});
        console.log("updated attributes?", schedule.property);
        console.log("State onUpdateSurvey()", this.state.schedule.templateURI);
        return this.setState({schedule});
    }

    onUpdateAttribute(event) {
        const type = event.target.name;
        console.log("type?", type);
        let val = event.target.value;
        console.log("val?", val);
        let attributes = Object.assign([], this.state.allowedAttributes);
       // let errors = Object.assign({},this.state.errors);

        let attribute = attributes.find((attr) => {
          console.log("attributes?", attributes);
            return attr.attributeTypes.name === type;
        });
        
        attribute.value = event.target.value;
        this.setState({errors: errors});
        console.log("updated attributes?", attributes);
        return this.setState({attributes});
    }

    onUpdateLocation(event) {
      //const type = event.target.name;
      let val = event.target.value;
      let attributes = Object.assign([], this.state.schedule.respondents[0].allowedAttributes);
      let attribute = attributes.find((attr) => {
           return attr.attributeTypes.name === "OFFICE";
       });
       attribute.attributeValue = val;
       return this.setState({attributes:attribute});
    }

//cannot remove original user
    updateUsers(event) {
        const isChecked = event.target.checked;
        const userId = parseInt(event.target.value);
        let schedule = Object.assign({}, this.state.schedule);
console.log("original respondents:", schedule.respondents );

        if (isChecked) {
            const user = this.props.users.find((user) => {
                return user.id === userId;
            });
            delete user._links

//console.log(schedule);
            let respondent = {allowedAttributes: []};
            respondent.user = user;
           // respondent.user = `http://localhost:8090/users/${user.id}`
            //respondent.id
            respondent.allowedAttributes.push({
                attributeValue: '',
                attributeTypes: {
                    name: 'ROLE'
                }
            });

            const newRespondents = [...schedule.respondents, Object.assign({}, respondent)];
            schedule.respondents = newRespondents;
console.log("new respondents:", newRespondents );
        } else {
            const newRespondents = [
                ...schedule.respondents.filter((respondent) => {
                    return respondent.user.id !== userId;
                })
            ];
            console.log(newRespondents);
            schedule.respondents = newRespondents;
        }
        return this.setState({schedule});
    }

    updateRole(event) {
        const index = parseInt(event.target.name);
        const role = event.target.value;
        const schedule = Object.assign({}, this.state.schedule);
        //safe to assume only one attribute since the others get add on save
        schedule.respondents[index].allowedAttributes[0].attributeValue = role;
        return this.setState({schedule});
    }

    updateDays(event) {
        let isChecked = event.target.checked;
        let schedule = Object.assign({}, this.state.schedule);
        let days = schedule['days'];
        let name = event.target.name;

        if (isChecked) {
            days.push(name);
        } else {
            let dayIndex = days.indexOf(name);
            if (dayIndex != -1) {
                days.splice(dayIndex, 1);
            }
        }

        schedule['days'] = days;
        return this.setState({schedule});
    }

    validateStartDate(){
        let errors = Object.assign({},this.state.errors);
        let isValid = true;

        if(this.state.schedule.startDate === ''){
            errors.startDate.required = 'Start date is required';
            isValid = false;
        }
        else{
            errors.startDate.required = '';
            isValid = true;
        }

        this.setState({errors});
        return isValid;
    }

    validateSeven(){
        let isValid = true;
        let startDate = new Date(this.state.schedule.startDate);
        let endDate = new Date(this.state.schedule.endDate);
        let diff = endDate.getTime() - startDate.getTime();
        diff = diff / (1000 * 60 * 60 *24);

        if (diff < 7){
            isValid = false;
        }

        return isValid;
    }

    validateEndDate(){
        let errors = Object.assign({},this.state.errors);
        let startDate = this.state.schedule.startDate;
        let endDate = this.state.schedule.endDate;
        let isValid = true;

        if(startDate !== '' && endDate !== '' && startDate > endDate){
            errors.endDate.afterStart = 'End date must occur after the start date';
            isValid = false;
        }
        else if(!this.validateSeven()) {
            errors.endDate.afterStart = 'End date must occur at least 7 days after the start date';
            isValid = false;
        }
        else{
            errors.endDate.afterStart = '';
            isValid = true;
        }
        this.setState({errors});
        return isValid;
    }

    isFormValid() {
        return this.validateStartDate() &&
                this.validateEndDate() &&
                this.validateSeven();
    }


    /*getFrequencyValue() {
      console.log('In getFrequencyValue');

      let frequency = this.state.schedule.frequency;
      console.log('Original frequency ', frequency);

      /*let newScheduleFrequency = frequency.toLowerCase().replace(" ", "_");
      console.log('newScheduleFrequency before regex change ', newScheduleFrequency);
      //regex changes the first letter of each word to upper case
      newScheduleFrequency = newScheduleFrequency.replace(/\b[a-z]/g,function(f){return f.toUpperCase();});
      console.log('newScheduleFrequency after regex change ', newScheduleFrequency);*/

      /*switch(frequency) {

          case "One Time":
          return "ONE_TIME";

          case "One Week":
          return "ONE_WEEK";

          case "Two Weeks":
          return "TWO_WEEKS";

          case "Three Weeks":
          return "THREE_WEEKS";

          case "Four Weeks":
          return "FOUR_WEEKS";

          default:
          return "ONE_TIME";
      }
    }*/


    /*getRoleAttributeValue() {
      var allowedAttributesArray = this.state.schedule.respondents[0].allowedAttributes;
      console.log('In getRoleAttributeValue(). allowedAttributesArray is ', allowedAttributesArray);
      for(var i = 0; i <= allowedAttributesArray.length; i++) {
        if(allowedAttributesArray[i].attributeTypes.name == "Role") {
          console.log('Inside the Role loop');
          console.log('Role is ', allowedAttributesArray[i].attributeValue);
          return allowedAttributesArray[i].attributeValue;
        }
      }
    }*/

    /*getRoleAttributeValue() {
      var allowedAttributesArray = this.state.schedule.respondents[0].allowedAttributes;
      console.log('In getRoleAttributeValue(). allowedAttributesArray is ', allowedAttributesArray);
      for(var i = 0; i < allowedAttributesArray.length; i++) {
        if(allowedAttributesArray[i].attributeTypes.name == "Role") {
          console.log('Inside the Role loop');
          console.log('Role is ', allowedAttributesArray[i].attributeValue);
          this.state.roleIndex = i;
          //this.state.schedule.respondents[0].allowedAttributes[i].attributeValue = allowedAttributesArray[i].attributeValue;
          //return allowedAttributesArray[i].attributeValue;
        }
      }
    }


    getLocationAttributeValue() {

      var allowedAttributesArray = this.state.schedule.respondents[0].allowedAttributes;
    //  console.log('In getLocationAttributeValue(). allowedAttributesArray is ', allowedAttributesArray);
      for(var i = 0; i < allowedAttributesArray.length; i++) {
        //debugger;
        if(allowedAttributesArray[i].attributeTypes.name == "OFFICE") {
         // console.log('Inside the location loop');
         // console.log('Location is ', allowedAttributesArray[i].attributeValue);
          this.state.officeIndex = i;
        }
      }
    }

    getClientAttributeValue() {

      var allowedAttributesArray = this.state.schedule.respondents[0].allowedAttributes;
    //  console.log('In getLocationAttributeValue(). allowedAttributesArray is ', allowedAttributesArray);
      for(var i = 0; i < allowedAttributesArray.length; i++) {
        //debugger;
        if(allowedAttributesArray[i].attributeTypes.name == "Client") {
       //   console.log('Inside the location loop');
        //  console.log('Location is ', allowedAttributesArray[i].attributeValue);
          this.state.clientIndex = i;
        }
      }
    }

    getProjectAttributeValue() {

      var allowedAttributesArray = this.state.schedule.respondents[0].allowedAttributes;
    //  console.log('In getLocationAttributeValue(). allowedAttributesArray is ', allowedAttributesArray);
      for(var i = 0; i < allowedAttributesArray.length; i++) {
        //debugger;
        if(allowedAttributesArray[i].attributeTypes.name == "Project") {
        //  console.log('Inside the location loop');
       //   console.log('Location is ', allowedAttributesArray[i].attributeValue)
          this.state.projectIndex = i;
        }
      }
    }

    render() {
        //const {schedules} = this.props;
       // console.log("Props inside update schedule form", this.props)
        const {schedule} = this.props;
        console.log("State inside render()", this.state.schedule);
        //console.log("State inside render() respondents", this.props.schedule.respondents[0].user);
// console.log("State inside render() respondents", this.props.schedule.respondents[1].user);
// console.log("State inside render() respondents", this.props.schedule.respondents[2].user);

        return(
            <div className="container">
                <form className name="myForm" noValidate>
                    <div className="row">
                        <div className="col-md-2">
                            <SelectInput
                                name="survey"
                                label="Select a Survey"
                                value={this.state.schedule.templateURI}
                                onChange={this.onUpdateSurvey}
                                options={[
                                    {
                                        text: 'Sprint Checkup',
                                        value: "SC"
                                    },
                                    {
                                        text: "SPD Team",
                                        value: "ST"
                                    },
                                    {
                                        text: "SPD Leaders",
                                        value: "SL"
                                    },
                                    {
                                        text: "EM Quantitative",
                                        value: "EMQ"
                                    },
                                    {
                                        text: "TL Quantitative",
                                        value: "TLQ"
                                    }
                                ]}
                                error={this.state.errors.survey.required}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <UserCheckboxGroup
                                users={this.props.users}
                                onClick={this.updateUsers}
                            />
                        </div>
                        <div className="col-md-2">
                          <RespondentList
                              respondents={this.props.schedule.respondents}
                              onChange={this.updateRole}
                          />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <TextInput
                                name="startDate"
                                label="Start Date"
                                type="date"
                                value={this.state.schedule.startDate}
                                validate={this.validateStartDate}
                                onChange={this.onUpdate}
                                error={this.state.errors.startDate.required}
                            />
                        </div>
                        <div className="col-md-2">
                            <TextInput
                                name="endDate"
                                label="End Date"
                                type="date"
                                value={this.state.schedule.endDate}
                                validate={this.validateEndDate}
                                onChange={this.onUpdate}
                                error={this.state.errors.endDate.afterStart}
                            />
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-md-2">
                            <SelectInput
                                name="frequency"
                                label="Frequency"
                                value={this.state.schedule.frequency}
                                defaultOptionLabel = "One Time"
                                defaultOptionValue = "ONE_TIME"
                                onChange={this.onUpdate}
                                options={[
                                    {
                                        text: "1 Week",
                                        value: "ONE_WEEK"
                                    },
                                    {
                                        text: "2 Weeks",
                                        value: "TWO_WEEKS"
                                    },
                                    {
                                        text: "3 Weeks",
                                        value: "THREE_WEEKS"
                                    },
                                    {
                                        text: "4 Weeks",
                                        value: "FOUR_WEEKS"
                                    }
                                ]}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <h4>Attributes:</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <SelectInput
                                        name="client"
                                        label="Client"
                                        defaultOption="-choose-"
                                        defaultOptionValue="catalyst"
                                        defaultOptionLabel="Catalyst"
                                        value="catalyst"
                                        onChange={this.onUpdateAttribute}
                                        options={[

                                        ]}
                                    />
                                </li>
                                <li className="list-group-item">
                                    <SelectInput
                                        name="project"
                                        label="Project"
                                        defaultOption="-choose-"
                                        defaultOptionValue="overwatch"
                                        defaultOptionLabel="Overwatch"
                                        value="overwatch"
                                        onChange={this.onUpdate}
                                        options={[

                                        ]}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <SelectInput
                                        name="office"
                                        label="Office"
                                        value={this.state.schedule.respondents[0].allowedAttributes[this.state.officeIndex].attributeValue}
                                        onChange={this.onUpdateLocation}
                                        options={[
                                            {
                                                text: 'Beaverton',
                                                value: 'Beaverton'
                                            },
                                            {
                                                text: "Baltimore",
                                                value: "Baltimore"
                                            }
                                        ]}
                                        />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <br />
                    <div className="col-md-12">
                        <span><button onClick={this.onClickSubmit} type="button" className="btn btn-success">Submit</button></span>
                        <span><button type="button" className="btn btn-secondary">Cancel</button></span>
                    </div>
                </form>
            </div>
        );
    }
}

UpdateScheduleForm.propTypes = {
    schedule: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        schedule: state.scheduleToUpdate,
        users: state.users
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateScheduleForm);
*/