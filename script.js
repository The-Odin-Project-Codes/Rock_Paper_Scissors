let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultDiv = document.querySelector("#result");
  const scoreDiv = document.querySelector("#score");
  const winnerDiv = document.querySelector("#winner");

  if (humanChoice === computerChoice) {
    resultDiv.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You win this round as ${humanChoice} beats ${computerChoice}!`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose this round as ${computerChoice} beats ${humanChoice}!`;
  }

  scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5) {
    winnerDiv.textContent = "Congratulations! You win the game!";
    disableButtons();
  } else if (computerScore === 5) {
    winnerDiv.textContent = "Sorry! The computer wins the game!";
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll("button").forEach(button => {
    button.disabled = true;
  });
}

document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));