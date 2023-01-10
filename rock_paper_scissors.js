console.log('hi');

//get the user's choice in rock, paper, scissors
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'spock'){
    return userInput;
  }
  else{
    return 'Error!';
  }
};
//var to call
const userChoice = getUserChoice('spock');
//get the computer's choice in rock, paper, scissors
const getComputerChoice = () => {
  number = Math.floor(Math.random() * 3);
  if (number === 0){
    return 'rock';
  }
  else if (number === 1){
    return 'paper'
  }
  else{
    return 'scissors'
  }
}
//var to call
const computerChoice = getComputerChoice();
//compare the user's and computer's choices
const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === computerChoice){
    return 'It\'s a tie';
  }
  else if(userChoice === 'paper' && computerChoice === 'rock'){
    return 'You win! Paper beats Rock';
  }
  else if(userChoice === 'paper' && computerChoice === 'scissors'){
    return 'You lose! Scissors beats Paper';
  }
  else if(userChoice === 'rock' && computerChoice === 'scissors'){
    return 'You win! Rock beats Scissors';
  }
  else if(userChoice === 'rock' && computerChoice === 'paper'){
    return 'You lose! Paper beats Rock';
  }
   else if(userChoice === 'scissors' && computerChoice === 'paper'){
    return 'You win! Scissors beats Paper';
  }
  else if(userChoice === 'scissors' && computerChoice === 'rock'){
    return 'You lose! Rock beats Scissors';
  }
  else if(userChoice === 'spock'){
    return 'Ehh, I guess you win. I\'m just a computer';
  }
  else{
    return 'Somebody won, I just won\'t tell you.'
  }
}
//var to call
const winner = determineWinner(userChoice, computerChoice);

console.log(winner);
