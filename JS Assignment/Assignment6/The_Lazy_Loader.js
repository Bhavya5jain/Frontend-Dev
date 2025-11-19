
const maybeReject = () => Math.random() < 0.33;

function loadProfile() {
  return new Promise((resolve, reject) =>
    setTimeout(() => (maybeReject() ? reject("Profile failed") : resolve("Profile Loaded")), 2000)
  );
}
function loadPosts() {
  return new Promise((resolve, reject) =>
    setTimeout(() => (maybeReject() ? reject("Posts failed") : resolve("Posts Loaded")), 1500)
  );
}
function loadMessages() {
  return new Promise((resolve, reject) =>
    setTimeout(() => (maybeReject() ? reject("Messages failed") : resolve("Messages Loaded")), 1000)
  );
}

(async function runAllSettled() {
  const start = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const end = Date.now();
  const timeTaken = end - start;

  results.forEach((res, idx) => {
    const name = ["Profile", "Posts", "Messages"][idx];
    if (res.status === "fulfilled") {
      console.log(`${name}: Success -> ${res.value}`);
    } else {
      console.log(`${name}: Failed -> ${res.reason}`);
    }
  });

  console.log(`Total time taken: ${timeTaken} ms`);
})();