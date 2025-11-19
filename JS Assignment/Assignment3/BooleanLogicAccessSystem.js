// Q5. Boolean Logic Access System
// ------------------------------------------------------
// Objective: Check smart home security using Boolean logic.

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Access granted only if all conditions are true
let isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;

// Display result
if (isSecure) {
  console.log("System Status: 🔒 Secure");
} else {
  console.log("System Status: ⚠️ Unsafe");
}

// Test different conditions
isOwnerInside = false;
console.log("\nOwner left the house...");
isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;
console.log(isSecure ? "System Status: 🔒 Secure" : "System Status: ⚠️ Unsafe");
