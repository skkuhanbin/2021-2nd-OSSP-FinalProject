const timer = document.querySelector('.timerDisplay'),
  playTimer = document.querySelector('.playBtn'),
  pauseTimer = document.querySelector('.pauseBtn'),
  stopTimer = document.querySelector('.stopBtn');

let counterTIME = 3;
let TIME = 0;
let interval;
let playflag =0;//0-enable playBtn, 1 - disable playBtn

function initTimer() {
  playTimer.addEventListener('click', playButton);
  pauseTimer.addEventListener('click', pauseButton);
  stopTimer.addEventListener('click', stopButton);
}
initTimer();

function playButton() {
  if(playflag==0)
  {
  updateTimer();
  pauseButton();
  interval = setInterval(updateTimer, 1000);
  timer.classList.add('start');
  playflag=1;
  }
  else
  {}
}

function pauseButton() {
  clearInterval(interval);
  timer.classList.remove('start');
  playflag = 0;
}

function stopButton() {
  timer.innerText = "00:00";
  pauseButton();
  timer.classList.remove('start');
  playflag=0;
  counterTIME = 3;
  TIME=0;
}

function updateTimer() {
  if(counterTIME>0)
  {
    timer.classList.add('text-danger'); // red
    timer.innerText = "00:0"+counterTIME;
    counterTIME--;
  }
  else{
    //countdown ends
    timer.classList.remove('text-danger');
  const minutes = Math.floor(TIME / 60);
  const seconds = TIME % 60;

  timer.innerText = `${minutes < 10 ? "0"+minutes : minutes
  }:${seconds < 10 ? "0"+seconds : seconds}`;
  TIME++;}
}