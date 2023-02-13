


// make the computer choose a random play
function getComputerChoice() {
    // use random function to genrate one of the three choices
    // generate random number between 0 and 2
    const randomint = Math.floor(3 * Math.random() )

    if (randomint === 0) {return "rock";}
    if (randomint === 1) {return "paper"}
    if (randomint === 2) {return "sissors"}
}

// given two chooses, return True if player wins the game
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    
    // 2. compare the selection based on the game rules
    // if player rock:
        // computer rock --> Draw!
        // computer paper --> You Lose! Paper beats Rock
        // computer sissors --> You Win! Rock beats Sissors
    if ( playerSelection === "rock" && computerSelection === "rock" ) { return "Draw!";}
    if ( playerSelection === "rock" && computerSelection === "paper" ) { return "You Lose! Paper beats Rock";}
    if ( playerSelection === "rock" && computerSelection === "sissors" ) { return "You Win! Rock beats Sissors";}
    // if player Paper :
        // computer rock --> You Win! Paper beats Rock
        // computer paper --> Draw!
        // computer sissors --> You Lose! Sissors beats Paper
    if ( playerSelection === "paper" && computerSelection === "rock" ) { return "You Win! Paper beats Rock";}
    if ( playerSelection === "paper" && computerSelection === "paper" ) { return "Draw!";}
    if ( playerSelection === "paper" && computerSelection === "sissors" ) { return "You Lose! Sissors beats Paper";}

    // if player Sissors:
        // computer rock --> You Lose! Rock beats Sissors
        // computer paper --> You Win! Sissors beats Paper
        // computer sissors --> Draw!
    if ( playerSelection === "sissors" && computerSelection === "rock" ) { return "You Lose! Rock beats Sissors";}
    if ( playerSelection === "sissors" && computerSelection === "paper" ) { return "You Win! Sissors beats Paper";}
    if ( playerSelection === "sissors" && computerSelection === "sissors" ) { return "Draw!";}

}

const playerSelection = "Sissors";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));