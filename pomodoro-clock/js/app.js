var startingMinutes = 25;
var minutes = startingMinutes;
var seconds = 0;
var timer;
var alarm = new Audio();
alarm.src = "https://raw.githubusercontent.com/dannytpeck/pomodoro-app/master/alarm-drum.mp3";

$('#controls').prepend("<button id='stop'>STOP</button>")
$('#stop').hide();
$('#timer').html(padTwo(minutes) + ":" + padTwo(seconds));

function countdown() {
  if (seconds > 0) {
    seconds -= 1;
  }
  else {
    if (minutes === 0) {
      clearInterval(timer);
      alarm.play();
    }
    else {
      seconds = 59;
      minutes -= 1;
    }
  }
}

function padTwo(num) {
  return ("00" + num).substr(-2,2);
}

function updateMessage() {
  countdown();
  displayMessage();
}

function displayMessage() {
  $('#timer').html(padTwo(minutes) + ":" + padTwo(seconds));
}

function stopTimer() {
  clearInterval(timer);
  $('#stop').hide();
  $('#start').show();
  alarm.pause();
}

function startTimer() {
  timer = setInterval(updateMessage, 1000);
  $('#start').hide();
  $('#stop').show();
  //Start listening for onclick event
  $('#stop').on("click", stopTimer);  
}

$('#minus').on("click", function() {
  if (minutes > 1) {
    minutes -= 1;
    startingMinutes -= 1;
    displayMessage();    
  }
});

$('#plus').on("click", function() {
  if (minutes < 99) {
    minutes += 1;
    startingMinutes += 1;
    displayMessage();    
  }
});

$('#start').on("click", startTimer);

$('#reset').on("click", function() {
  minutes = startingMinutes;
  seconds = 0;
  displayMessage();
  stopTimer();
});