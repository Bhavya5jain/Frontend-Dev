// Q9. Odd–Even Number Analyzer
// ------------------------------------------------------
// Objective: Classify numbers from 1–30 as FizzBuzz, Even, or Odd.

let numbers = [];
let results = [];

// Step 1: Fill array with numbers 1–30
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

// Step 2: Analyze each number
numbers.forEach(num => {
  if (num % 3 === 0 && num % 5 === 0) {
    results.push("FizzBuzz");
  } else if (num % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
});

// Step 3: Display results
console.log("----- Odd–Even Analyzer -----");
numbers.forEach((num, i) => {
  console.log(`${num} → ${results[i]}`);
});
