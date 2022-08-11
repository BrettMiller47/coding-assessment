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

var submitBtnEl = document.querySelector("#start-button");

var timeRem = 75;

// function to set the time
function setTime() {
    
}

// function to start the quiz
function startQuiz() {
    // start the timer
    setTime();
}

// // event listener for start button click 
// submitBtnEl.addEventListener("click", startQuiz)