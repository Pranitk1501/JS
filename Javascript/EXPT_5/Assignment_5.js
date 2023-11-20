// (YYYY-MM-DD HH:MM:SS format)
const countdownEndDate = "2023-10-20 00:00:00";

function updateCountdown() {
    const currentDate = new Date();
    const endDate = new Date(countdownEndDate);

    const timeDifference = endDate - currentDate;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


        const timerElement = document.getElementById("timer");
        timerElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

        const endDateElement = document.getElementById("end-date");
        endDateElement.innerHTML = `End Date: ${countdownEndDate}`;
    } else {
        const timerElement = document.getElementById("timer");
        timerElement.innerHTML = "Countdown expired!";

        const endDateElement = document.getElementById("end-date");
        endDateElement.innerHTML = `End Date: NA`;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
