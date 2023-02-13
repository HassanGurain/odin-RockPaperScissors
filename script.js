


// make the computer choose a random play
function getComputerChoice {
    // use random function to genrate one of the three choices
    // temporary make the function return rock always to test out the program
    return "rock"
}

// given two chooses, return True if player wins the game
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.tolowercase();
    
    // 2. compare the selection based on the game rules
    // if player rock:
        // computer rock --> Draw!
        // computer paper --> You Lose! Paper beats Rock
        // computer sissors --> You Win! Rock beats Sissors
    // if player Paper :
        // computer rock --> You Win! Paper beats Rock
        // computer paper --> Draw!
        // computer sissors --> You Lose! Sissors beats Paper
    // if player Sissors:
        // computer rock --> You Lose! Rock beats Sissors
        // computer paper --> You Win! Sissors beats Paper
        // computer sissors --> Draw!


const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));