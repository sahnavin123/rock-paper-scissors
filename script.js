let choices = ["rock", "paper", "scissors"];
let getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];
let userPoint = 0;
let computerPoint = 0;

const playRound = (playerSelection, computerSelection) => {
    const userChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    switch (userChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'paper':
                    return ("computer");
                case 'scissors':
                    return ("you");
                default:
                    return ("draw");
            }
        case 'paper':
            switch (computerChoice) {
                case 'scissors':
                    return ("computer");
                case 'rock':
                    return ("you");
                default:
                    return ("draw");
            }
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    return ("computer");
                case 'paper':
                    return ("you");
                default:
                    return ("draw");
            }
        default:
            return ("The choice is invalid. Please write valid input");
    }
}

const printResult = (result, playerSelection, computerSelection ) => {
    switch (result) {
        case 'you':
            userPoint++;
            console.log(`You chose ${playerSelection}, the computer chose ${computerSelection}.\nScore: You ${userPoint}, Computer ${computerPoint}. ${result} won.`);
            break;
        case 'computer':
            computerPoint++;
            console.log(`You chose ${playerSelection}, the computer chose ${computerSelection}.\nScore: You ${userPoint}, Computer ${computerPoint}. ${result} won.`);
            break;
        case 'draw':
            console.log("Game is draw");
            break;
        default:
            console.log("invalid choice, please make a good choice");
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("enter your choice");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        printResult(result, playerSelection, computerSelection);
    }
}

game();
