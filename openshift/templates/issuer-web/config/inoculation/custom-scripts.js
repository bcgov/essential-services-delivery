/* Include all your custom JS code in here, it will be available to the app instance */

function setInoculatorName(params) {
  if (params.length < 1) {
    throw new Error(
      "setInoculatorName is missing one or more required parameters"
    );
  }
  var inoculatorNameField = params[0];
  var survey = this.survey;

  var inoculatorFirst = survey.getValue("given_names") || "";
  var inoculatorLast = survey.getValue("family_name") || "";
  var nameSeparator = (inoculatorFirst && inoculatorLast) ? ", " : "";

  var inoculatorFull = inoculatorLast + nameSeparator + inoculatorFirst;

  survey.setValue(inoculatorNameField, inoculatorFull);
}

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
  survey.getQuestionByName(dateField).readOnly = true;
}

/* An array containing custom functions that will be automatically registered with
* SurveyJS so that they can be used in triggers.
*/
surveyFunctions = [setInoculatorName, setCurrentISODate];
