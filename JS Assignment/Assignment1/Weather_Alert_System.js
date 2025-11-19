// Inputs
let temperature = 36;   // in °C
let humidity = 75;      // in %
let windSpeed = 30;     // in km/h

// Step 1: Check safety conditions
if (temperature > 35 && humidity > 70) {
  console.log("Cancel: Heat Alert.");
} else if (temperature < 10 || windSpeed > 40) {
  console.log("Cancel: Cold/Windy Alert.");
} else {
  console.log("Event Approved.");
}

// Step 2: Suggest clothing/advice based on temperature
if (temperature < 20) {
  console.log("Wear Jacket");
} else if (temperature <= 30) {
  console.log("Comfortable");
} else {
  console.log("Stay Hydrated");
}