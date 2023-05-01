const guessedNr = document.getElementById("guessed");
const field = document.getElementById("fillNr").value;
const check = document.getElementById("check");
const hint = document.getElementById("result");
const reset = document.getElementById("again");
const container = document.getElementById("container");
let score = document.getElementById("score");

let randNr = Math.floor(Math.random() * 10) + 1;
score.textContent = 5;
function game() {
  const field = Number(document.getElementById("fillNr").value);
  if (field < randNr) {
    document.getElementById("result").innerHTML = "TOO LOW!";
    Number(score.innerHTML--);
    if (score.innerHTML <= 0) {
      document.getElementById("result").innerHTML = "YOU LOST THE GAME!";
    }
  }
  if (field == randNr) {
    document.getElementById("result").innerHTML = "YOU WON THE GAME!";
    score.textContent++;
  }
  if (field > randNr) {
    document.getElementById("result").innerHTML = "TOO HIGH!";
    Number(score.innerHTML--);
  }
}

check.addEventListener("click", (e) => {
  game();
  
});
