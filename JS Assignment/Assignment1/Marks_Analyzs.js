// Input: Marks for 5 subjects
let marks = [85, 92, 38, 76, 41]; // out of 100

// Step 1: Calculate total, average, percentage
let total = 0;
let failCount = 0;

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
  if (marks[i] < 40) {
    failCount++;
  }
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Step 2: Determine grade
let grade;
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 75) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 40) {
  grade = "C";
} else {
  grade = "Fail";
}

// Step 3: Check for repeat condition
let repeatYear = failCount >= 2;

// Step 4: Display results
console.log("Average Marks: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
if (repeatYear) {
  console.log("Repeat Year");
}