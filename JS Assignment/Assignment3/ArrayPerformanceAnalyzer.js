// Q4. Array Performance Analyzer
// ------------------------------------------------------
// Objective: Analyze student performance using random scores.

// Step 1: Generate an array of 8 random scores between 30 and 100
let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
console.log("Student Scores:", scores);

// Step 2: Find highest and lowest score
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// Step 3: Calculate average score using reduce()
let average = scores.reduce((sum, val) => sum + val, 0) / scores.length;

// Step 4: Find number of students who passed (score ≥ 50)
let passedCount = scores.filter(score => score >= 50).length;

// Step 5: Display formatted summary
console.log("\n----- Performance Summary -----");
console.log(`Highest Score   : ${highest}`);
console.log(`Lowest Score    : ${lowest}`);
console.log(`Average Score   : ${average.toFixed(2)}`);
console.log(`Students Passed : ${passedCount} / ${scores.length}`);
console.log("--------------------------------");
