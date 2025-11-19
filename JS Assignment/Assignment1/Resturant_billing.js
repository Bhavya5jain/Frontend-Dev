// Inputs
let baseCost = 1850;       // base food cost in ₹
let isDiningIn = true;     // true if dining in, false for takeaway

// Step 1: Calculate taxes
let gst = baseCost * 0.05;
let serviceTax = isDiningIn ? baseCost * 0.10 : 0;

// Step 2: Calculate subtotal before tip
let subtotal = baseCost + gst + serviceTax;

// Step 3: Calculate tip if applicable
let tip = subtotal > 2000 ? subtotal * 0.08 : 0;

// Step 4: Final total
let finalTotal = subtotal + tip;

// Step 5: Display summary
console.log("🍽️ Restaurant Bill Summary");
console.log("----------------------------");
console.log("Base Amount: ₹" + baseCost.toFixed(2));
console.log("GST (5%): ₹" + gst.toFixed(2));
console.log("Service Tax (10% if dining in): ₹" + serviceTax.toFixed(2));
console.log("Recommended Tip (8% if bill > ₹2000): ₹" + tip.toFixed(2));
console.log("Final Total: ₹" + finalTotal.toFixed(2));