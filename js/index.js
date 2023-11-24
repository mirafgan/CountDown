let timeLeft = 25 * 60; 

const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const timerDisplay = document.getElementById('timer');
let countdown;

function startTimer() {
  clearInterval(countdown);
  resetButton.disabled = false;
  startButton.disabled = true;

  countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerDisplay.textContent = `${minutes}:${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countdown);
      timerDisplay.textContent = '0:00';
      resetButton.disabled = true;
      startButton.disabled = false;
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(countdown);
  timeLeft = 25 * 60;
  timerDisplay.textContent = '00:00';
  startButton.disabled = false;
  resetButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
