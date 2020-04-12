/* Include all your custom JS code in here, it will be available to the app instance */

function setRandomId(params) {
  if (params.length < 2) {
    throw new Error("setRandomId is missing one or more required parameters");
  }
  var field = params[0];
  var range = params[1];
  var survey = this.survey;

  var prefixList = ["BC", "AA", "INC"];
  var randomPrefix = Math.floor(Math.random() * Math.floor(prefixList.length - 1));
  var randomNumber = Math.floor(Math.random() * Math.floor(range));

  survey.setValue(field, `${prefixList[randomPrefix]}${randomNumber}`);
}

function setCurrentISODate(params) {
  if (params.length < 1) {
    throw new Error("setCurrentISODate is missing one or more required parameters");
  }
  var dateField = params[0];
  var survey = this.survey;

  var date = new Date();
  survey.setValue(dateField, date.toISOString());
}

/* An array containing custom functions that will be automatically registered with
 * SurveyJS so that they can be used in triggers.
 */
surveyFunctions = [setRandomId, setCurrentISODate];
