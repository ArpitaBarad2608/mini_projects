const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500;  // Timer starts at 25 minutes (1500 seconds)
let interval;

// Function to update the displayed time
const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);  // Corrected variable name: timeLeft (lowercase)
    const seconds = timeLeft % 60;
    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

// Function to start the timer
const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;  // Decrease time by 1 second
        updateTimer();  // Update the display
        if (timeLeft === 0) {
            clearInterval(interval);  // Stop the timer when it reaches 0
            alert("Time's up!");
            timeLeft = 1500;  // Reset the timer to 25 minutes
            updateTimer();  // Update the display after resetting
        }
    }, 1000);  // Update every second
};

// Function to stop the timer
const stopTimer = () => clearInterval(interval);  // Clear the interval

// Function to reset the timer
const resetTimer = () => {
    clearInterval(interval);  // Stop the timer
    timeLeft = 1500;  // Reset to 25 minutes
    updateTimer();  // Update the display after resetting
};

// Event listeners to trigger actions
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);