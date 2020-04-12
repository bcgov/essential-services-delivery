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

function setExpiryDate(params) {
  if (params.length < 2) {
    throw new Error("setExpiryDate is missing one or more required parameters");
  }
  var dateField = params[0];
  var dateControl = params[1];
  var survey = this.survey;

  var date = new Date();

  if (survey.getValue(dateControl) === "1 Week") {
    date.setUTCDate(date.getDate() + 7);
  } else if (survey.getValue(dateControl) === "2 Weeks") {
    date.setUTCDate(date.getDate() + 2 * 7);
  } else if (survey.getValue(dateControl) === "1 Month") {
    date.setUTCMonth(date.getMonth() + 1);
  } else if (survey.getValue(dateControl) === "3 Months") {
    date.setUTCMonth(date.getMonth() + 1);
  } else if (survey.getValue(dateControl) === "1 Year") {
    date.setYear(date.getFullYear() + 1);
  } else {
    date.setYear(3000);
    date.setUTCMonth(0);
    date.setUTCDate(1);
  }
  date.setUTCHours(23,59,59);

  survey.setValue(dateField, date.toISOString());
}

/* An array containing custom functions that will be automatically registered with
 * SurveyJS so that they can be used in triggers.
 */
surveyFunctions = [setCurrentISODate, setExpiryDate];
