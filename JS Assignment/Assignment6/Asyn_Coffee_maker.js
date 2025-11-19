
// Helper to create a random delay between 1000–2000 ms
const delay = () => 1000 + Math.floor(Math.random() * 1000);

// Random failure simulator (30% chance)
const maybeFail = () => Math.random() < 0.3;

const boilWater = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1: Water boiled");
      maybeFail() ? reject(new Error("Boiler malfunction")) : resolve("Boiled water");
    }, delay());
  });

const brewCoffee = (input) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2: Coffee brewed");
      maybeFail() ? reject(new Error("Beans jammed")) : resolve(`${input} + Brewed coffee`);
    }, delay());
  });

const pourCup = (input) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3: Coffee poured into cup");
      maybeFail() ? reject(new Error("Cup cracked")) : resolve(`${input} + Poured`);
    }, delay());
  });

// Promise chaining
boilWater()
  .then(brewCoffee)
  .then(pourCup)
  .then(() => console.log("Coffee ready for the team!"))
  .catch((err) => console.error("Coffee process failed:", err.message));