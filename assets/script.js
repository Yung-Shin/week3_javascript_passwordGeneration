// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Acceptance criteria for new password
var allElement = [];
var minimumLength = 8;
var lowerLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['~','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', ';', ':', ',', '<', '.', '>', '/','?'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];




// function for password display based on following functions and inputs
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;

  } else {
    passwordText.value = " ";
  }

}

// function for password generation
function generatePassword() {
  var passwordText = "";
  for (var i = 0; i < minimumLength; i++) {
    var randomCode = Math.floor(Math.random() * allElement.length);
    passwordText  = passwordText + allElement[randomCode];
  }
  
  return passwordText;
}

// function for user input
function getPrompts() {
  allElement = [];
  minimumLength = parseInt(prompt("Please choose the length of your password (Minimum:8  Maximum:128)"));
  

  // gives an alert when user choooses number lower than 8 or greater than 128
  if (isNaN(minimumLength) || minimumLength < 8 || minimumLength > 128) {
    alert("Please select the length between 8 and 128");
    return false;
  }
  
  // a series of prompt based on acceptance criteria
  if (confirm("Do you want lowercase letters?")) {
    allElement = allElement.concat(lowerLetter);
  }
  if (confirm("Do you want uppercase letters?")) {
    allElement = allElement.concat(upperLetter);
  }
  if (confirm("Do you want special characters or symbols?")) {
    allElement = allElement.concat(special);
  }
  if (confirm("Do you want numbers?")) {
    allElement = allElement.concat(numberArray);
  }
  return true;
}

