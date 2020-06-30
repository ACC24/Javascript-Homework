// Assignment Code
var button = document.getElementById("generate");

// Defining variables for password criteria
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var num = '0123456789';
var special = '~!@#$%^&*()_+=';


// Requesting user input for password lenght
var passwordLength = 0;


    

var userInput = {};

function generatePassword() {
  passwordLength = parseInt(prompt("Your password must be between 8 and 128 characters. How many characters would you like your password to be?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128.");
  }
  else {var confirmUpper = confirm("Would you like upper case letters?");
  var confirmLower = confirm("Would you like lowercase characters?");
  var confirmNum = confirm("Would you like numeric characters?");
  var confirmSpecial = confirm("Would you like special characters?");

  if (confirmUpper) {
    userInput["alphaUpper"] = alphaUpper;
  }
  if (confirmLower) {
    userInput["alphaLower"] = alphaLower;
  }  
  if (confirmNum) {
    userInput["num"] = num;
  }
  if (confirmSpecial) {
    userInput["special"] = special;
  }
}
}

// generatePassword();

function randomizedCharacter(str) {
  return str[Math.floor(Math.random() * str.length)]
}

function writePassword() {
  generatePassword();
  var passwordResult = '';
  for (var i = 0; i < passwordLength; i++) { 
    var password = Object.keys(userInput)
    var randomize = password[Math.floor(Math.random() * password.length)]
    var char = randomizedCharacter(userInput[randomize]);

    passwordResult += char;
  } 
  return passwordResult
}

// writePassword();

button.addEventListener("click", function(){
  password.innerHTML = writePassword();
})




