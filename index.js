window.onload = function() {

    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSecs = document.getElementById("seconds");
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var resetButton = document.getElementById("reset");
    var Interval;

    startButton.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    stopButton.onclick = function() {
        clearInterval(Interval);
    }

    resetButton.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSecs.innerHTML = seconds;
        }

        function startTimer() {
            tens++;

            if (tens <= 9){
                appendTens.innerHTML = "0" + tens;
            }

            if (tens > 9){
                appendTens.innerHTML = tens;
            }

            if (tens > 99) {
                console.log("seconds");
                seconds++;
                appendSecs.innerHTML = "0" + seconds;
                tens = 0;
                appendTens.innerHTML = "0" + 0;
            }

            if (seconds > 9 ){
                appendSecs.innerHTML = seconds;
            }
        }
}