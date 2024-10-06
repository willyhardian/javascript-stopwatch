let hours = 0,
    minutes = 0,
    seconds = 0;
let interval = null;
let isRunning = false;

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = `${String(hours).padStart(2, "0")}:${String(
        minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function stopwatch() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

document.getElementById("start").addEventListener("click", () => {
    if (!isRunning) {
        interval = setInterval(stopwatch, 1000);
        isRunning = true;
    }
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);
    isRunning = false;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(interval);
    (hours = 0), (minutes = 0), (seconds = 0);
    interval = null;
    isRunning = false;
    updateDisplay();
});

updateDisplay();
