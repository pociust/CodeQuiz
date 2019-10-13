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
    title: `Which famous person was the first to have a star laid on the "Hollywood Walk of
    Fame"?:`,
    choices: [`Elizabeth Taylor`, `Charlie Chaplin`, `Stanley Kramer`, `Burt Lancaster`],
    answer: `Stanley Kramer`
  },
  {
    title: `Which famous person was the first to have a star laid on the "Hollywood Walk of
    Fame"?:`,
    choices: [`Elizabeth Taylor`, `Charlie Chaplin`, `Stanley Kramer`, `Burt Lancaster`],
    answer: `Stanley Kramer`
  },
  {
    title: `Which famous person was the first to have a star laid on the "Hollywood Walk of
    Fame"?:`,
    choices: [`Elizabeth Taylor`, `Charlie Chaplin`, `Stanley Kramer`, `Burt Lancaster`],
    answer: `Stanley Kramer`
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
let scoreHistory = [];
let score = 0;
let totalScore = 0;
let newTimeOut = 0;
// making the questions


function startTimer() {
// if (timerStart === true)
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
    
    console.log(timer);
  }, 1000);
};

function toggleHidden(className) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].hidden = !elements[i].hidden;
  }
};


function showScore (){
  toggleHidden('stage-1');
  toggleHidden('stage-2');
  toggleHidden('stage-3');
  totalScore = score + timer;
  userScore.innerText = `Final Score: ${totalScore}`;
  // scoreBoard();
  };

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
    score = score + 1;
    
  } else {
    score = score - 5;
  }
  console.log(score);
  if (activeQuestion < finalQuestion) {
    swapQuestion();
  } else {
    clearInterval(newTimeOut);
    showScore();
    console.log('total' , totalScore);
}

event.target.blur();

};

choiceA.addEventListener('click', function(){ checkAnswer(event)});
choiceB.addEventListener('click', function(){ checkAnswer(event)});
choiceC.addEventListener('click', function(){ checkAnswer(event)});
choiceD.addEventListener('click', function(){ checkAnswer(event)});


function scoreBoard(previousScore) {
  toggleHidden('stage-3');
  for (i=0; i < previousScore.length; i++) {
    scoreHistory = previousScore[i];
    let li = document.createElement('li');
    toggleHidden('stage-4');
    let gamerTags = previousScore[i].username;
    let gamerPoints = previousScore[i].totalScore;
    li.textContent = `${gamerTags} total score ${gamerPoints}`;
    console.log(previousScore);
    gameScore.appendChild(li);
  } 
};



document.getElementById('start-game').addEventListener('click', function playGame(){
 
  timer = 89;
  minutesDisplay.innerText = '01:';
  secondsDisplay.innerText = '30';
  startTimer();
  toggleHidden('stage-2');
  toggleHidden('stage-1');
  activeQuestion = -1;
  swapQuestion();
  if (toggleHidden('stage-4' === false)){
    toggleHidden('stage-4');
    };
});
  
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

