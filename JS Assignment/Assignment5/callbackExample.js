// Step 1: Define callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Step 2: Define function that accepts a callback
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Call the callback function
    callback();
}

// Step 3: Call function with callback
greetUser("Bhavya", showEndMessage);
