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

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
  console.log(getRandom(arr))
}

// Function to generate password with user input

    // Generate a password when the button is clicked

      // Prompt for length of password "How many characters would you like to have in your password?"

function generatePassword() {
  let characterAmount = prompt("How many characters would you like to have in your password?");
  // store number value
  if (characterAmount != null && characterAmount.length !== 0) {
    console.log(characterAmount)
  }
  
    // Prompt to enter number between 10 and 64 if number input is out of this range.
  let secondMessage;
    if (characterAmount < 10) {
      secondMessage = confirm("Please enter a number between 10 and 64!")
    } else if (characterAmount > 64) {
      secondMessage = confirm("Please enter a number between 10 and 64!")
    }

} 

        // Click OK to confirm any lowercase letters in password.
    // No lowercase letters in password if cancel is clicked.

          // Click OK to confirm any uppercase letters in password.
    // No uppercase letters in password if cancel is clicked.

            // Click OK to confirm any Numeric characters in password.
    // No Numeric characters in password if cancel is clicked.

              // Click OK to confirm special characters ($@%&*, etc) in password.
    // No special characters in password if cancel is clicked.


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