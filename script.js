let result;
let playerScore = 0;
let computerScore = 0;
let playerDecision;

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

function getPlayerDecision()  {
  let decision = prompt('Rock, Paper, or Scissor');
  return playerDecision = decision.toLowerCase()
}



function playRound(playerSelection, computerSelection) {
  checkIfPlayerWins(playerSelection, computerSelection);
  checkIfComputerWins(playerSelection, computerSelection);
  checkIfTie(playerSelection, computerSelection);
  return result;
}

function checkIfPlayerWins(player, computer) {
  switch (true) {
    //next 3 conditions return true if the player wins
    case player === "rock" && computer === "scissor":
      return playerScore++;
      break;
    case player === "paper" && computer === "rock":
      return playerScore++;
      break;
    case player === "scissor" && computer === "paper":
      return playerScore++;
      break;
  }
}

function checkIfComputerWins(player, computer) {
  switch (true) {
    case player === "rock" && computer === "paper":
      return computerScore++;
      break;
    case player === "paper" && computer === "scissor":
      return computerScore++;
      break;
    case player === "scissor" && computer === "scissor":
      return computerScore++;
      break;
  }
}
function checkIfTie(player, computer) {
  switch (true) {
    case player === "rock" && computer === "rock":
      return 
      break;
    case player === "paper" && computer === "paper":
      return 
      break;
    case player === "scissor" && computer === "scissor":
      return 
      break;
  }
}

//game function - plays 5 rounds 
//will have 2 variables that will keep track of each score.
//loop the playround function for 5 rounds.
//print the score with a message explaining the results.


function game() {
    

    for (let i = 0; i < 5; i++) {
      playRound(getPlayerDecision(), computerPlay())
      console.log(i);
    }
    return `At the end of 5 rounds, your score was: ${playerScore}, and the computers score was: ${computerScore},`;      
  }

  console.log(game());

for (let i = 10; i > 0; i--) {
  
  
}