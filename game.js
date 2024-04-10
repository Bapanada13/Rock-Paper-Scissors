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

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i+1} Fight!`);
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let result = playRound(playerChoice,computerChoice);
    if (result.split(" ")[1] == "Win!") {
      playerScore ++;
    }
    else if (result.split(" ")[1] == "Lose!") {
      computerScore ++;
    }
    else {
      computerScore += 0.5;
      playerScore += 0.5;
    }
    console.log(`${result} \n You ${playerScore} - ${computerScore} Computer`);
  }
  if (playerScore == computerScore) alert("It's a Draw!");
  else if (playerScore > computerScore) alert("You Win!");
  else alert("You Lose!");
}

playGame();