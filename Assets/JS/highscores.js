let highScoresList = document.getElementById("highScoresList");

// Retrieve high scores from localStorage or initialize an empty array
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let currentScore = localStorage.getItem("score");
let initials = localStorage.getItem("initials");

// Add the current score and initials to the high scores array
if (currentScore && initials) {
  let newScore = {
    initials: initials,
    score: currentScore
  };
  highScores.push(newScore);
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

// Sort high scores in descending order
highScores.sort(function(a, b) {
  return b.score - a.score;
});

// Display high scores
highScores.forEach(function(scoreEntry) {
  let scoreItem = document.createElement("li");  
  scoreItem.textContent = scoreEntry.initials + " - " + scoreEntry.score;
  highScoresList.appendChild(scoreItem);
});

let clearHighScoresButton = document.getElementById("clearHighScoresButton");
clearHighScoresButton.addEventListener("click", clearHighScores);

function clearHighScores() {
    localStorage.removeItem("highScores");
}
