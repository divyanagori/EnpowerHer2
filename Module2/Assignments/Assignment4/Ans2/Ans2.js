function timer(duration, onComplete) {
  setTimeout(function () {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

// Example Call
timer(3000, function(message) {
  console.log(message);
});