let seconds = parseInt(prompt("Enter the number of seconds to countdown:"));

let timer = setInterval(() => {
  console.log(`Time left: ${seconds} seconds`);
  seconds--;

  if (seconds < 0) {
    clearInterval(timer);
    console.log("⏱ Countdown Complete!");
  }
}, 1000);

// Detect a key press (like 's' for stop) after 100ms
setTimeout(() => {
  document.addEventListener("keypress", (event) => {
    if (event.key === "s") {
      clearInterval(timer);
      console.log(" Countdown Stopped by User!");
    }
  });
}, 100);