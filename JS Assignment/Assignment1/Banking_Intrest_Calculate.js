let accountType = "fixed"; // or "savings"
let amount = 150000;       // deposit amount in ₹
let years = 5;             // number of years

let rate;

// Step 1: Determine base interest rate
if (accountType === "savings") {
  rate = 4;
} else if (accountType === "fixed") {
  rate = 6.5;
} else {
  console.log("Invalid account type");
  return;
}

// Step 2: Add bonus interest if applicable
if (amount > 100000) {
  rate += 1;
}

// Step 3: Calculate total using compound interest formula
let total = amount * Math.pow((1 + rate / 100), years);

// Step 4: Round to two decimals and print
console.log("Final Balance:" + total.toFixed(2));