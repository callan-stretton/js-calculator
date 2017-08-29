var inputField = document.getElementById("inputF");
var calculation = Number(inputField.value);
console.log("0", calculation)

/*
function numberModerator () {
  if numberPressed beforehand then += else =
}

when X take the input field into var entry1 or entry[i]
until you hit = button it goes entry1 + operator + entry2 + operator + entry3
*/

// var btnEquals = function (evt) {
//   console.log("equals button hit");
//   return;
// }
// console.log(btnEquals());

function btnNumOne (evt) {
  if (!btnEquals) {
    console.log("equals not hit");
    inputField.value += "1";
  } else {
    inputField.value = "1";
  }
  //return numberPressed true;
}

function btnNumTwo (evt) {
  inputField.value = "2";
}
function btnNumThree (evt) {
  inputField.value = "3";
}
function btnNumFour (evt) {
  inputField.value = "4";
}
function btnNumFive (evt) {
  inputField.value = "5";
}
function btnNumSix (evt) {
  inputField.value = "6";
}
function btnNumSeven (evt) {
  inputField.value += "7";
}
function btnNumEight (evt) {
  inputField.value = "8";
}
function btnNumNine (evt) {
  inputField.value = "9";
}
function btnNumZero (evt) {
  inputField.value = "0";
}
