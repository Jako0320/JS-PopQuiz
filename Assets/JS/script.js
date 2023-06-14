let startButton = document.querySelector(".startButton");
let timerDisplay = document.querySelector("#timer");
let quizBox = document.querySelector("#popQuiz");
let timerCount = 60;

//Timer function
function timer() {
    timerInterval = setInterval(function () {
        timerCount--;
        timerDisplay.textContent = "Time: " + timerCount;
      
        if (timerCount <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript? ",
        answers: ["<js>", "<script>", "<javascript>", "<scripting>"],
        correctAnswer: "<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["The <head> section", "The <body> section", "Both"],
        correctAnswer: "Both"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js;>"],
        correctAnswer: "<script href='xxx.js'>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["alert('Hello World')", "alertBox('Hello World')", "msg('Hello World')", "msgBox('Hello World')"],
        correctAnswer: "alert('Hello World')"
    }
];

function quiz(questions) {    
    let choices = [];    
    let answers;
    for (var i = 0; i < questions.length; i++) {
        answers = [];

        for (var j = 0; j < questions[i].answers.length; j++) {
            let btn = document.createElement("answerButton");
            let a = document.createTextNode((j+1) + questions[i].answers[j]);
            btn.appendChild(a);
            document.body.appendChild(btn);
        }
        choices.push(

        )
    }
    timer();
}

startButton.addEventListener("click", quiz);