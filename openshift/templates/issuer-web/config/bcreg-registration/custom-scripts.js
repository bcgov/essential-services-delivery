/* Include all your custom JS code in here, it will be available to the app instance */

function setDateFields() {
  var dateFields = [
    "registration_date",
    "entity_status_effective",
    "entity_name_trans_effective",
    "entity_name_assumed_effective",
    "entity_name_effective",
    "registration_renewal_effective",
    "registration_expiry_date",
    "effective_date",
  ];
  var survey = this.survey;

  var date = new Date();
  dateFields.forEach(function (dateField) {
    survey.setValue(dateField, date.toISOString());
    survey.getQuestionByName(dateField).readOnly = true;
  });
}

function setRegistrationId() {
  var registrationId = "org_registration_id";
  var survey = this.survey;

  // Credit to: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
  var create_UUID = function () {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  };
  survey.setValue(registrationId, create_UUID());
}

/* An array containing custom functions that will be automatically registered with
 * SurveyJS so that they can be used in triggers.
 */
surveyFunctions = [setDateFields, setRegistrationId];
