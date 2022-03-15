window.onload = function() {

    var hour = 00;
    var minute = 00;
    var second = 00;
    var milisecond = 00;
    var OutputHour = document.getElementById('hour');
    var OutputMinute = document.getElementById('minute');
    var OutputSecond = document.getElementById('second');
    var OutputMilisecond = document.getElementById('milliseconds');
    var ButtonStart = document.getElementById('btn-start');
    var ButtonClear = document.getElementById('btn-clear');
    var ButtonStop = document.getElementById('btn-stop');
    var Interval;

    ButtonStart.addEventListener("click", () => {
        clearInterval(Interval);
        Interval = setInterval(startTime, 10);
    })
    ButtonStop.addEventListener("click", () => {
        clearInterval(Interval);
    })

    ButtonClear.addEventListener("click", () => {
        clearInterval(Interval);
        minute = "00";
        second = "00";
        milisecond = "00";
        OutputMinute.innerHTML = minute;
        OutputSecond.innerHTML = second;
        OutputMilisecond.innerHTML = milisecond;
    })

    function startTime() {
        milisecond++;
        if (milisecond <= 9) {
            OutputMilisecond.innerHTML = "0" + milisecond;
        }
        if (milisecond > 9) {
            OutputMilisecond.innerHTML = milisecond;
        }
        if (milisecond > 99) {
            second++;
            OutputSecond.innerHTML = "0" + second;
            milisecond = 0;
            OutputMilisecond.innerHTML = "0" + 0;
        }
        if (second > 9) {
            OutputSecond.innerHTML = second;
        }
        if (second > 60) {
            minute++;
            OutputMinute.innerHTML = "0" + minute;
            second = 0;
            OutputSecond.innerHTML = "0" + 0;
        }
        if (minute > 9) {
            OutputMinute.innerHTML = minute;
        }
        if (minute > 60) {
            hour++;
            OutputHour.innerHTML = "0" + hour;
            minute = 0;
            OutputMinute.innerHTML = minute;
        }
    }
}