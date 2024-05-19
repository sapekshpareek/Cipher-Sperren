// encryptionModule.js

// Function to encrypt the string
function encryptString(inputString) {
    const shift = 3; // Example: Caesar Cipher with a shift of 3
    let encrypted = '';
  
    // Loop through each character in the string
    for (let i = 0; i < inputString.length; i++) {
      let char = inputString[i];
  
      // Encrypt alphabetic characters only
      if (char.match(/[a-zA-Z]/)) {
        let charCode = inputString.charCodeAt(i);
        
        // Uppercase letters
        if (charCode >= 65 && charCode <= 90) {
          char = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        }
        // Lowercase letters
        else if (charCode >= 97 && charCode <= 122) {
          char = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        }
      }
  
      // Append the encrypted character to the result
      encrypted += char;
    }
  
    return encrypted;
  }
  
  // Export the function to use in server.js
  module.exports = { encryptString };
  