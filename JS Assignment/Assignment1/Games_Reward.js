// Inputs
let level = 15;
let performanceScore = 60;
let missionsCompleted = true;

// Step 1: Calculate base coins
let coins = (level * 50) + (performanceScore * 10);

// Step 2: Double coins if all missions completed
if (missionsCompleted) {
  coins *= 2;
}

// Step 3: Determine rank
let rank = coins > 1000 ? "Elite" : "Regular";

// Step 4: Display results
console.log("🎮 Game Reward Summary");
console.log("------------------------");
console.log("Player Level: " + level);
console.log("Performance Score: " + performanceScore);
console.log("Missions Completed: " + (missionsCompleted ? "Yes" : "No"));
console.log("Total Coins Earned: " + coins);
console.log("Player Rank: " + rank);