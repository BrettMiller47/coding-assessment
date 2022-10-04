const questions = [
    {
        "question": "The tag <h1> is referred to as which of the following:",
        "options": ["element", "class", "attribute", "none of the above"],
        "answer": "element",
        "explanation": "HTML tags are elements."
    },
    {
        "question": "The hashtag (#) symbol is used to select which attribute in css?",
        "options": ["class", "ID", "data", "style"],
        "answer": "ID",
        "explanation": "The # symbol is used for ID attributes."
    },
    {
        "question": "In css, a period (.) is used before a word to select a...",
        "options": ["class", "ID", "data", "style"],
        "answer": "class",
        "explanation": "The . symbol is used for classes."
    }
]

const timerEl = document.querySelector("#time");

const startScreenEl = document.querySelector('#startScreen');
const startEl = document.querySelector("#start");

const questAndOptionsEl = document.querySelector('#questAndOptions');
const questionEl = document.querySelector('#question');
const option1BtnEl = document.querySelector('#option1');
const option2BtnEl = document.querySelector('#option2');
const option3BtnEl = document.querySelector('#option3');
const option4BtnEl = document.querySelector('#option4');

const scoreEl = document.querySelector('#score');
const yourScoreContainerEl = document.querySelector('#yourScoreContainer');
const yourScoreValEl = document.querySelector('#yourScoreVal');

const highScoreBtnEl = document.querySelector('#highScoreBtn');
const highScoreContainerEl = document.querySelector('#highScoreContainer');
const highScoreValEl = document.querySelector('#highScoreVal');

var timeRem = 75;
var currQuestIdx = 0;
var score = 0;
var highScore = 0;

// --- FUNCTIONS ---
// !function to set the time
function setTime() {
    // Sets interval in variable
    let timerInterval = setInterval(function() {
        timeRem--;
        timerEl.textContent = "Time " + timeRem;

        if(timeRem === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            endQuiz();
            }
    }, 1000);
}

// !function to start the quiz
function startQuiz() {
    
    // declare the score variable
    var score = 0;

    // hide the startScreen and highScoreContainerEl
    startScreenEl.style.display = "none";
    highScoreContainerEl.style.display = "none";
    
    // TODO: start the timer (if timer runs out must stop questioning the user)
    // setTime();   
    
    getNextQuestOrEndQuiz(currQuestIdx);
}

// function to return boolean regarding quiz completion
function getNextQuestOrEndQuiz(idx) {      
    if (idx < questions.length) {
        // change textContent for question & option fields
        questionEl.textContent = questions[idx].question;
        option1BtnEl.textContent = questions[idx].options[0];
        option2BtnEl.textContent = questions[idx].options[1];
        option3BtnEl.textContent = questions[idx].options[2];
        option4BtnEl.textContent = questions[idx].options[3];
        // display the questions and options
        questAndOptionsEl.style.display = "";    
    } else {
        endQuiz()
    }    
}

// function to evaluate the answer and proceed to next question
function evaluateAnswer(e) {
    let answer = e.target.textContent;
    let correctAnswer = questions[currQuestIdx].answer 
    
    if (answer == correctAnswer) {
        score++;
    }
    // proceed to the next question or end the quiz if no questions remain
    currQuestIdx++;
    getNextQuestOrEndQuiz(currQuestIdx);
    timeRem = 75;
}

function endQuiz() {
    
    // Show results
    questAndOptionsEl.style.display = "none";
    highScoreContainerEl.style.display = "none";
    yourScoreValEl.textContent = score;
    yourScoreContainerEl.style.display = "";
    startScreenEl.style.display = "";   

    // update highScore
    if (highScore < score) {
        highScore = score;
    }
}

// function to show high score
function showHighScore(event) {
    // reset any variables that may need resetting
    timeRem = 75;
    score = 0;
    currQuestIdx = 0;
    
    // hide other elements
    questAndOptionsEl.style.display = "none";
    // show the startScreenEl and highScoreContainerEl
    startScreenEl.style.display = "";
    highScoreValEl.textContent = highScore;
    highScoreContainerEl.style.display = "";
}

// event listener for 'View High Score' click 
highScoreBtnEl.addEventListener("click", showHighScore);

// event listener for start button click
startEl.addEventListener("click", startQuiz);

// event listeners for answer option clicks
option1BtnEl.addEventListener("click", evaluateAnswer);
option2BtnEl.addEventListener("click", evaluateAnswer);
option3BtnEl.addEventListener("click", evaluateAnswer);
option4BtnEl.addEventListener("click", evaluateAnswer);
