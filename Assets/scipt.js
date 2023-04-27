//Timer function
function timer() {
    timerInterval = setInterval(function () {
        currentTime--;
        timerDisplay.textContent = "Time: " + currentTime;
        if (currentTime <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}