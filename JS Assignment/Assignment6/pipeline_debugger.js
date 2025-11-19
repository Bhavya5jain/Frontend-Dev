
/**
 * Delivery pipeline with steps:
 * takeOrder → prepare → pack → dispatch → deliver
 * Each step returns a Promise with random 1–2s delay and random failure.
 * runPipeline uses async/await and try/catch to control flow and handle errors.
 */

const randDelay = () => 1000 + Math.floor(Math.random() * 1000);
const failChance = () => Math.random() < 0.25;

const takeOrder = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => (failChance() ? reject("Order not received") : resolve("Step 1: Order taken")), randDelay())
  );

const prepare = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => (failChance() ? reject("Kitchen error") : resolve("Step 2: Food prepared")), randDelay())
  );

const pack = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => (failChance() ? reject("Packaging issue") : resolve("Step 3: Package ready")), randDelay())
  );

const dispatch = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => (failChance() ? reject("Delivery partner unavailable") : resolve("Step 4: Out for delivery")), randDelay())
  );

const deliver = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => (failChance() ? reject("Customer unreachable") : resolve("Delivery completed!")), randDelay())
  );

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    const s1 = await takeOrder();   console.log(s1);
    const s2 = await prepare();     console.log(s2);
    const s3 = await pack();        console.log(s3);
    const s4 = await dispatch();    console.log(s4);
    const s5 = await deliver();     console.log(s5);
    console.log("Pipeline succeeded.");
  } catch (err) {
    console.error("Pipeline failed!", err);
  }
}

runPipeline();

/*
Async behavior & event loop control flow:
- Each awaited Promise schedules completion via setTimeout (macrotasks).
- The function runPipeline returns a Promise; execution pauses at each await until the step settles.
- If any step rejects, control jumps to catch, logging "Pipeline failed!".
- The event loop processes synchronous logs immediately, then each step's timer resolves and queues a microtask to settle the awaited Promise.
*/