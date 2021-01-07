/* Include all your custom JS code in here, it will be available to the app instance */

function setNameFields() {
  var firstName = "first_name";
  var lastName = "last_name";
  var survey = this.survey;

  var first = survey.getValue("given_names") || "";
  var last = survey.getValue("family_name") || "";
  var nameSeparator = (first && last) ? " " : "";

  survey.setValue(firstName, first);
  survey.getQuestionByName(firstName).readOnly = true;
  survey.setValue(lastName, last);
  survey.getQuestionByName(lastName).readOnly = true;
}

function setDateFields() {
  var effective_date = "effective_date";
  var survey = this.survey;

  var date = new Date();
  survey.setValue(effective_date, date.toISOString());
  survey.getQuestionByName(effective_date).readOnly = true;
}

function setRegistrationId() {
  var registrationId = "person_registration_id";
  var survey = this.survey;

  // Credit to: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
  var create_UUID = function () {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
  };
  survey.setValue(registrationId, create_UUID());
}

/* An array containing custom functions that will be automatically registered with
* SurveyJS so that they can be used in triggers.
*/
surveyFunctions = [setNameFields, setDateFields, setRegistrationId];
