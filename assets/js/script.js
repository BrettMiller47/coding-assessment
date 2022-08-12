// --- GLOBAL VARIABLES ---
var questions = {
    "question1": {
        "question": "Pseudo -elements such as ::before and ::after are part of the DOM.",
        "options": ["True", "False"],
        "answer": "False",
        "explanation": "The DOM is built from the source HTML document alone, and the pseudo-elements are part of the CSSOM and render tree."
    },
    "Question2": {
        "question": "The tag <h1> is referred to as which of the following:",
        "options": ["element", "class", "attribute", "none of the above"],
        "answer": "True",
        "explanation": "HTML tags are elements."
    },
    "Question3": {
        "question": "The hashtag (#) symbol is used to select which attribute in css?",
        "options": ["class", "ID", "data", "style"],
        "answer": "ID",
        "explanation": "The # symbol is used for ID attributes."
    },
    "Question4": {
        "question": "In css, a period (.) is used before a word to select a...",
        "options": ["class", "ID", "data", "style"],
        "answer": "class",
        "explanation": "The . symbol is used for classes."
    }
}
var highScores = {
    "n/a": 0,
    "n/a": 0,
    "n/a": 0,
};

var rootEl = document.querySelector("#main")
var timerEl = document.querySelector("#time");
var startEl = document.querySelector("#start");
var submitEl = document.querySelector('#submit');

var timeRem = 75;


// --- FUNCTIONS ---
// function to set the time
function countdown() {
  var timeInterval = setInterval(function () {
    // if there is still time remaining
    if (timeRem > 1) {
      timerEl.textContent = "Time: " + timeRem;
      // Decrement `timeRem` by 1
      timeRem--;
    } else {
      // time has run out so set 'timeRem' textContent to show 0
      timerEl.textContent = 'Time: 0';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

// function to start the quiz
function startQuiz() {
    // start the timer (if timer runs out must stop questioning the user)
    countdown();
    // construct questions until all are answered
    displayNextQuestion(null);

}

// function to return boolean regarding quiz completion
function isAnotherQuestion(prevQuestIndex) {
    var countQuestions = Object.keys(questions).length;
    // if all questions have been answered...
    if (prevQuestIndex != countQuestions) {
        return true;
    } else {
        return false;
    }
}

// function to display next question
function displayNextQuestion(prevQuestIndex) {
    // if this is the first question displayed...
    if (prevQuestIndex === null) {
        var nextQuestIndex = 0;
    // if this is not the first question and there is another question...
    } else if (isAnotherQuestion(prevQuestIndex)) {
        var nextQuestIndex = prevQuestIndex++;
    // if no questions remain...
    } else {
        var score = timeRem;
        endQuizAndDisplayScore(score);
        return;
    }

    // display next question via dynamic html
    // create a <header> for the question and append to the root element 
    var questionEl = document.createElement("<header>")
    var questionText = questions[nextQuestIndex]["question"];
    questionEl.textContent = questionText;
    questionEl.attributes("class", "question");
    rootEl.append(questionEl);
    
    // create and append a button (to the rootEl) for each answer option
    var countOptions = object.questions[nextQuestIndex]["question"]["options"].length;
    for (var indexOptions = 0, indexOptions < countOptions, indexOptions++) {
        // create a button
        var buttonEl = document.createElement("<button>");
        var buttonText = questions[nextQuestIndex]["options"][indexOptions];
        buttonEl.textContent(buttonText);
        buttonEl.attributes("class", "col-4 btn btn-primary");
        buttonEl.attributes("type", "button");
        // create a container for the button
        var containerEl = document.createElement("<div>");
        containerEl.attributes("class", "container");
        // append the button to the container
        containerEl.append(buttonEl);
        // append the container (with button now appended) to the root element
        rootEl.append(containerEl);
    }
}   

// funtion to display the endgame screen where user initials and score can be saved
function endQuizAndDisplayScore(score) {

}

function showHighScores() {
    var leaderboardLength = 3;
    
}


// --- EVENT LISTENERS ---
// event listener for start button click
// startBtnEl.addEventListener("click", startQuiz);


// event listener for question answered
// submitEl.addEventListener("click", nextQuestion(numQuestAnswered));
