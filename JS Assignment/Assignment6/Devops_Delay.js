
const serverA = new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() < 0.2 ? reject(new Error("Server A failed")) : resolve("Server A deployed");
  }, 2000);
});

const serverB = new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() < 0.2 ? reject(new Error("Server B failed")) : resolve("Server B deployed");
  }, 3000);
});

Promise.all([serverA, serverB])
  .then((results) => {
    console.log("Deployment completed for all servers");
    console.log(results);
  })
  .catch((err) => {
    console.error("Deployment error (all):", err.message);
  });

Promise.race([serverA, serverB])
  .then((fastest) => console.log("Fastest response:", fastest))
  .catch((err) => console.error("Race error:", err.message));