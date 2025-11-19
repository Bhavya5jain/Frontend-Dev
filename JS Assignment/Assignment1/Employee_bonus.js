// Inputs
let baseSalary = 120000;     // in ₹
let rating = 4;              // performance rating (1 to 5)
let experience = 6;          // years of experience

// Step 1: Determine base bonus rate
let bonusRate = 0;
if (rating === 5) {
  bonusRate = 20;
} else if (rating === 4) {
  bonusRate = 15;
} else if (rating === 3) {
  bonusRate = 10;
}

// Step 2: Add experience bonus if applicable
if (experience > 5) {
  bonusRate += 5;
}

// Step 3: Calculate bonus amount
let calculatedBonus = baseSalary * (bonusRate / 100);

// Step 4: Apply bonus cap if needed
let finalBonus = calculatedBonus;
if (baseSalary > 100000 && calculatedBonus > 25000) {
  finalBonus = 25000;
}

// Step 5: Calculate total salary after bonus
let totalSalary = baseSalary + finalBonus;

// Step 6: Display results
console.log("💼 Employee Bonus Summary");
console.log("----------------------------");
console.log("Base Salary: ₹" + baseSalary.toFixed(2));
console.log("Calculated Bonus: ₹" + calculatedBonus.toFixed(2));
console.log("Final Bonus (after cap): ₹" + finalBonus.toFixed(2));
console.log("Total Salary After Bonus: ₹" + totalSalary.toFixed(2));