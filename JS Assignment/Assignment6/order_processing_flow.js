

const submitOrder = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? reject(new Error("Network error")) : resolve("Order submitted");
    }, 500);
  });

async function processOrder(maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await submitOrder();
      console.log(`Attempt ${attempt}: Success (${res})`);
      return res;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed (${err.message})`);
      if (attempt === maxRetries) {
        throw new Error("Order could not be processed");
      }
      // Optional: backoff could be added here
    }
  }
}

(async function run() {
  try {
    await processOrder(3);
    console.log("Final: Order processed.");
  } catch (err) {
    console.error("Final:", err.message);
  }
})();