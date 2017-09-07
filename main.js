var inputField = document.getElementById("inputF"); // calculator display
inputField.value = "0"; // calculator display starts with "0" in display
var hiddenString = "("; // "(" for bedmass purposes
var modifiedOpString = ""; // to show in the display when using operators
var numCount = 0; // counts how many number buttons pressed between operations
var zeroCount = 0; // counts how many zero buttons pressed between operations
var decCount = 0; // counts how many decimal buttons pressed between operations
var equalsSet = false; // tells you whether the equals button has just been pressed

// number buttons

function addThisNumber(N) {
  if (equalsSet) { // if equalsSet is true
    inputField.value += ""; // can't add additional numbers to inputField.value
    hiddenString += ""; // and can't add additional numbers to hiddenString
  } else {
    if (numCount >= 1 || decCount >= 1) { // because inputField.value = "0" initially we must go = or +=
      inputField.value += N;
    } else {
      inputField.value = N;
    }
    hiddenString += N;
    numCount ++;
  }
}

function addZero () {
  if (equalsSet) { // if equalsSet is true
    inputField.value += ""; // can't add additional zeros to inputField.value
    hiddenString += ""; // and can't add additional zeros to hiddenString
  } else {
    zeroCount ++; // add to zeroCount
    if (numCount >= 1 || decCount >= 1) { // if numCount OR decCount >= to 1
      hiddenString += "0"; // add "0" to hiddenString
      inputField.value += "0"; // and add "0" to inputField.value
    } else if (zeroCount >= 1) { // otherwise if zeroCount >= to 1
      hiddenString += ""; // add nothing to hiddenString
      inputField.value = "0"; // and add "0" to inputField.value
    } else {
      hiddenString += ""; // add nothing to hiddenString
      inputField.value += ""; // and add nothing to inputField.value
    }
  }
}

function addDec () {
  if (equalsSet) { // if equalsSet is true
    inputField.value += ""; // can't add additional "." to inputField.value
    hiddenString += ""; // and can't add additional "." to hiddenString
  } else {
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
  }
}

// operator buttons

function togglePosNeg () { // +/-
  var placement = modifiedOpString.value.length;
  console.log("length = " + placement);
  // if (!inputField.value.includes"-"){
  //
  // }
}

function addThisOp (X) {
  equalsSet = false;
  hiddenString += X;
  //inputField.value += X; // modifiedOpString test
  modifiedOpString += X;
  // BEDMASS bracket handlers
  hiddenString = hiddenString.substr(hiddenString.length[0],hiddenString.length-1) + ")" + hiddenString.substr(hiddenString.length-1);
  hiddenString += "(";
  // NEED TO ADD - if hiddenString has 2 of the same operator, eg "**" then remove both and untoggle button colour
  // NEED TO ADD - if hiddenString has 2 different operators, remove the second to last, keep the last and untoggle first button colour and toggle on latest one
}

function btnEquals () {
  hiddenString += ")";
  var answer = eval(hiddenString);
  console.log(hiddenString);
  console.log("hidden string answer: " + answer);
  inputField.value = answer;
  hiddenString = "(" + answer;
  equalsSet = true;
}

function btnAC () {
  equalsSet = false;
  inputField.value = "0";
  hiddenString = "(";
  modifiedOpString = "";
  decCount = 0;
  numCount = 0;
  zeroCount = 0;
}

// function that hides operators in display screen

function checkForOperator () { // makes the display only show most recent entry > not the operator
  console.log("modifiedOpString + " + modifiedOpString);
  String.prototype.replaceAt = function(index, replacement) {
      return this.substr(0, index) + replacement; // + this.substr(index + replacement.length); (not needed as added to the end)
  } // used to replace the last character in a string

  for (var i = 0; i < modifiedOpString.length; i++) {
    if (modifiedOpString.includes("/") || modifiedOpString.includes("*") || modifiedOpString.includes("-") || modifiedOpString.includes("+") || modifiedOpString.includes("%")) {
      inputField.value = " "; // needs space
      decCount = 0; // reset decCount
      numCount = 0; // reset numCount
      zeroCount = 0; // reset zeroCount
      newModifiedOpString = modifiedOpString.replaceAt(modifiedOpString.length -1, " ");
      modifiedOpString = newModifiedOpString; // replaces last operator with a blank space
    } else {
      console.log("does not contain operator");
    }
  }
}
