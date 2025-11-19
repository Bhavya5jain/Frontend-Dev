// Q6. Event-Based Counter Simulation
// ------------------------------------------------------
// Objective: Create a simple counter with increment/decrement functions.

let count = 0; // Initial counter value

// Function to increment the counter
function increment() {
  count++;
  console.log(`Count increased to: ${count}`);

  // Nested function to show scope
  function logUpdate() {
    console.log(`(Nested Log) Updated Count: ${count}`);
  }
  logUpdate();
}

// Function to decrement the counter
function decrement() {
  count--;
  console.log(`Count decreased to: ${count}`);

  function logUpdate() {
    console.log(`(Nested Log) Updated Count: ${count}`);
  }
  logUpdate();
}

// Simulate clicks by calling functions
console.log("---- Counter Simulation ----");
increment();
increment();
decrement();
increment();
decrement();
