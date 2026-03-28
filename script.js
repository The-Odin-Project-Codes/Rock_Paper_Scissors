let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.random();

    if (random < 0.33){
        return "rock";
    }else if (random < 0.66){
        return "paper";
    }else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
if (humanChoice === computerChoice){
    console.log("It's a tie!");
}else if(
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ){
    humanScore++;
    console.log(`You win this round as ${humanChoice} beats ${computerChoice}!`);
  }else{
    computerScore++;
    console.log(`You lose this round as ${computerChoice} beats ${humanChoice}!`); 
  }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();

