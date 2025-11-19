"use strict";

let rows = 5; // user input default

for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}

// Debug: replacing let with var may cause reuse issues in nested loops