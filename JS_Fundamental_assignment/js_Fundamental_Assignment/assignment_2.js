// Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
// that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.

function checkMatch(pattern, str) {
    let regex = new RegExp(pattern);
    return regex.test(str);
}


let pattern1 = "\\d+"; 
let string1 = "12345";
console.log(checkMatch(pattern1, string1)); 