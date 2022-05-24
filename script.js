let result;
let playerScore = 0;
let computerScore = 0;
let playerDecision;
let CPUDecision;
const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissor = document.querySelector(".scissor-btn");
const output = document.querySelector(".game-results");
const resetBtn = document.querySelector(".reset-btn");

function computerPlay() {
  let choice = randomNumber();
  return getCPUDecisionFromNumber(choice);
}

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

function getCPUDecisionFromNumber(num) {  
  if (num === 0) {
    CPUDecision = "rock";
    return CPUDecision;
  } else if (num === 1) {
    CPUDecision = "paper";
    return CPUDecision;
  } else if (num === 2) CPUDecision = "scissor";
  return CPUDecision;
}

//inner functions increment score when necessary, and return a text output declaring winner
function playRound(playerSelection, computerSelection) {
  result = "";
  checkIfPlayerWins(playerSelection, computerSelection);
  checkIfComputerWins(playerSelection, computerSelection);
  checkIfTie(playerSelection, computerSelection);
  checkForGameWinner();
  return (output.textContent = result);
}

function checkIfPlayerWins(player, computer) {
  switch (true) {
    //next 3 conditions return true if the player wins
    case player === "rock" && computer === "scissor":
      playerScore++;
      return displayResults('player');
      break;
    case player === "paper" && computer === "rock":
      playerScore++;
      return displayResults('player');
      break;
    case player === "scissor" && computer === "paper":
      playerScore++;
      return displayResults('player');
      break;
  }
}

function checkIfComputerWins(player, computer) {
  switch (true) {
    case player === "rock" && computer === "paper":
       computerScore++;
      return displayResults('computer');
      break;
    case player === "paper" && computer === "scissor":
       computerScore++;
      return displayResults('computer');
      break;
    case player === "scissor" && computer === "rock":
       computerScore++;
       return displayResults('computer');
      break;
  }
}
function checkIfTie(player, computer) {
  switch (true) {
    case player === "rock" && computer === "rock":
      return displayResults('tie');
      break;
    case player === "paper" && computer === "paper":
      return displayResults('tie'); 
      break;
    case player === "scissor" && computer === "scissor":
      return displayResults('tie');
      break;
  }
}

//have a function to use to display the results of a round.
//takes the winner of the game as an argument.
//use a conditional to apply the correct phrase to the 'result' variable
//output a sentence that says who won the round, and what each players score is.

function displayResults(winner) {
  switch (winner) {
    case 'player':
      result = `The player has won this round! 
      After this current round, the scores are as follows:
      Player - ${playerScore}
      Computer - ${computerScore}
      The computer chose ${CPUDecision}`;
      return;
      break;
    case 'computer':
      result = `The computer has won this round! 
        After this current round, the scores are as follows:
        Player - ${playerScore}
        Computer - ${computerScore}
        The computer chose ${CPUDecision}`;
      return;
      break;
    case 'tie':
      result = `The round is a draw! 
        After this current round, the scores are as follows:
        Player - ${playerScore}
        Computer - ${computerScore}`;
      return;
      break;
  }
}

function resetGame()  {
  playerScore = 0;
  computerScore = 0;
  result = '';
  output.textContent = `Results`;
}

function checkForGameWinner() {
  if (playerScore > 4)  {
    result = `Game over, Congratulations. The Player has won 5 rounds!`
  }else if (computerScore > 4)  {
    result = `Game over! Computer has won 5 rounds. You've failed us all.`
  }
}


rock.addEventListener("click", function () {
  playRound("rock", computerPlay());
});

paper.addEventListener("click", function () {
  playRound("paper", computerPlay());
});

scissor.addEventListener("click", function () {
  playRound("scissor", computerPlay());
});

resetBtn.addEventListener('click', resetGame)



// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound(getPlayerDecision(), computerPlay());
//     console.log(i);
//   }
//   return `At the end of 5 rounds, your score was: ${playerScore}, and the computers score was: ${computerScore}.`;
// }
