/* Include all your custom JS code in here, it will be available to the app instance */

function setCurrentISODate(params) {
  if (params.length < 1) {
    throw new Error(
      "setCurrentISODate is missing one or more required parameters"
    );
  }
  var dateField = params[0];
  var survey = this.survey;

  var date = new Date();
  survey.setValue(dateField, date.toISOString());
}

function setFutureDate(params) {
  if (params.length < 1) {
    throw new Error("setFutureDate is missing one or more required parameters");
  }
  var dateField = params[0];
  var survey = this.survey;

  var date = new Date();
  date.setDate(date.getDate() + 14);
  survey.setValue(dateField, date.toISOString());
}

function setCheckTime(params) {
  if (params.length < 1) {
    throw new Error("setFutureDate is missing one or more required parameters");
  }
  var dateField = params[0];
  var survey = this.survey;

  var date = new Date();

  var daysDelta = Math.floor(Math.random() * Math.floor(2)) + 1;
  var hoursDelta = Math.floor(Math.random() * Math.floor(3));
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

  date.setDate(date.getDate() - daysDelta);
  date.setHours(date.getHours() + hoursDelta * plusOrMinus);

  survey.setValue(dateField, date.toISOString());
}

/* An array containing custom functions that will be automatically registered with
 * SurveyJS so that they can be used in triggers.
 */
surveyFunctions = [setCurrentISODate, setFutureDate, setCheckTime];
