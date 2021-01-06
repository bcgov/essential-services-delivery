/* Include all your custom JS code in here, it will be available to the app instance */

function setDateFields() {
  var dateFields = ["effective_date", "relationship_status_effective"];
  var survey = this.survey;

  var date = new Date();

  dateFields.forEach(function (dateField) {
    survey.setValue(dateField, date.toISOString());
    survey.getQuestionByName(dateField).readOnly = true;
  });
}

/* An array containing custom functions that will be automatically registered with
 * SurveyJS so that they can be used in triggers.
 */
surveyFunctions = [setDateFields];
