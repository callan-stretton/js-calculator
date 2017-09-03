//var calculation = Number(inputField.value);
var inputField = document.getElementById("inputF");
inputField.value = "0";
var hiddenString = "(";
var modifiedOpString = "";
//var hiddenDecString = "";
//var numberButtonString = "";
var numCount = 0;
var zeroCount = 1;
var decCount = 0;

//var numCount = numberButtonString.split("N").length - 1;

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}


function checkForOperator () { // makes the display only show most recent entry > not the operator
  for (var i = 0; i < modifiedOpString.length; i++) {
    if (modifiedOpString.includes("/") || modifiedOpString.includes("*") || modifiedOpString.includes("-") || modifiedOpString.includes("+") || modifiedOpString.includes("%")) {
      inputField.value = " "; // needs space
      //hiddenDecString = " ";
      decCount = 0;
      //numberButtonString = " ";
      numCount = 0;
      zeroCount = 0;
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
  //numberButtonString += "N";
  //console.log(numberButtonString);
  numCount ++;
  console.log("numCount = " + numCount);
  console.log("Number Button Clicked");
  console.log("hidden string: " + hiddenString);
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
  //hiddenDecString = "";
  decCount = 0;
  //numberButtonString = "";
  numCount = 0;
  zeroCount = 0;
  console.log("hidden string: " + hiddenString);
}

function btnModulo () {
  hiddenString += "%";
  modifiedOpString += "%";
  optrBtnClicked(); //pretty much an operator button
}


// Number Buttons
//or decimal  count <1

function btnNumOne (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount == 1){ // because inputField.value = "0" initially we must go = or +=
    inputField.value += "1";
  } else {
    inputField.value = "1";
  }
  hiddenString += "1";
  numBtnClicked();
}
function btnNumTwo (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount == 1){
    inputField.value += "2";
  } else {
    inputField.value = "2";
  }
  hiddenString += "2";
  numBtnClicked();
}
function btnNumThree (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount == 1){
    inputField.value += "3";
  } else {
    inputField.value = "3";
  }
  hiddenString += "3";
  numBtnClicked();
}
function btnNumFour (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount == 1){
    inputField.value += "4";
  } else {
    inputField.value = "4";
  }
  hiddenString += "4";
  numBtnClicked();
}
function btnNumFive (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount == 1){
    inputField.value += "5";
  } else {
    inputField.value = "5";
  }
  hiddenString += "5";
  numBtnClicked();
}
function btnNumSix (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount == 1){
    inputField.value += "6";
  } else {
    inputField.value = "6";
  }
  hiddenString += "6";
  numBtnClicked();
}
function btnNumSeven (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount == 1){
    inputField.value += "7";
  } else {
    inputField.value = "7";
  }
  hiddenString += "7";
  numBtnClicked();
}
function btnNumEight (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount == 1){
    inputField.value += "8";
  } else {
    inputField.value = "8";
  }
  hiddenString += "8";
  numBtnClicked();
}
function btnNumNine (evt) {
  checkForOperator ();
  if (numCount >= 1 || decCount == 1){
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
  console.log("hidden string: " + hiddenString);
}
function btnNumDec (evt) {
  checkForOperator ();
  //hiddenDecString += ".";
  decCount ++;
  //console.log("hiddenDecString = " + hiddenDecString)
  checkDecCount ();
}

function checkDecCount () {
  // var decCount = hiddenDecString.split(".").length - 1; // splits string into array at point of Dec counts number of items in index, (-1) which will give you the number of Dec points
  console.log("decCount = " + decCount);
  if (numCount < 1) {
    console.log("numCount less than");
    inputField.value = "0.";
    hiddenString += "0.";
  } else if (decCount <= 1) {
    hiddenString += ".";
    inputField.value += ".";
  } else {
    hiddenString += "";
    inputField.value += "";
  }
}

// function checkDecCount () {
//   var decCount = hiddenDecString.split(".").length - 1; // splits string into array at point of Dec counts number of items in index, (-1) which will give you the number of Dec points
//   console.log("decCount = " + decCount);
//   if (decCount <= 1) {
//     hiddenString += ".";
//     inputField.value += ".";
//   } else {
//     hiddenString += "";
//     inputField.value += "";
//   }
// }

//zeros if !"." "N" then similar to above
//if no number print one zero if more than one zero no more
function checkZeroCount () {
  zeroCount ++;
  console.log("zeroCount = " + zeroCount);
  console.log("numCount = " + numCount);
  if (numCount >= 1) {
    hiddenString += "0";
    inputField.value += "0";
  } else if (zeroCount >= 1) {
    hiddenString += "";
    inputField.value = "0";
  } else {
    hiddenString += "";
    inputField.value += "";
  }
}
