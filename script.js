let result;
let playerScore = 0;
let computerScore = 0;
let playerDecision;
const rock = document.querySelector('.rock-btn');
const paper = document.querySelector('.paper-btn');
const scissor = document.querySelector('.scissor-btn');

console.log(rock, paper, scissor);

function computerPlay() {
  let choice = randomNumber();
  return getCPUDecisionFromNumber(choice);
}

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

function getCPUDecisionFromNumber(num) {
  let CPUDecision;
  if (num === 0) {
    CPUDecision = "rock";
    return CPUDecision;
  } else if (num === 1) {
    CPUDecision = "paper";
    return CPUDecision;
  } else CPUDecision = "scissor";
  return CPUDecision;
}

function getPlayerDecision() {
  let decision = prompt("Rock, Paper, or Scissor");
  return (playerDecision = decision.toLowerCase());
}
//inner functions increment score when necessary, and return a text output declaring winner
function playRound(playerSelection, computerSelection) {
  result = '';
  checkIfPlayerWins(playerSelection, computerSelection);
  checkIfComputerWins(playerSelection, computerSelection);
  checkIfTie(playerSelection, computerSelection);
  return result;
}

function checkIfPlayerWins(player, computer) {
  switch (true) {
    //next 3 conditions return true if the player wins
    case player === "rock" && computer === "scissor":
      result = 'player wins'
      return playerScore++;
      break;
    case player === "paper" && computer === "rock":
      result = 'player wins'
      return playerScore++;
      break;
    case player === "scissor" && computer === "paper":
      result = 'player wins'
      return playerScore++;
      break;
  }
}

function checkIfComputerWins(player, computer) {
  switch (true) {
    case player === "rock" && computer === "paper":
      result = 'computer wins'
      return computerScore++;
      break;
    case player === "paper" && computer === "scissor":
      result = 'computer wins'
      return computerScore++;
      break;
    case player === "scissor" && computer === "scissor":
      result = 'computer wins'
      return computerScore++;
      break;
  }
}
function checkIfTie(player, computer) {
  switch (true) {
    case player === "rock" && computer === "rock":
      result = `it's a tie`
      return;
      break;
    case player === "paper" && computer === "paper":
      result = `it's a tie`
      return;
      break;
    case player === "scissor" && computer === "scissor":
      result = `it's a tie`
      return;
      break;
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound(getPlayerDecision(), computerPlay());
//     console.log(i);
//   }
//   return `At the end of 5 rounds, your score was: ${playerScore}, and the computers score was: ${computerScore}.`;
// }
