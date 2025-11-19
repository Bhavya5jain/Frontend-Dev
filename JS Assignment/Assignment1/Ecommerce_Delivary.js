// Sample input values (can be modified for testing)
let orderAmount = 450;       
let isPremium = false;      
let isRemote = true;       

//Step 1: Initialize delivery fee
let deliveryFee = 0; 
// If order is below ₹500 and user is not premium, apply ₹50 delivery fee
if (orderAmount < 500 && !isPremium) {
  deliveryFee = 50;
}

// Step 2: Calculate total cost
let totalCost = orderAmount + deliveryFee;

// Step 3: Estimate delivery time
let deliveryTime = 3; // Base delivery time in days

// If address is remote, add 2 extra days
if (isRemote) {
  deliveryTime += 2;
}


console.log("Total Cost :", totalCost);
console.log("Estimated Delivery Time (days):", deliveryTime);

