"use strict";

function showMessage() {
    // Error: greeting is undeclared in strict mode
    // Fix: declare with let/var/const
    let greeting = "Welcome";
    console.log(greeting);
}

showMessage();

// Debug note: strict mode prevents accidental global variable creation