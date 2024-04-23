function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num == 0) return "Rock";
  else if (num == 1) return "Paper";
  else return "Scissors";
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock Paper Scissors Shoot!");
  while (playerChoice.toUpperCase() != "ROCK" && playerChoice.toUpperCase() != "PAPER" && playerChoice.toUpperCase() != "SCISSORS") {
    playerChoice = prompt("Invalid input, please choose between Rock, Paper and Scissors")
  }
  return playerChoice[0].toUpperCase() + playerChoice.slice(1,);
}

function playRound(playerChoice,computerChoice) {
  let result;
  if (playerChoice == computerChoice)
    result = "Draw!";
  else if (playerChoice == "Rock")
    computerChoice == "Paper" ? result = "You Lose!" : result = "You Win!";
  else if (playerChoice == "Paper")
    computerChoice == "Scissors" ? result = "You Lose!" : result = "You Win!";
  else computerChoice == "Rock" ? result = "You Lose!" : result = "You Win!";
  if (result == "Draw!") return result += ` ${playerChoice} equals ${computerChoice}`;
  return result == "You Win!" ? result += ` ${playerChoice} beats ${computerChoice}` : result += ` ${computerChoice} beats ${playerChoice}`;
}

function x() {
  let res = playRound(this.textContent,getComputerChoice());
  announcement.textContent = res;
  if (res.split(" ")[1] == "Win!") {
    playerScore ++;
  }
  else if (res.split(" ")[1] == "Lose!") {
    computerScore ++;
  }
  else {
    computerScore += 0.5;
    playerScore += 0.5;
  }
  scoreDisplay.textContent = `${playerScore} ${computerScore}`;
  if (playerScore + computerScore === 5) {
    const h1 = document.querySelector("h1");
    h1.textContent = "Game Over. ";
    if (playerScore == computerScore) h1.textContent += "It's a Draw!";
    else if (playerScore > computerScore) h1.textContent += "You Win!";
    else h1.textContent += "You Lose!";
    xD();
  }
}

function xD(){
  buttons.forEach((button) => {
    button.removeEventListener("click", x);
  });
}

let playerScore = 0;
let computerScore = 0;
const scoreDisplay = document.querySelector("span");
const announcement = document.createElement("p");
const body = document.querySelector("body");
body.appendChild(announcement);
buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", x);
});
