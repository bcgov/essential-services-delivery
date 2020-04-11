/* Include all your custom JS code in here, it will be available to the app instance */

function setExpiryDate(params) {
  if (params.length < 1) {
    throw new Error("setExpiryDate is missing one or more required parameters");
  }
  var dateField = params[0];
  var survey = this.survey;

  var date = new Date();
  date.setFullYear(
    date.getFullYear() + (3 + Math.floor(Math.random() * Math.floor(2)))
  );
  survey.setValue(dateField, date.toISOString().substr(0, 10));
}

/* An array containing custom functions that will be automatically registered with
 * SurveyJS so that they can be used in triggers.
 */
surveyFunctions = [setExpiryDate];
