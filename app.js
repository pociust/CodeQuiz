// making the timer
var minutesDisplay = document.getElementById('minutes');
var secondsDisplay = document.getElementById('seconds');



var timer = 90;
var minutes = 0;
var seconds = 0;

document.getElementById('start-game').addEventListener('click', function startTimer() {
  minutes = parseInt(timer / 60);
  seconds = parseInt (timer % 60);
  
  minutesDisplay.innerHTML = minutes.toString();
  secondsDisplay.innerHTML = seconds.toString();
  timer --;
  setTimeout(function() {
    startTimer();
  }, 1000);

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }
});


// making the questions
var questions = [
  {
    title: "1Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "2Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "3Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "4Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "5Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
];
  