/* Include all your custom JS code in here, it will be available to the app instance */

function setDateFields() {
  var dateFields = ["effective_date", "relationship_status_effective"];
  var survey = this.survey;

  var date = new Date();
  dateFields.forEach(function(dateField) {
    survey.setValue(dateField, date.toISOString());
    survey.getQuestionByName(dateField).readOnly = true;
  });
}

function setNamesAndIDs() {
  var fieldMap = {
    registration_id: "person_registration_id",
    associated_registration_id: "org_registration_id",
    associated_registration_name: "entity_name"
  };

  fieldMap.foreach(function(destField, sourceField) {
    var value = survey.getValue(sourceField) || "";
    survey.setValue(destField, value);
    survey.getQuestionByName(destField).readOnly = true;
  });
}

/* An array containing custom functions that will be automatically registered with
 * SurveyJS so that they can be used in triggers.
 */
surveyFunctions = [setDateFields, setNamesAndIDs];
