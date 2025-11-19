// Q2. String Manipulation Report
// -------------------------------------------------------
// Objective:
// Format product titles properly before display using string methods.

// Step 1: Store the raw product name with extra spaces
let productName = " wireless headphones PRO ";

// Step 2: Trim extra spaces from both ends
let trimmedName = productName.trim();

// Step 3: Convert the string to lowercase
let lowerCaseName = trimmedName.toLowerCase();

// Step 4: Split the string into words
let wordsArray = lowerCaseName.split(" ");

// Step 5: Capitalize the first letter of each word using map()
let capitalizedWords = wordsArray.map(word => {
  // Skip empty strings caused by multiple spaces
  if (word === "") return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
});

// Step 6: Join the capitalized words back into a single string
let formattedTitle = capitalizedWords.join(" ").replace(/\s+/g, " ").trim();

// Step 7: Replace "Pro" (case-insensitive) with "Pro Edition"
formattedTitle = formattedTitle.replace(/Pro\b/i, "Pro Edition");

// Step 8: Display the cleaned title and its length
console.log("Cleaned Product Title:", formattedTitle);
console.log("Title Length:", formattedTitle.length);

// -------------------------------------------------------
// Expected Output:
// Cleaned Product Title: Wireless Headphones Pro Edition
// Title Length: 35
