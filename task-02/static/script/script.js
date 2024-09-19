document.body.style.backgroundColor = "#1e1e1e"
document.body.style.color = "#ffffff"

let startTime, updatedTime, difference, tInterval;
let running = false;
let lapTimes = [];
const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapTimeBtn = document.getElementById('lapTimeBtn');
const lapList = document.getElementById('lapList');

function formatTime(ms) {
    let hours = Math.floor(ms / (1000 * 60 * 60));
    let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((ms % (1000 * 60)) / 1000);
    let milliseconds = ms % 1000;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(Math.floor(milliseconds / 10)).padStart(2, '0')}`;
}

function startTimer() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 10);
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        lapTimeBtn.disabled = false;
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    timerDisplay.innerHTML = formatTime(difference);
}

function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        lapTimeBtn.disabled = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    lapTimeBtn.disabled = true;
    timerDisplay.innerHTML = '00:00:00.00';
    lapTimes = [];
    lapList.innerHTML = '';
}

function recordLap() {
    if (running) {
        let lapTime = difference;
        lapTimes.push(lapTime);
        let lapItem = document.createElement('li');
        lapItem.innerText = formatTime(lapTime);
        lapList.appendChild(lapItem);
    }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
lapTimeBtn.addEventListener('click', recordLap);