// making the timer
let minutesDisplay = document.getElementById('minutes');
let  secondsDisplay = document.getElementById('seconds');
let startButton = document.getElementById('start-game');
let timer = 90;
let activeQuestion = 0;
let choiceA = document.getElementById('choice-a');
let choiceB = document.getElementById('choice-b');
let choiceC = document.getElementById('choice-c');
let choiceD = document.getElementById('choice-d');
let theQuestion = document.getElementById('the-question');
let newGame = document.getElementById('questions');
const questions = [
  {
    title: "1Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "strings"
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
    answer: "string"
  },
  {
    title: "5Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "number"
  },
];

function swapQuestion() {
  activeQuestion = activeQuestion + 1;
  theQuestion.innerText = `${activeQuestion + 1}. ${questions[activeQuestion].title}`;
  choiceA.innerText = `A: ${questions[activeQuestion].choices[0]}`;
  choiceB.innerText = `B: ${questions[activeQuestion].choices[1]}`;
  choiceC.innerText = `C: ${questions[activeQuestion].choices[2]}`;
  choiceD.innerText = `D: ${questions[activeQuestion].choices[3]}`;
};

function checkAnswer(event) {
  if (event.target.innerText.substr(3) === questions[activeQuestion].answer) {
    console.log('you got it partner!')
    
  } else {
    console.log('you suck')
  }
  swapQuestion()
};
choiceA.addEventListener('click', function(){ checkAnswer(event)});
choiceB.addEventListener('click', function(){ checkAnswer(event)});
choiceC.addEventListener('click', function(){ checkAnswer(event)});
choiceD.addEventListener('click', function(){ checkAnswer(event)});




startButton.addEventListener('click', function playGame(){
  startTimer();
  newGame.hidden = false;
  startButton.hidden = true;
  activeQuestion = -1;
  swapQuestion();





});


function startTimer() {
  minutes = parseInt(timer / 60);
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

  