// Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.
// Create a function that searches for specific character classes in a given string and returns the matches. Test
// the function with patterns for digits, uppercase letters, lowercase letters, and special characters. 

function searchCharacterClasses(inputString) {
    let digitPattern = /\d/g; 
    let uppercasePattern = /[A-Z]/g; 
    let lowercasePattern = /[a-z]/g; 
    let specialPattern = /[^A-Za-z0-9]/g; 

    
    let digits = inputString.match(digitPattern);
    let uppercaseLetters = inputString.match(uppercasePattern);
    let lowercaseLetters = inputString.match(lowercasePattern);
    let specialCharacters = inputString.match(specialPattern);

    
    return {
        digits: digits,
        uppercaseLetters: uppercaseLetters,
        lowercaseLetters: lowercaseLetters,
        specialCharacters: specialCharacters
    };
}


let inputString = "Hello123!@#";
let matches = searchCharacterClasses(inputString);


console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters);
console.log("Lowercase Letters:", matches.lowercaseLetters);
console.log("Special Characters:", matches.specialCharacters);