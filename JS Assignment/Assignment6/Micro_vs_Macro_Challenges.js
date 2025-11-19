
/**
 * Demonstrates event loop ordering:
 * - Synchronous logs run immediately.
 * - Microtasks (Promise.then) run after current call stack, before macrotasks.
 * - Macrotasks (setTimeout) run in the next event loop tick.
 */

console.log("Start"); // synchronous

setTimeout(() => {
  console.log("Macrotask: setTimeout callback");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Microtask: Promise.then callback");
  });

console.log("End"); // synchronous

/*
Expected order:
1) Start
2) End
3) Microtask: Promise.then callback  <-- microtasks run before macrotasks
4) Macrotask: setTimeout callback

Explanation:
- The JS engine runs synchronous code first (Start, End).
- Then it empties the microtask queue (Promise.then).
- Finally, it processes timers (macrotask queue), so setTimeout runs last.
*/