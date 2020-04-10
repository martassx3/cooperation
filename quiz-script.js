/**
 * Created by JACKIERIEL on 24-Oct-18.
 */
//import questions from './question.js'
//Variable declartions
var currentQuestion = 0;
var scoreteam1 = 0;
var scoreteam2 = 0;
var nextButton = document.getElementsByClassName('next-btn');
var chosen = true;
var imga = document.createElement("img");
imga.src = "facebook.png";
var imgb = document.createElement("img");
imgb.src = "insta.png";
var imgc = document.createElement("img");
imgc.src = "twitter.png";
var imgd = document.createElement("img");
imgd.src = "snapchat.png";

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};


const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;
//console.log(nextButton.textContent="testing");


// This load the questions to the div in the html
function startQuestion(){
    loadQuestion(0);
    startTimer();
    var asrc = document.getElementById("a");
    var bsrc = document.getElementById("b");
    var csrc = document.getElementById("c");
    var dsrc = document.getElementById("d");
    asrc.appendChild(imga);
    bsrc.appendChild(imgb);
    csrc.appendChild(imgc);
    dsrc.appendChild(imgd);
}



function loadQuestion(questionIndex)
{   
    startagain();

    startTimer();
    var questionEl = document.getElementById('question');

    var opt1 = document.getElementById('opt1');
    var opt2 = document.getElementById('opt2');
    var opt3 = document.getElementById('opt3');
    var opt4 = document.getElementById('opt4');
    var resultCont = document.getElementById('result');
    var progressbar = document.getElementById('progressbar');
    var progressbar2 = document.getElementById('progressbar2');
      

    if(questionEl){
        var q = questions[questionIndex];
        // questionEl.textContent = "("+(questionIndex + 1) +") . " + q.question;
        questionEl.textContent =  q.question;
        opt1.textContent = q.option1;
        opt2.textContent = q.option2;
        opt3.textContent = q.option3;
        opt4.textContent = q.option4;
        progressbar.value = scoreteam1;
        progressbar2.value = scoreteam2;
    }

};

function loadNextQuestion()
{
    var totQuestion = questions.length;
    var selectedOption = document.querySelector('input[type = radio]:checked');
    if(!selectedOption)
    {
        alert('Please choose your answer!');
        return;
    }

    //console.log(selectedOption.value);
    var answer = selectedOption.value;

    if (chosen == true){

        if(answer == "A"){
            var asrc = document.getElementById("a");
            var bsrc = document.getElementById("b");
            var csrc = document.getElementById("c");
            var dsrc = document.getElementById("d");

            asrc.removeChild(imga);
            bsrc.removeChild(imgb);
            csrc.removeChild(imgc);
            dsrc.removeChild(imgd);
            chosen = false;
            currentQuestion = currentQuestion+1;
             //Reset default
            selectedOption.checked = false;
            

        } else if(answer == "B"){
            var asrc = document.getElementById("a");
            var bsrc = document.getElementById("b");
            var csrc = document.getElementById("c");
            var dsrc = document.getElementById("d");

            asrc.removeChild(imga);
            bsrc.removeChild(imgb);
            csrc.removeChild(imgc);
            dsrc.removeChild(imgd);
            chosen = false;
            currentQuestion = currentQuestion + 2;
            selectedOption.checked = false;
            

        }else if(answer == "C"){
            var asrc = document.getElementById("a");
            var bsrc = document.getElementById("b");
            var csrc = document.getElementById("c");
            var dsrc = document.getElementById("d");

            asrc.removeChild(imga);
            bsrc.removeChild(imgb);
            csrc.removeChild(imgc);
            dsrc.removeChild(imgd);
            chosen = false;
            currentQuestion = currentQuestion + 3;
            selectedOption.checked = false;
            
        }else if(answer == "D"){
            var asrc = document.getElementById("a");
            var bsrc = document.getElementById("b");
            var csrc = document.getElementById("c");
            var dsrc = document.getElementById("d");

            asrc.removeChild(imga);
            bsrc.removeChild(imgb);
            csrc.removeChild(imgc);
            dsrc.removeChild(imgd);

            chosen = false;
            currentQuestion = currentQuestion+4;
            selectedOption.checked = false;
        }

    }
    else{

        if(questions[currentQuestion].answer == answer)
        {
            
            if (currentQuestion == 1){
                alert('Correct! Reflection:'); //Reflection facebook
                scoreteam1 +=10;
            }else  if (currentQuestion == 2){
                alert('Correct! Reflection:'); //Reflection insta
                scoreteam1 +=10;
            }else  if (currentQuestion == 3){
                alert('Correct! Reflection:'); //Reflection twitter
                scoreteam1 +=10;
            }else if (currentQuestion == 4){
                alert('Correct! Reflection:'); //Relfection snapchat
                scoreteam1 +=10;
            }else  if (currentQuestion == 6){
                alert('Correct! Reflection:'); //Reflection insta
                scoreteam2 +=10;
            }else  if (currentQuestion == 7){
                alert('Correct! Reflection:'); //Reflection twitter
                scoreteam2 +=10;
            }else if (currentQuestion == 8){
                alert('Correct! Reflection:'); //Relfection snapchat
                scoreteam2 +=10;
            }else if (currentQuestion == 9){
                alert('Correct! Reflection:'); //Relfection snapchat
                scoreteam2 +=10;
            }
        }
        else
        {
            alert('Wrong! Correct answer is : ' + (questions[currentQuestion].answer) );
        
        }

        chosen = false;
        //Reset default
        selectedOption.checked = false;
        
        if (currentQuestion<5){
            currentQuestion = 5;
        }else if (currentQuestion> 5 && currentQuestion<10){
            currentQuestion = 10;
        }else{
        currentQuestion++; // Load next question
        }
        // if last question reached
        if(currentQuestion == totQuestion - 1)
        {
            nextButton.textContent = 'Finished';
        }

        // Display total score if questions' finished
        if(currentQuestion == totQuestion)
        {
            var resultCont = document.getElementById('result');
            var container = document.getElementById('quizContainer');
            var restartButton = document.getElementById('gotoHome');
            
            container.style.display = 'none';
            resultCont.style.display = 'block';
            restartButton.style.display = 'block';
            resultCont.textContent = 'Your Score is : ' + score + ' Points';    
            callUfuk();
        }

        
    }
    if (currentQuestion == 5){
        chosen = true;
    var asrc = document.getElementById("a");
    var bsrc = document.getElementById("b");
    var csrc = document.getElementById("c");
    var dsrc = document.getElementById("d");
    asrc.appendChild(imga);
    bsrc.appendChild(imgb);
    csrc.appendChild(imgc);
    dsrc.appendChild(imgd);
    }
    loadQuestion(currentQuestion);
};


// This is used to display the total point if the user fail before reaching last question
function scores()
{
    var resultCont = document.getElementById('result');
        var container = document.getElementById('quizContainer');
        var restartButton = document.getElementById('gotoHome');
        
        container.style.display = 'none';
        resultCont.style.display = 'block';
        restartButton.style.display = 'block';
        resultCont.textContent = 'Your Score is : ' + score + ' Points';    
}


// Display home button
function ufuk()
{

    var homeContainer = document.getElementById('gotoHome').value;
    // window.alert(homeContainer);
    homeContainer.style.display  =  'block';
    homeContainer.textContent =  'score';

}

function callUfuk()
{
    ufuk();
    var restartButton = document.getElementById('gotoHome');
    restartButton.style.display = 'none';
}


// This function redirect to home page after the quiz has been completed
 function newLocation() {
    window.location="index.html";
} 


// THis call the reload function
function home(){
    newLocation();
}


function startagain(){
    clearInterval(timerInterval);
    timePassed = 0;
    timeLeft = TIME_LIMIT;
}

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}





