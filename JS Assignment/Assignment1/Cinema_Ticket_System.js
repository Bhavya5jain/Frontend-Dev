// Inputs
let showTime = "evening"; // "morning" or "evening"
let age = 65;              // age of the person
let isStudent = false;     // true if student
let tickets = 4;           // number of tickets

// Step 1: Determine ticket price
let ticketPrice = showTime === "morning" ? 120 : 180;

// Step 2: Calculate base price
let basePrice = ticketPrice * tickets;

// Step 3: Apply discount
let discountRate = 0;
if (isStudent) {
  discountRate = 10;
} else if (age > 60) {
  discountRate = 20;
}
let discountedTotal = basePrice * (1 - discountRate / 100);

// Step 4: Add service fee if applicable
let serviceFee = tickets > 3 ? 50 : 0;
let finalAmount = discountedTotal + serviceFee;

// Step 5: Display results
console.log("Base Price: " + basePrice.toFixed(2));
console.log("Discounted Total: " + discountedTotal.toFixed(2));
console.log("Final Amount: " + finalAmount.toFixed(2));