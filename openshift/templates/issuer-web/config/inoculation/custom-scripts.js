/* Include all your custom JS code in here, it will be available to the app instance */

function setPatientName(params) {
  if (params.length < 1) {
    throw new Error(
      "setPatientName is missing one or more required parameters"
    );
  }
  var patientNameField = params[0];
  var survey = this.survey;

  var patientFirst = survey.getValue("given_names") || "";
  var patientLast = survey.getValue("family_name") || "";
  var nameSeparator = (patientFirst && patientLast) ? ", " : "";

  var patientFull = patientLast + nameSeparator + patientFirst;

  survey.setValue(patientNameField, patientFull);
  survey.getQuestionByName(patientNameField).readOnly = true;
}

function setInoculationDate(params) {
  if (params.length < 1) {
    throw new Error(
      "setCurrentDate is missing one or more required parameters"
    );
  }
  var dateField = params[0];
  var survey = this.survey;

  var date = new Date();
  survey.setValue(dateField, new Intl.DateTimeFormat('en-CA').format(date));
  survey.getQuestionByName(dateField).readOnly = true;
}

function setInoculatedSubstance(params) {
  if (params.length < 1) {
    throw new Error("setInoculatedSubstance is missing one or more required parameters");
  }
  var field = params[0];
  var survey = this.survey;
  var range = survey.getQuestionByName(field).choices;

  var randomNumber = Math.floor(Math.random() * Math.floor(range.length));

  survey.setValue(field, range[randomNumber].value);
  survey.getQuestionByName(field).readOnly = true;
}

function setInoculationCycle(params) {
  if (params.length < 1) {
    throw new Error("setInoculationCycle is missing one or more required parameters");
  }
  var field = params[0];
  var survey = this.survey;

  var answerList = ["Yes", "No"];
  var randomAnswer = Math.floor(Math.random() * Math.floor(answerList.length));

  survey.setValue(field, answerList[randomAnswer]);
  survey.getQuestionByName(field).readOnly = true;
}

/* An array containing custom functions that will be automatically registered with
* SurveyJS so that they can be used in triggers.
*/
surveyFunctions = [setPatientName, setInoculationDate, setInoculatedSubstance, setInoculationCycle];
