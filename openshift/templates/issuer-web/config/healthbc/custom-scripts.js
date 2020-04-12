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

function setPHN(params) {
  if (params.length < 1) {
    throw new Error("setExpiryDate is missing one or more required parameters");
  }
  var phnField = params[0];
  var survey = this.survey;

  // Credit to: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
  var create_UUID = function () {
    var dt = new Date().getTime();
    var uuid = "xxxx xxx xxx".replace(
      /[xy]/g,
      function (c) {
        var r = Math.floor(Math.random() * Math.floor(9))
        return r;
      }
    );
    return uuid;
  };
  survey.setValue(phnField, create_UUID());
}

/* An array containing custom functions that will be automatically registered with
 * SurveyJS so that they can be used in triggers.
 */
surveyFunctions = [setCurrentISODate, setPHN];
