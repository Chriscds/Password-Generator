// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var usersChoice= [];

// Function to prompt user for password options
function getPasswordOptions() {
      // Prompt for length of password "How many characters would you like to have in your password?"
      userInputLength = prompt("How many characters would you like to have in your password?");

      // check to see if users input is within scope and alert if false
      if (userInputLength < 10 || userInputLength > 64) {
        alert("Please enter a number between 10 and 64 characters!");
        return false;
      }
      // Click OK to confirm special characters ($@%&*, etc) in password.
      // No special characters in password if cancel is clicked.
      if (confirm("Would you like any special characters in your password?")) {
        // add special characters to users choice.
        usersChoice = usersChoice.concat(specialCharacters);
      }
      // Click OK to confirm any Numeric characters in password.
      // No Numeric characters in password if cancel is clicked.
      if (confirm("Would you like any special characters in your password?")) {
        usersChoice = usersChoice.concat(numericCharacters);
      }
      // Click OK to confirm any lowercase letters in password.
      // No lowercase letters in password if cancel is clicked.
      if (confirm("Would you like any special characters in your password?")) {
        usersChoice = usersChoice.concat(lowerCasedCharacters);
      }
      // Click OK to confirm any uppercase letters in password.
      // No uppercase letters in password if cancel is clicked.
      if (confirm("Would you like any special characters in your password?")) {
        usersChoice = usersChoice.concat(upperCasedCharacters);
      }
      return true;

}

// Function for getting a random element from an array
function getRandom(specialCharacters) {

}

// Function to generate password with user input

    // Generate a password when the button is clicked



function generatePassword() {
  
} 

        

          

            

    


// Code should validate for each input and at least one character type should be selected

// Once prompts are answered then the password should be generated and displayed in an alert or written to the page


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);