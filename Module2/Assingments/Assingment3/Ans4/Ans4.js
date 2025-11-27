
console.log("Begin");

setTimeout(() => {
    console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Task");
});

console.log("End");






// 1. Synchronous Code (Call Stack)

// This part runs first.
// That’s why "Begin" and "End" appear immediately in the output.

// 2. Microtasks (Promise callbacks)

// After all synchronous code finishes, JavaScript runs microtasks.
// Promise .then() belongs to microtasks, so "Promise Task" runs right after "End".

// 3. Macrotasks (setTimeout / setInterval)

// Once microtasks are done, macrotasks run next.
// setTimeout, even with 0ms, always runs after microtasks.
// That’s why "Timeout Task" appears at the end.