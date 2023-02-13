


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
    if ( playerSelection === "rock" && computerSelection === "rock" ) { return 0;}
    if ( playerSelection === "rock" && computerSelection === "paper" ) { return -1;}
    if ( playerSelection === "rock" && computerSelection === "sissors" ) { return 1;}
    // if player Paper :
        // computer rock --> You Win! Paper beats Rock
        // computer paper --> Draw!
        // computer sissors --> You Lose! Sissors beats Paper
    if ( playerSelection === "paper" && computerSelection === "rock" ) { return 1;}
    if ( playerSelection === "paper" && computerSelection === "paper" ) { return 0;}
    if ( playerSelection === "paper" && computerSelection === "sissors" ) { return -1;}

    // if player Sissors:
        // computer rock --> You Lose! Rock beats Sissors
        // computer paper --> You Win! Sissors beats Paper
        // computer sissors --> Draw!
    if ( playerSelection === "sissors" && computerSelection === "rock" ) { return -1;}
    if ( playerSelection === "sissors" && computerSelection === "paper" ) { return 1;}
    if ( playerSelection === "sissors" && computerSelection === "sissors" ) { return 0;}

}

function sayTheWinner(playerSelection,computerSelection){
    if (playRound(playerSelection,computerSelection) === 1) { return `You Win, ${playerSelection} beats ${computerSelection}`;}
    if (playRound(playerSelection,computerSelection) === 0) { return "Draw!";}
    if (playRound(playerSelection,computerSelection) === -1) { return `You Lose, ${computerSelection} beats ${playerSelection}`;}

}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter Rock, Paper, or Sissors");
        const computerSelection = getComputerChoice();
        if (playRound(playerSelection,computerSelection) === 1) { playerScore++}
        if (playRound(playerSelection,computerSelection) === -1) { computerScore++}
        console.log(sayTheWinner(playerSelection,computerSelection));
     }
    if (playerScore > computerScore) {console.log("You win overall")}
    if (playerScore === computerScore) {console.log("Draw overall!")}
    if (playerScore < computerScore) {console.log("Computer win overall")}
}

game()