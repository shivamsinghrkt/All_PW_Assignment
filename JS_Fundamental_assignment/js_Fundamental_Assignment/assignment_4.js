// Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
// only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
// function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
// from a given string.

function extractDateParts(pattern, dateString) {
    let regex = new RegExp(pattern);
    let match = regex.exec(dateString);
    if (!match) {
        return null;
    }

    return {
        day: match[1],
        month: match[2],
        year: match[3]
    };
}

// Test the function with a sample date string
let datePattern = /(\d{1,2})-(\d{1,2})-(\d{4})/;
let dateStr = "31-12-2022";
let extractedDate = extractDateParts(datePattern, dateStr);

console.log("Extracted Date Parts:", extractedDate);