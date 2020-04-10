/* Include all your custom JS code in here, it will be available to the app instance */

function setExpiryDate(params) {
  if (params.length < 2) {
    throw new Error("setExpiryDate is missing one or more required parameters");
  }
  var placeholder = params[0];
  var dateField = params[1];
  var survey = this.survey;

  var date = new Date();
  date.setFullYear(
    date.getFullYear + (3 + Math.floor(Math.random() * Math.floor(max)))
  );
  survey.setValue(dateField, date.toISOString().substr(0, 10));

  survey.clearValue(placeholder);
}

function setPHN(params) {
  if (params.length < 2) {
    throw new Error("setExpiryDate is missing one or more required parameters");
  }
  var placeholder = params[0];
  var phnField = params[1];
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
  survey.setValue(phnField, create_UUID());

  survey.clearValue(placeholder);
}

/* An array containing custom functions that will be automatically registered with
 * SurveyJS so that they can be used in triggers.
 */
surveyFunctions = [setExpiryDate, setPHN];
