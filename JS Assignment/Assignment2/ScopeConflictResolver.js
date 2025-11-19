// Q1. Scope Conflict Resolver
// -----------------------------------------
// Objective:
// Fix variable scope conflicts using proper local/global variable declarations.

// Global variable declaration
let bonus = 5000; // Accessible everywhere

// Function to calculate salary
function calculateSalary() {
  // Local variable declarations (function scope)
  let salary = 40000;  // Base salary
  let isPermanent = true; // Change this to false to test the difference

  // Print initial details
  console.log("Base Salary:", salary);
  console.log("Bonus (Global):", bonus);
  console.log("Is Permanent Employee:", isPermanent);

  // Conditional logic to add bonus
  if (isPermanent) {
    // Adding global bonus to local salary
    let totalSalary = salary + bonus;
    console.log("Total Salary with Bonus:", totalSalary);
  } else {
    // If not permanent, no bonus is added
    let totalSalary = salary;
    console.log("Total Salary without Bonus:", totalSalary);
  }

  // Demonstrating local vs global scope
  console.log("\n[Inside Function] Global Bonus still:", bonus);
}

// Function call 1: Permanent employee
console.log("---- CASE 1: Permanent Employee ----");
calculateSalary();

// Function call 2: Non-permanent employee
console.log("\n---- CASE 2: Contract Employee ----");
function calculateSalaryForContract() {
  let salary = 40000;
  let isPermanent = false; // Changing local variable only
  if (isPermanent) {
    console.log("Total Salary with Bonus:", salary + bonus);
  } else {
    console.log("Total Salary without Bonus:", salary);
  }
  console.log("[Inside Function] Global Bonus remains unchanged:", bonus);
}
calculateSalaryForContract();

// Final check of global variable
console.log("\n[Outside Function] Global Bonus Value:", bonus);
