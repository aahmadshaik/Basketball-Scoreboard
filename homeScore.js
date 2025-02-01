let homeScore = document.getElementById("homeScore");
let homeCount = 0;
function plusOneHome() {
  homeCount++;
  homeScore.textContent = homeCount;

  console.log("+1 button clicked");
}

function plusTwoHome() {
  homeCount = homeCount + 2;
  homeScore.textContent = homeCount;
  console.log("+2 button clicked");
}

function plusThreeHome() {
  homeCount = homeCount + 3;
  homeScore.textContent = homeCount;
  console.log("+3 button clicked");
}

function resetHome() {
  homeCount = 0;
  homeScore.textContent = homeCount;
}
