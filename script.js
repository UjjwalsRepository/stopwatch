var min = 0, sec = 0, milisec = 0, timer;
const callTimer = () => {
    milisec++;
    if (milisec < 100) {
        if (milisec === 99) {
            milisec = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
            }
        }
    }
    else {
        milisec = 0;
    }
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + milisec;
}


const startTimer = () => {
    document.getElementById("start").disabled = true;
    timer = setInterval(callTimer, 10);
}

const stopTimer = () => {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}

const resetTimer = () => {
    stopTimer();
    min = 0;
    sec = 0;
    milisec = 0;
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + milisec;
}