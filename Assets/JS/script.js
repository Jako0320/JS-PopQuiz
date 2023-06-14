let startButton = document.querySelector(".startButton");
let timerDisplay = document.getElementById("timer");
let quizBox = document.getElementById("popQuiz");
let timerCount = 60;
let currentQuestionIndex = 0;

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
  quiz();
}

let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript? ",
    choices: ["<js>", "<script>", "<javascript>", "<scripting>"],
    answer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["The <head> section", "The <body> section", "Both"],
    answer: "Both",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js;>",
    ],
    answer: "<script href='xxx.js'>",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    choices: [
      "alert('Hello World')",
      "alertBox('Hello World')",
      "msg('Hello World')",
      "msgBox('Hello World')",
    ],
    answer: "alert('Hello World')",
  },
];

function quiz() {  
  let currentQuestion = questions[currentQuestionIndex];

  let questionElement = document.createElement("h2");
  questionElement.id = "question";
  questionElement.textContent = currentQuestion.question;

  let choicesBox = document.createElement("div");
  choicesBox.id = "choices";
  currentQuestion.choices.forEach(function (choice) {
    let choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", function () {
      checkAnswer(choice, currentQuestion.answer);
    });
    choicesBox.appendChild(choiceButton);
  });

  quizBox.innerHTML = "";
  quizBox.appendChild(questionElement);
  quizBox.appendChild(choicesBox);
}

function checkAnswer(choice, answer) {
    let messageElement = document.getElementById("messageElement");
  if (choice === answer) {
    messageElement.textContent = "Correct!";
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      quiz();
    } else {
      gameOver();
    }
  } else {
    messageElement.textContent = "Wrong!";
    timerCount -= 10;
    if (timerCount < 0) {
      timerCount = 0;
    }
  }
}

function gameOver() {
  clearInterval(timerInterval);

  localStorage.setItem("score", timerCount);

  // Redirect to results page
  window.location.href = "./results.html";
}

startButton.addEventListener("click", timer);
