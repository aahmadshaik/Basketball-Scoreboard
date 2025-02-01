let guestScore = document.getElementById("guestScore");
let guestCount = 0;
function plusOneGuest() {
  guestCount++;
  guestScore.textContent = guestCount;

  console.log("+1 button clicked");
}

function plusTwoGuest() {
  guestCount = guestCount + 2;
  guestScore.textContent = guestCount;
  console.log("+2 button clicked");
}

function plusThreeGuest() {
  guestCount = guestCount + 3;
  guestScore.textContent = guestCount;
  console.log("+3 button clicked");
}

function resetGuest() {
  guestCount = 0;
  guestScore.textContent = guestCount;
}
