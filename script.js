const choices = ["rock", "paper", "scissors"];
const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];
let userPoint = 0;
let computerPoint = 0;

const playRound = (playerSelection, computerSelection) => {
  const userChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();
  switch (userChoice) {
    case "rock":
      switch (computerChoice) {
        case "paper":
          return "computer";
        case "scissors":
          return "you";
        default:
          return "draw";
      }
    case "paper":
      switch (computerChoice) {
        case "scissors":
          return "computer";
        case "rock":
          return "you";
        default:
          return "draw";
      }
    case "scissors":
      switch (computerChoice) {
        case "rock":
          return "computer";
        case "paper":
          return "you";
        default:
          return "draw";
      }
    default:
      return "invalid";
  }
};

const printResult = (result, playerSelection, computerSelection) => {
  const resultDiv = document.querySelector("#result");
  switch (result) {
    case "you":
      userPoint++;
      resultDiv.textContent = `You chose ${playerSelection}, the computer chose ${computerSelection}. Score: You ${userPoint}, Computer ${computerPoint}. ${result} won.`;
      break;
    case "computer":
      computerPoint++;
      resultDiv.textContent = `You chose ${playerSelection}, the computer chose ${computerSelection}. Score: You ${userPoint}, Computer ${computerPoint}. ${result} won.`;
      break;
    case "draw":
      resultDiv.textContent = `Game is draw! your point: ${userPoint}, Computer point: ${computerPoint}`;
      break;
    default:
      resultDiv.textContent = "Invalid choice, please make a good choice";
      break;
  }
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click",  () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    printResult(result, playerSelection, computerSelection);
    if (userPoint === 5) {
      alert(`You won the game! with 5 points`);
      resetGame();
    } else if (computerPoint === 5) {
      alert("Computer won the game! with 5 points");
      resetGame();
    }
  });
});

const resetGame = () => {
  userPoint = 0;
  computerPoint = 0;
};
