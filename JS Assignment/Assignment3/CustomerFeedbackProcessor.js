// Q7. Customer Feedback Processor
// ------------------------------------------------------
// Objective: Analyze feedback for positivity and length.

let feedback = "Great product! Fast delivery and amazing sound quality!";

// Step 1: Count words
let words = feedback.split(" ");
let wordCount = words.length;

// Step 2: Check for negative keywords
let hasNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

// Step 3: Evaluate feedback
console.log("----- Feedback Analysis -----");
console.log(`Feedback: "${feedback}"`);
console.log(`Word Count: ${wordCount}`);

if (!hasNegative) {
  console.log("Verdict: ✅ Positive Feedback");
} else {
  console.log("Verdict: ⚠️ Needs Improvement");
}
console.log("--------------------------------");
