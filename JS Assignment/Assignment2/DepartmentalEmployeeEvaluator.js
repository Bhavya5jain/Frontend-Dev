// Q10. Departmental Employee Evaluator
// ------------------------------------------------------
// Objective: Evaluate employees based on performance scores.

const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

// Step 1: Evaluate each department
console.log("----- Departmental Evaluation -----");

for (let i = 0; i < departments.length; i++) {
  let [dept, score] = departments[i];
  let rating = "";

  if (score >= 90) rating = "Excellent";
  else if (score >= 75) rating = "Good";
  else if (score >= 60) rating = "Average";
  else rating = "Needs Improvement";

  console.log(`${dept} Department → Score: ${score} → ${rating}`);
}
console.log("--------------------------------");
