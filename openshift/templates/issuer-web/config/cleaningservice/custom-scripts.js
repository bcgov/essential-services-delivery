/* Include all your custom JS code in here, it will be available to the app instance */

function setRandomId(params) {
  if (params.length < 2) {
    throw new Error("setRandomId is missing one or more required parameters");
  }
  var field = params[0];
  var range = params[1];
  var prefix = params[2] ? `${params[2]}-` : "";
  var survey = this.survey;

  var randomId = Math.floor(Math.random() * Math.floor(range));
  survey.setValue(field, `${prefix}${randomId}`);
}

function pickRandomService(params) {
  if (params.length < 1) {
    throw new Error("pickRandomService is missing one or more required parameters");
  }
  var field = params[0];
  var survey = this.survey;

  var serviceList = [
    "Vacuuming",
    "Floor Mopping",
    "Dusting",
    "Desinfecting",
    "Window Cleaning",
    "Bathroom Cleaning",
    "Garbage & Compost"
  ];

  var randomId = Math.floor(Math.random() * Math.floor(serviceList.length - 1));
  survey.setValue(field, serviceList[randomId]);
}

/* An array containing custom functions that will be automatically registered with
 * SurveyJS so that they can be used in triggers.
 */
surveyFunctions = [setRandomId, pickRandomService];
