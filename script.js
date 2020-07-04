let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    let max = 9;
    return Math.floor(Math.random()*Math.floor(max));
}

function compareGuesses(human, computer, secret) {
    //let humanDiff = Math.abs(human - secret);
    let computerDiff = Math.abs(computer - secret);
    let humanDiff = getAbsoluteDistance(human, secret);
    if (human < 0 || human > 9) {
        alert("Please, only numbers between 0 and 9. t.hanks the best actor! Favor colocar números entre 0 e 9. Obrigada and denada! ok? Queria colocar uma frase em japonês mas eu esqueci. Arigatô domo!")
    }
    else if (humanDiff < computerDiff) {
        return true;
    }
    else if (humanDiff == computerDiff) {
        return true;
    }
    else {
        return false;
    }
    
}

function updateScore(str) {
    if (str == "human") {
        humanScore += 1;
    }
    else {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}

function getAbsoluteDistance(a, b) {
    return Math.abs(a - b);
}

// function alert(human) {
//     if (human > 9) {
//         alert("favor colocar números entre 0 e 9. Obrigada!")
//     }
// }
