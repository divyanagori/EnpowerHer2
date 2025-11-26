function createCounter() {
  let count = 0;  // private variable

  return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },

    decrement: function () {
      count--;
      console.log("Current count:", count);
    }
  };
}

// Example usage:
const counter = createCounter();
counter.increment(); // Current count: 1
counter.increment(); // Current count: 2
counter.decrement(); // Current count: 1