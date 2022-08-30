const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
let userChoice
let computerChoice
let result

const possibleChoices = document.querySelectorAll('button')
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResults()
}))

function generateComputerChoice(){
   const randomNumber = Math.floor(Math.random() * possibleChoices.length)
   

   if(randomNumber === 0){
      computerChoice = 'rock'
   }
   if(randomNumber === 1){
      computerChoice = 'paper'
   }
   if(randomNumber === 2){
      computerChoice = 'scissors'
   }

   computerChoiceDisplay.innerHTML = computerChoice
}

function getResults() {
   if (computerChoice === userChoice){
      result = 'its a draw'
   }
   if (computerChoice === 'rock' && userChoice === 'paper'){
      result = 'win'
   }
   if (computerChoice === 'rock' && userChoice === 'scissors'){
      result = 'lost'
   }
   if (computerChoice === 'paper' && userChoice === 'rock'){
      result = 'lost'
   }
   if (computerChoice === 'paper' && userChoice === 'scissors'){
      result = 'win'
   }
   if (computerChoice === 'scissors' && userChoice === 'rock'){
      result = 'win'
   }
   if (computerChoice === 'scissors' && userChoice === 'paper'){
      result = 'lost'
   }

   resultDisplay.innerHTML = result
}