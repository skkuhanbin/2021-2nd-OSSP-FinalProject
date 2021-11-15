const timer = document.querySelector('.js-timer'),
  stopBtn = document.querySelector('.js-timer__stopBtn'),
  startBtn = document.querySelector('.js-timer__startBtn'),
  resetBtn = document.querySelector('.js-timer__resetBtn');

let TIME = 0;
let cron;

function startButton() {
  updateTimer();
  stopButton();
  cron = setInterval(updateTimer, 1000);
  timer.classList.add('start');
}

function stopButton() {
  clearInterval(cron);
  timer.classList.remove('start');
}

function resetButton() {
  timer.innerText = `00:00`;
  stopButton();
  timer.classList.remove('start');
  return (TIME = 0);
}

function updateTimer() {
  const checkMinutes = Math.floor(TIME / 60);
  const seconds = TIME % 60;
  const minutes = checkMinutes % 60;

  timer.innerText = `${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds} `;
  TIME++;
  console.log(TIME - 1);
}

function init() {
  startBtn.addEventListener('click', startButton);
  stopBtn.addEventListener('click', stopButton);
  resetBtn.addEventListener('click', resetButton);
}
init();