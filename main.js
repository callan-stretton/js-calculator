//var calculation = Number(inputField.value);
var inputField = document.getElementById("inputF");
inputField.value = "0";
var hiddenString = "(";
var modifiedOpString = "";
var hiddenDecString = "";

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function removeFirstZero () { //ie. "0123" looks like "123"
  for (var i = 0; i < inputField.value.length; i++) {
    if (inputField.value[0] = "0") {
      var newInputField = inputField.value.replaceAt(0, " ");
      inputField.value = newInputField;
    }
  }
}


function checkForOperator () { // makes the display only show most recent entry > not the operator
  for (var i = 0; i < modifiedOpString.length; i++) {
    if (modifiedOpString.includes("/") || modifiedOpString.includes("*") || modifiedOpString.includes("-") || modifiedOpString.includes("+") || modifiedOpString.includes("%")) {
      inputField.value = " ";
      hiddenDecString = " ";
      newModifiedOpString = modifiedOpString.replaceAt(modifiedOpString.length -1, " ");
      console.log("newModifiedOpString: " + newModifiedOpString);
      modifiedOpString = newModifiedOpString;
    }
  }
}

function bedmass () { //on hiddenString: put ")" at length -1 then add "(" right at the end (after the operator)
  //if (!contains = ) {
  hiddenString = hiddenString.substr(hiddenString.length[0],hiddenString.length-1) + ")" + hiddenString.substr(hiddenString.length-1);
  hiddenString += "(";
  console.log(hiddenString);
}

function numBtnClicked () {
  console.log("Number Button Clicked");
  console.log("hidden string: " + hiddenString);
  return true;
}

function optrBtnClicked () {
  bedmass();
  console.log("Operator Button Clicked");
  console.log("hidden string: " + hiddenString);
  return true;
}



// Operator Buttons

function btnEquals () {
  //add ")" to end of hiddenString
  hiddenString += ")";
  var answer = eval(hiddenString);
  console.log(hiddenString);
  console.log("hidden string answer: " + answer);
  inputField.value = answer;
  hiddenString = "(" + answer;
}

function btnDiv () {
  hiddenString += "/";
  modifiedOpString += "/";
  optrBtnClicked();
}

function btnMul () {
  hiddenString += "*";
  modifiedOpString += "*";
  optrBtnClicked();
}

function btnMin () {
  hiddenString += "-";
  modifiedOpString += "-";
  optrBtnClicked();
}

function btnAdd () {
  hiddenString += "+";
  modifiedOpString += "+";
  optrBtnClicked();
}


// Other Buttons

function btnAC () {
  inputField.value = "0";
  hiddenString = "(";
  modifiedOpString = "";
  hiddenDecString = "";
  console.log("hidden string: " + hiddenString);
}

function btnModulo () {
  hiddenString += "%";
  modifiedOpString += "%";
  optrBtnClicked(); //pretty much an operator button
}


// Number Buttons

function btnNumOne (evt) {
  checkForOperator ();
  inputField.value += "1";
  hiddenString += "1";
  numBtnClicked();
  removeFirstZero();
}
function btnNumTwo (evt) {
  checkForOperator ();
  inputField.value += "2";
  hiddenString += "2";
  removeFirstZero();
  numBtnClicked();
}
function btnNumThree (evt) {
  checkForOperator ();
  inputField.value += "3";
  hiddenString += "3";
  removeFirstZero();
  numBtnClicked();
}
function btnNumFour (evt) {
  checkForOperator ();
  inputField.value += "4";
  hiddenString += "4";
  removeFirstZero();
  numBtnClicked();
}
function btnNumFive (evt) {
  checkForOperator ();
  inputField.value += "5";
  hiddenString += "5";
  removeFirstZero();
  numBtnClicked();
}
function btnNumSix (evt) {
  checkForOperator ();
  inputField.value += "6";
  hiddenString += "6";
  removeFirstZero();
  numBtnClicked();
}
function btnNumSeven (evt) {
  checkForOperator ();
  inputField.value += "7";
  hiddenString += "7";
  removeFirstZero();
  numBtnClicked();
}
function btnNumEight (evt) {
  checkForOperator ();
  inputField.value += "8";
  hiddenString += "8";
  removeFirstZero();
  numBtnClicked();
}
function btnNumNine (evt) {
  checkForOperator ();
  inputField.value += "9";
  hiddenString += "9";
  removeFirstZero();
  numBtnClicked();
}
function btnNumZero (evt) {
  checkForOperator ();
  inputField.value += "0";
  hiddenString += "0";
  removeFirstZero();
  numBtnClicked();
}
function btnNumDec (evt) {
  checkForOperator ();
  hiddenDecString += ".";
  console.log("hiddenDecString = " + hiddenDecString)
  checkDecCount ();
}


function checkDecCount () {
  var decCount = hiddenDecString.split(".").length - 1; // splits string into array at point of Dec counts number of items in index, (-1) which will give you the number of Dec points
  console.log("decCount = " + decCount);
  if (decCount <= 1) {
    hiddenString += ".";
    inputField.value += ".";
  } else {
    hiddenString += "";
    inputField.value += "";
  }
}
