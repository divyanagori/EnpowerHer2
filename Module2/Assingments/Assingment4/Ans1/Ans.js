// Step 1: Define displayMessage function
function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}

// Step 2: Define getUserInput function
function getUserInput(callback) {
  setTimeout(function () {
    let username = "Alice"; // simulating user input
    callback(username); // calling the callback with retrieved username
  }, 1000); // after 1 second
}

// Calling getUserInput and passing displayMessage as a callback
getUserInput(displayMessage);