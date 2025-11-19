// Q8. Dynamic Discount Evaluator
// ------------------------------------------------------
// Objective: Apply category-based and total-based discounts.

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

console.log("----- Original Cart -----");
cart.forEach(p => console.log(`${p.item} (${p.category}) - ₹${p.price}`));

// Step 1: Apply category discounts
const discountedCart = cart.map(product => {
  let discount = 0;
  if (product.category === "electronics") discount = 0.10;
  else if (product.category === "fashion") discount = 0.05;

  let discountedPrice = product.price - (product.price * discount);
  return { ...product, discountedPrice };
});

// Step 2: Calculate total after category discounts
let total = discountedCart.reduce((sum, p) => sum + p.discountedPrice, 0);

// Step 3: Apply extra 5% if total > 50000
if (total > 50000) total -= total * 0.05;

// Step 4: Display final total
console.log("\n----- Discount Summary -----");
discountedCart.forEach(p => {
  console.log(`${p.item} → ₹${p.discountedPrice.toFixed(2)}`);
});
console.log(`Final Total: ₹${total.toFixed(2)}`);
console.log("--------------------------------");
