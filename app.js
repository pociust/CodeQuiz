// set the variables
const questions = [
  {
    title: `Which famous person was the first to have a star laid on the "Hollywood Walk of
    Fame"?:`,
    choices: [`Elizabeth Taylor`, `Charlie Chaplin`, `Stanley Kramer`, `Burt Lancaster`],
    answer: `Stanley Kramer`
  },
  {
    title: `"Katniss Everdeen" takes her sister's place in the "Hunger Games". Which district
    does she represent?:`,
    choices: [`12`, `6`, `3`, `9`],
    answer: `12`
  },
  {
    title: `In Greek mythology, who is the god of the winds and king of the mythical, floating
    island of Aiolia?`,
    choices: [`Crios`, `Kratos`, `Aeolus`, `Dinlas`],
    answer: `Aeolus`
  },
  {
    title: `What British monarch reigned for only nine days?:`,
    choices: [`George the II`, `Edward the V`, `Mari I`, `Lady Jane Grey`],
    answer: `Lady Jane Grey`
  },
  {
    title: ` Which planet in our solar system spins the fastest?:`,
    choices: [`Earth`, `Jupiter`, `Neptune`, `Mercury`],
    answer: `Jupiter`
  },
  {
    title: `How many bones are in the adult human body?:`,
    choices: [`6`, `195`, `83`, `206`],
    answer: `206`
  },
  {
    title: `When talking about a location on a boat: "Port" refers to what?:`,
    choices: [`On deck`, `Left`, `Right`, `In the back`],
    answer: `Left`
  },
  {
    title: `How many stripes does the flag of the United States have?:`,
    choices: [`50`, `13`, `14`, `9`],
    answer: `13`
  },
  {
    title: `In what year did WWI begin?:`,
    choices: [`1941`, `1919`, `1900`, `1914`],
    answer: `1914`
  },
];
let minutesDisplay = document.getElementById('minutes');
let  secondsDisplay = document.getElementById('seconds');
let timer = 89;
let activeQuestion = 0;
let choiceA = document.getElementById('choice-a');
let choiceB = document.getElementById('choice-b');
let choiceC = document.getElementById('choice-c');
let choiceD = document.getElementById('choice-d');
let theQuestion = document.getElementById('the-question');
let userScore = document.getElementById('user-score');
let gameScore = document.getElementById('gamer-scores');
let finalQuestion = questions.length - 1;
let userName = document.getElementById('user-name');
let score = 0;
let totalScore = 0;
let newTimeOut = 0;

//reset function
function reset() {
  score = 0;
 totalScore = 0;
 newTimeOut = 0;
};

//timer
function startTimer() {
  newTimeOut = setInterval(
  function () {
    minutes = parseInt(timer / 60);
    seconds = parseInt (timer % 60);
    minutesDisplay.innerText = '0' + minutes +':'; 
    if (seconds < 10) {
      seconds = '0' + seconds;
    };
    secondsDisplay.innerText = seconds;
    timer --;
    if (timer <= 0) {
      clearInterval(newTimeOut);
      showScore();
    }
  }, 1000);
};

//hide toggler
function isVisible(className, visible) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    if (visible){
    elements[i].hidden = false;
    } else {
      elements[i].hidden = true;
    }
  }
};

//calculates total score
function showScore (){
  isVisible('stage-1', true);
  isVisible('stage-2', false);
  isVisible('stage-3', true);
  totalScore = score + timer;
  userScore.innerText = `Final Score: ${totalScore}`;
  };

  //function to switch questions
function swapQuestion() {
  activeQuestion = activeQuestion + 1;
  theQuestion.innerText = `${activeQuestion + 1}. ${questions[activeQuestion].title}`;
  choiceA.innerText = `A: ${questions[activeQuestion].choices[0]}`;
  choiceB.innerText = `B: ${questions[activeQuestion].choices[1]}`;
  choiceC.innerText = `C: ${questions[activeQuestion].choices[2]}`;
  choiceD.innerText = `D: ${questions[activeQuestion].choices[3]}`;
  console.log(score);
};

//check answers
function checkAnswer(event) {
  if (event.target.innerText.substr(3) === questions[activeQuestion].answer) {
    score = score + 1;
  } else {
    score = score - 5;
  }
  if (activeQuestion < finalQuestion) {
    swapQuestion();
  } else {
    clearInterval(newTimeOut);
    showScore();
}
  event.target.blur();

};

//click answers 

choiceA.addEventListener('click', function(){ checkAnswer(event)});
choiceB.addEventListener('click', function(){ checkAnswer(event)});
choiceC.addEventListener('click', function(){ checkAnswer(event)});
choiceD.addEventListener('click', function(){ checkAnswer(event)});


//creating the scoreboard
function scoreBoard(previousScore) {
  isVisible('stage-3', false);
  gameScore.innerHTML = ''
  for (i=0; i < previousScore.length; i++) {
    let li = document.createElement('li');
    let gamerTags = previousScore[i].username;
    let gamerPoints = previousScore[i].totalScore;
    li.textContent = `${gamerTags} total score ${gamerPoints}`;
    gameScore.appendChild(li);
  } 
  isVisible('stage-4', true);

};

  
//start game

document.getElementById('start-game').addEventListener('click', function playGame(){
  reset();
  timer = 89;
  minutesDisplay.innerText = '01:';
  secondsDisplay.innerText = '30';
  startTimer();
  isVisible('stage-2', true);
  isVisible('stage-1', false);
  activeQuestion = -1;
  swapQuestion();
  isVisible('stage-4', false);
  isVisible('stage-0', false);
});
  
//go to high scores
document.getElementById('high-score').addEventListener('click', function () {
  let newName = userName.value;
  let newScore = {'username': newName, 'totalScore': totalScore};
  let previousScore = JSON.parse(localStorage.getItem('scoreboard'));
  if (previousScore) {
    previousScore = previousScore.concat(newScore);
  } else {
    previousScore = [newScore];
  }
  localStorage.setItem("scoreboard", JSON.stringify(previousScore));
  scoreBoard(previousScore);  
});