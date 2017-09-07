var inputField = document.getElementById("inputF");
inputField.value = "0";
var hiddenString = "(";
var modifiedOpString = "";
var numCount = 0;
var zeroCount = 0;
var decCount = 0;

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}


function checkForOperator () { // makes the display only show most recent entry > not the operator
  for (var i = 0; i < modifiedOpString.length; i++) {
    if (modifiedOpString.includes("/") || modifiedOpString.includes("*") || modifiedOpString.includes("-") || modifiedOpString.includes("+") || modifiedOpString.includes("%")) {
      //if hiddenString has 2 of the same operator, eg "**" then remove both and untoggle button colour
      //if hiddenString has 2 different operators, remove the second to last, keep the last and untoggle first button colour and toggle on latest one
      inputField.value = " "; // needs space
      decCount = 0;
      numCount = 0;
      zeroCount = 0;
      newModifiedOpString = modifiedOpString.replaceAt(modifiedOpString.length -1, " ");
      modifiedOpString = newModifiedOpString;
    }
  }
}

function bedmass () { //on hiddenString: put ")" at length -1 then add "(" right at the end (after the operator)
  hiddenString = hiddenString.substr(hiddenString.length[0],hiddenString.length-1) + ")" + hiddenString.substr(hiddenString.length-1);
  hiddenString += "(";
}

function numBtnClicked () {
  numCount ++;
}

function optrBtnClicked () {
  bedmass();
}

// Operator Buttons

function btnEquals () {
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

function btnModulo () {
  hiddenString += "%";
  modifiedOpString += "%";
  optrBtnClicked(); //pretty much an operator button
}

// Other Buttons

function btnAC () {
  inputField.value = "0";
  hiddenString = "(";
  modifiedOpString = "";
  decCount = 0;
  numCount = 0;
  zeroCount = 0;
}

// Number Buttons

function btnNumOne (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount >= 1){ // because inputField.value = "0" initially we must go = or +=
    inputField.value += "1";
  } else {
    inputField.value = "1";
  }
  hiddenString += "1";
  numBtnClicked();
}
function btnNumTwo (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount >= 1){
    inputField.value += "2";
  } else {
    inputField.value = "2";
  }
  hiddenString += "2";
  numBtnClicked();
}
function btnNumThree (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount >= 1){
    inputField.value += "3";
  } else {
    inputField.value = "3";
  }
  hiddenString += "3";
  numBtnClicked();
}
function btnNumFour (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount >= 1){
    inputField.value += "4";
  } else {
    inputField.value = "4";
  }
  hiddenString += "4";
  numBtnClicked();
}
function btnNumFive (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount >= 1){
    inputField.value += "5";
  } else {
    inputField.value = "5";
  }
  hiddenString += "5";
  numBtnClicked();
}
function btnNumSix (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount >= 1){
    inputField.value += "6";
  } else {
    inputField.value = "6";
  }
  hiddenString += "6";
  numBtnClicked();
}
function btnNumSeven (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount >= 1){
    inputField.value += "7";
  } else {
    inputField.value = "7";
  }
  hiddenString += "7";
  numBtnClicked();
}
function btnNumEight (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount >= 1){
    inputField.value += "8";
  } else {
    inputField.value = "8";
  }
  hiddenString += "8";
  numBtnClicked();
}
function btnNumNine (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount >= 1){
    inputField.value += "9";
  } else {
    inputField.value = "9";
  }
  hiddenString += "9";
  numBtnClicked();
}
function btnNumZero (evt) {
  checkForOperator ();
  checkZeroCount();
}
function btnNumDec (evt) {
  checkForOperator ();
  checkDecCount ();
}

function checkDecCount () {
  // var decCount = hiddenDecString.split(".").length - 1; // splits string into array at point of Dec counts number of items in index, (-1) which will give you the number of Dec points
  decCount ++; // add to decCount
  if (numCount < 1 && !hiddenString.includes(".")) { // if numcount < 1 AND hiddenString doesn't have a "."
    inputField.value = "0."; // change inputField.value to "0."
    hiddenString += "0."; // and add "0." to hiddenString
  } else if (decCount <= 1) { // otherwise if decCount <= 1 (doesn't have ".")
    hiddenString += "0."; // add a "0." to hiddenString
    inputField.value += "."; // and add "." to inputField.value (because it clears as "0" anyway)
  } else { // otherwise if it already has a "."
    hiddenString += ""; // add nothing to hiddenString
    inputField.value += ""; // and add nothing to inputField.value
  }
  console.log("hiddenString = " + hiddenString);
  console.log("zeroCount = " + zeroCount);
  console.log("deCount = " + decCount);
}

function checkZeroCount () {
  zeroCount ++; // add to zeroCount
  if (numCount >= 1 | decCount >= 1) { // if numCount OR decCount >= to 1
    hiddenString += "0"; // add "0" to hiddenString
    inputField.value += "0"; // and add "0" to inputField.value
  } else if (zeroCount >= 1) { // otherwise if zeroCount >= to 1
    hiddenString += ""; // add nothing to hiddenString
    inputField.value = "0"; // and add "0" to inputField.value
  } else {
    hiddenString += ""; // add nothing to hiddenString
    inputField.value += ""; // and add nothing to inputField.value
  }
  console.log("hiddenString = " + hiddenString);
  console.log("zeroCount = " + zeroCount);
  console.log("deCount = " + decCount);
}
