let initialsForm = document.getElementById("initialsForm");
let initialsInput = document.getElementById("initialsInput");
let finalScore = document.getElementById("finalScore");
let score = localStorage.getItem("score") || getQueryParam("score");

// Display the final score
finalScore.textContent = "Final Score: " + score;

initialsForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  let initials = initialsInput.value.trim().toUpperCase();
  
  if (initials) {    
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);      
    window.location.href = "./highscores.html";
  }
});

function getQueryParam(param) {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}