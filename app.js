// making the timer
let minutesDisplay = document.getElementById('minutes');
let  secondsDisplay = document.getElementById('seconds');
let startButton = document.getElementById('start-game');
let timer = 90;
const questions = [
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

let newGame = document.getElementById('questions');


startButton.addEventListener('click', function playGame(){
  startTimer();
  newGame.hidden = false;
  startButton.hidden = true;
  let activeQuestion = 0;





});


function startTimer() {
  minutes = parseInt(timer / 60);
  console.log(minutes);
  seconds = parseInt (timer % 60);

  minutesDisplay.innerText = '0' + minutes +':'; 

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  secondsDisplay.innerText = seconds;
  timer --;

  setTimeout(function() {
    startTimer();
  }, 1000);




  // if (timer === 0) {
  //   alert('game over man!');
  //   timer = 90;
  // }
  // return minutes + ':' + seconds;

};











// making the questions

  