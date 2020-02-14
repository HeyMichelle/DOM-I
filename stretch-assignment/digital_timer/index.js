// function addBtnDiv() {

//     // create div with classname
//     var buttonDiv = document.createElement("div");

//     buttonDiv.className = "buttons";


//     // use a fragment for the buttons?
//     var buttonFrag = document.createDocumentFragment();

//     buttonFrag.appendChild(btnItems);

//     btnItems.appendChild(btn1);
//     btnItems.appendChild(btn2);
 
//     // create button 1 and 2 with id and append to div
//     var btn1 = document.createElement("button"); 
//     btn.id = 'toggle';
    
//     // create button 2 with id and append to div
//     var btn2 = document.createElement("button");
//     btn.id = 'reset';
    

//     // append div to the body in the dom
//     document.body.appendChild(buttonDiv);
// }



function Stopwatch(elem) {

    var time = 0;
    var interval;
    var offset;

    // interval, run update function, clear watch. 

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
        var milliSeconds = time.getMilliseconds().toFixed(2).toString();

        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        if (milliSeconds.length < 2) {
            milliSeconds = '0' + milliSeconds;
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

var secTen = document.getElementById('secondTens');
var secOne = document.getElementById('secondOnes');
var msHun = document.getElementById('msHundreds');
var msTen = document.getElementById('msTens');

var watch = new Stopwatch(secTen, secOne, msHun, msTen);


// var digits = document.getElementsByClassName('digit');

// var watch = new Stopwatch('digits');


// buttons for start/stop and reset
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

function start() {
    watch.start();
        toggleBtn.textContent = 'Stop';
}

function stop() {
    watch.stop();
        toggleBtn.textContent = 'Start';
}



toggleBtn.addEventListener('click', function() {
    (watch.isOn) ? stop() : start();
});

resetBtn.addEventListener('click', function() {
    watch.reset();
})