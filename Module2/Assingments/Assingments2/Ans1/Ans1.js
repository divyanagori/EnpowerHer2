// 1. Global variable
let age = 20;

// 2. Function to display age
function displayAge() {
  console.log(age);
}

// 3. Function to change the global age
function changeAge() {
  age = 25;         // updating global variable
  console.log(age); // print updated age
}

// 4. Call functions
displayAge();  // prints 20
changeAge();   // prints 25
displayAge();  // prints 25 (updated global value)