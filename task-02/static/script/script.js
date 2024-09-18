document.body.style.backgroundColor = "#1e1e1e"
document.body.style.color = "#ffffff"

let startTime, updatedTime, difference, tInterval;
let running = false;
let lapTimes = [];
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const lapButton = document.getElementById('lapButton');
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
        startButton.disabled = true;
        stopButton.disabled = false;
        lapButton.disabled = false;
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
        startButton.disabled = false;
        stopButton.disabled = true;
        lapButton.disabled = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    lapButton.disabled = true;
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

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);