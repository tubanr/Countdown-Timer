var timer;
var paused = false;
function handler() {
    //taking user input
    var time1 = document.getElementById('hms').value;
    //splitting it to seperate variables
    var pieces = time1.split(":");

    var hours = pieces[0];
    var minutes = pieces[1];
    var seconds = pieces[2];

    var time = {
        hours: hours * 1,
        minutes: minutes * 1,
        seconds: seconds * 1
    };


    // Save the interval's handle to `timer`
     timer = setInterval(countdown, 1000);
     userInput = document.getElementById('hms').value;

     if (userInput.length === 0) {
        alert("Please enter a value");
    }
  

    function countdown() {
        var container = document.getElementById('count');
      
        if (timer && userInput.length !== 0){
            document.getElementById("dl").disabled = true;
        }

        if (time.seconds > 0  && userInput.length !== 0) {
            time.seconds--;
        }
        else {
            if (time.minutes > 0  && userInput.length !== 0) {
                time.minutes--;
                time.seconds = 60;
            }
            else if(userInput.length !== 0){
                time.minutes = 60;
                time.seconds = 60;
                time.hours--;
            }
        }

        if (time.hours >= 0  && userInput.length !== 0) {
            container.innerHTML = 'Please wait <b>' + time.hours + '</b> hours, <b>' + time.minutes + '</b> minutes, <b>' + time.seconds + '</b> seconds';
        }
        else if ((time.hours >= 0 || time.minutes > 0 || time.seconds > 0) && userInput.length !== 0  )
         {
            container.innerHTML = 'Time over';
            play_single_sound();
            clearInterval(timer);
        }
    }
} 

    function play_single_sound() {
        document.getElementById('audiotag1').play();
    }
    function pause(){

        clearInterval(timer);
        document.getElementById("dl").disabled = false;
        interval = undefined;

    
    }
    function repeat(){
        location.reload();
    }
