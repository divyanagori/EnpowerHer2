let seconds = parseInt(prompt("Enter the number of seconds for the countdown:"));

// Start countdown using setInterval
let timer = setInterval(() => {
    console.log("Time left:", seconds);
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("Countdown Complete!");
    }
}, 1000);

// Delay key detection using setTimeout
setTimeout(() => {
    document.addEventListener("keydown", (event) => {
        if (event.key === "s") {
            clearInterval(timer);
            console.log("Countdown Stopped by User!");
        }
    });
}, 1000);
