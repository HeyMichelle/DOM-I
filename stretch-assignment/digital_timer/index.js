function Stopwatch(elem) {

    var time = 0;
    var interval;
    var offset;

    // interval, runs the update function, and is used to clear the watch. 

    function update() {
        if (this.isOn) {
            time += delta();
        }
        var formattedTime = timeFormatter(time);
        elem.textContent = formattedTime;
        // console.log(formattedTime);
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }
    // time that has passed

    function timeFormatter(timeInMilliseconds) {
        var time = new Date(timeInMilliseconds);
        var seconds = time.getSeconds().toString();
        var milliSeconds = time.getMilliseconds().toString();

        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        if (milliSeconds.length < 2) {
            millSeconds = '0' + milliSeconds;
        }

       return seconds + ' : ' + milliSeconds;
    }

    // .toString() to check the length
 

    this.isOn = false;

    this.start = function() {
        if (!this.isOn) {
            interval = setInterval(update.bind(this), 10);
            offset = Date.now();
            this.isOn = true;
        }
    };

    this.stop = function() {
        if(this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function() {
        time = 0;
        update();
    };
}

var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var secTen = document.getElementById('secondTens');
var secOne = document.getElementById('secondOnes');
var msHun = document.getElementById('msHundreds');
var msTen = document.getElementById('msTens');

// used these variables instead of timer, sow hat would I put into new stopwatch function?


var watch = new Stopwatch(secTen, secOne, msHun, msTen);


// var digits = document.getElementById('digits');

// var watch = new Stopwatch('digits');

toggleBtn.addEventListener('click', function() {
    if (watch.isOn) {
        watch.stop();
        toggleBtn.textContent = 'Start';
    } else {
        watch.start();
        toggleBtn.textContent = 'Stop';
    }
});

resetBtn.addEventListener('click', function() {
    watch.reset();
})