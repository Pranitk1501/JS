const timerDisplay = document.getElementById("timerDisplay");
const minutesInput = document.getElementById("minutes");
const startButton = document.getElementById("startButton");

const countdownTimer = {
    intervalId: null,
    targetTime: 0,

    startCountdown(minutes) {
        const endTime = Date.now() + minutes * 60 * 1000;
        this.targetTime = endTime;

        this.intervalId = setInterval(() => {
            const remainingTime = this.targetTime - Date.now();

            if (remainingTime <= 0) {
                this.stopCountdown();
                timerDisplay.textContent = "Time's up!";
            } else {
                const minutes = Math.floor(remainingTime / (60 * 1000)).toString().padStart(2, "0");
                const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000).toString().padStart(2, "0");
                timerDisplay.textContent = `${minutes}:${seconds}`;
            }
        }, 1000);

        startButton.disabled = true;
        minutesInput.disabled = true;
    },

    stopCountdown() {
        clearInterval(this.intervalId);
        startButton.disabled = false;
        minutesInput.disabled = false;
    }
};

startButton.addEventListener("click", () => {
    const minutes = parseInt(minutesInput.value, 10);
    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid positive number of minutes.");
        return;
    }

    countdownTimer.startCountdown(minutes);
});
