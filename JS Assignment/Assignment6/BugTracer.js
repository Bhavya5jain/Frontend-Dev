
const getBugs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const fail = Math.random() < 0.3; // 30% chance to fail
      if (fail) {
        reject(new Error("Failed to fetch bugs from API"));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });

getBugs()
  .then((bugs) => {
    console.log("Bug list:");
    console.table(bugs);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });