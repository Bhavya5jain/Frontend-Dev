"use strict";

/**
 * Five async stages: design → build → test → deploy → celebrate
 * Each takes 1 second.
 * First: nested callbacks (callback hell).
 * Then: async/await refactor for readability.
 */

const oneSec = (label, cb) => setTimeout(() => { console.log(label); cb && cb(); }, 1000);

// Callback hell version
function pipelineCallbackHell() {
  oneSec("Stage 1: design", () => {
    oneSec("Stage 2: build", () => {
      oneSec("Stage 3: test", () => {
        oneSec("Stage 4: deploy", () => {
          oneSec("Stage 5: celebrate", () => {
            console.log("Pipeline done (callbacks)");
          });
        });
      });
    });
  });
}

// Promise-based helper
const step = (label) =>
  new Promise((resolve) => setTimeout(() => { console.log(label); resolve(label); }, 1000));

// Async/await version
async function pipelineAsyncAwait() {
  try {
    await step("Stage 1: design");
    await step("Stage 2: build");
    await step("Stage 3: test");
    await step("Stage 4: deploy");
    await step("Stage 5: celebrate");
    console.log("Pipeline done (async/await)");
  } catch (e) {
    console.error("Pipeline failed:", e.message);
  }
}

// Run demos
pipelineCallbackHell();
setTimeout(pipelineAsyncAwait, 6000);

/*
Why async/await improves readability:
- It expresses asynchronous steps in a top-to-bottom, sequential style.
- Avoids deeply nested callbacks and makes error handling with try/catch straightforward.
- Each await pauses in the same function, improving traceability and maintenance.
*/