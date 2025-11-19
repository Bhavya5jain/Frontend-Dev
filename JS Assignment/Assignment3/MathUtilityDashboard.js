// Q3. Math Utility Dashboard
// ------------------------------------------------------
// Objective:
// Use JavaScript Math methods to perform various calculations
// and display a formatted summary using template literals.

// Step 1: Declare a number
let x = 16.75;

// Step 2: Perform mathematical operations
let roundedValue = Math.round(x);          // Rounds to nearest integer
let squareRoot = Math.sqrt(x);             // Calculates square root
let cubePower = Math.pow(x, 3);            // x raised to the power of 3

// Step 3: Generate a random number between 10 and 50
// Math.random() gives [0, 1), multiply by 41 to get range [0, 41),
// then add 10 to shift it to [10, 51)
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Step 4: Display results in a formatted summary using template literals
console.log("----- Math Utility Dashboard -----");
console.log(`Input Number: ${x}`);
console.log(`Rounded Value: ${roundedValue}`);
console.log(`Square Root: ${squareRoot.toFixed(3)}`);
console.log(`Cube (x³): ${cubePower.toFixed(2)}`);
console.log(`Random Number (10–50): ${randomNumber}`);
console.log("---------------------------------");

// Optional Summary in one template literal
console.log(`
📊 Summary Report:
-----------------------
Number Entered : ${x}
Rounded Value  : ${roundedValue}
Square Root    : ${squareRoot.toFixed(3)}
Cube Value     : ${cubePower.toFixed(2)}
Random (10–50) : ${randomNumber}
-----------------------
`);
