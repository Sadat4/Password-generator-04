var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','/','<','>'];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var correctPrommpts = getPrompts();  // true or false
  var passwordText = document.querySelector("#password");

  if (correctPrommpts){
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  //create new password based on the prompts
  var password = "";
  for (var i=0; i< characterLength; i++){
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
  choiceArr =[];

  characterLength = parseInt(prompt("how many character would you want your password? (8 - 128 characters)")); 

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { // this is for false condition
    alert("Character length has to be a number, 8-128 digit. Please try again.");
    return false;
  }

  if (confirm("Do you want lowercase letter in your password?")){
    choiceArr = choiceArr.concat(lowerCassArr);
  }
  if (confirm("Do you want uppercase letter in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Do you want special characters in your password?")){
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Do you want numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}