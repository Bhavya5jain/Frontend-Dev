"use strict";

// Mixed API data
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

// Loop through each value
for (let i = 0; i < apiData.length; i++) {
    let value = apiData[i];

    // Convert to Number, Boolean, String
    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    console.log(`Original: ${value}, Number: ${num}, Boolean: ${bool}, String: "${str}"`);

    // Check validity of number
    if (!isNaN(num) && value !== " " && value !== "100px") {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(value);
    }
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Numbers:", invalidNumbers);

// Debug note: NaN results from invalid numeric conversions