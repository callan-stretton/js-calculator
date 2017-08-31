//var calculation = Number(inputField.value);
var inputField = document.getElementById("inputF");
inputField.value = "0"
var hiddenString = ""

function removeFirstZero () {
  for (var i = 0; i < inputField.value.length; i++) {
    if (inputField.value[0] = "0") {
      String.prototype.replaceAt = function(index, replacement) {
          return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
      }
      var newInputField = inputField.value.replaceAt(0, " ");
      inputField.value = newInputField;
    }
  }
}

function numBtnClicked () {
  console.log("Number Button Clicked");
  console.log("hidden string: " + hiddenString);
  return true;
}

function optrBtnClicked () {
  console.log("Operator Button Clicked");
  inputField.value = "0";
  console.log("hidden string: " + hiddenString);
  return true;
}



// Operator Buttons

function btnEquals () {
  var answer = eval(hiddenString);
  console.log("hidden string answer: " + answer);
  inputField.value = answer;
}

function btnDiv () {
  hiddenString += "/";
  optrBtnClicked();
}

function btnMul () {
  hiddenString += "*";
  optrBtnClicked();
}

function btnMin () {
  hiddenString += "-";
  optrBtnClicked();
}

function btnAdd () {
  hiddenString += "+";
  optrBtnClicked();
}


// Other Buttons

function btnAC () {
  inputField.value = "0";
  hiddenString = "";
  console.log("hidden string: " + hiddenString);
}


// Number Buttons

function btnNumOne (evt) {
  //inputField.value = "0";
  inputField.value += "1";
  hiddenString += "1";
  numBtnClicked();
  removeFirstZero();
}
function btnNumTwo (evt) {
  inputField.value += "2";
  hiddenString += "2";
  removeFirstZero();
  numBtnClicked()
}
function btnNumThree (evt) {
  inputField.value += "3";
  hiddenString += "3";
  removeFirstZero();
  numBtnClicked()
}
function btnNumFour (evt) {
  inputField.value += "4";
  hiddenString += "4";
  removeFirstZero();
  numBtnClicked()
}
function btnNumFive (evt) {
  inputField.value += "5";
  hiddenString += "5";
  removeFirstZero();
  numBtnClicked()
}
function btnNumSix (evt) {
  inputField.value += "6";
  hiddenString += "6";
  removeFirstZero();
  numBtnClicked()
}
function btnNumSeven (evt) {
  inputField.value += "7";
  hiddenString += "7";
  removeFirstZero();
  numBtnClicked()
}
function btnNumEight (evt) {
  inputField.value += "8";
  hiddenString += "8";
  removeFirstZero();
  numBtnClicked()
}
function btnNumNine (evt) {
  inputField.value += "9";
  hiddenString += "9";
  removeFirstZero();
  numBtnClicked()
}
function btnNumZero (evt) {
  inputField.value += "0";
  hiddenString += "0";
  removeFirstZero();
  numBtnClicked()
}
function btnNumDec (evt) {
  inputField.value += ".";
  hiddenString += ".";
}
