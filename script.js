function computerPlay() {
    let choice = randomNumber();
    return getCPUDecisionFromNumber(choice);
}


function randomNumber() {
    return Math.floor(Math.random() * 3);
  }

function getCPUDecisionFromNumber(num)  {
    let CPUDecision;
    if (num === 0)  {
        CPUDecision = 'Rock';
        return CPUDecision;        
    } else if (num === 1)   {
        CPUDecision = 'Paper';
        return CPUDecision;
    } else CPUDecision = 'Scissor';
    return CPUDecision;
    
}


console.log(computerPlay())