const useChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const finalChoiceDisplay = document.createElement('h1');
const gameGrid = document.getElementById('game');
gameGrid.append(useChoiceDisplay, computerChoiceDisplay, finalChoiceDisplay);


const choices = ['Rock', 'Paper', 'Scissors'];

let userChoice
let computerChoice

const handleClick = (e) => {
    userChoice = e.target.id;
    useChoiceDisplay.innerHTML = 'User Choice: ' + userChoice;
    generateComputerChoice();
    getResults();
}

const generateComputerChoice = () => {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.innerHTML = ' Computer Choice: ' + computerChoice;
}

for (let index = 0; index < choices.length; index++) {
    const button = document.createElement('button');
    button.id = choices[index];
    button.innerHTML = choices[index];
    button.addEventListener('click', handleClick);
    gameGrid.appendChild(button);
}


let getResults = () => {
    switch(userChoice + computerChoice){
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            finalChoiceDisplay.innerHTML = 'Draw'
            break
        
        case 'PaperRock':
        case 'ScissorsPaper':
        case 'RockScissors':
            finalChoiceDisplay.innerHTML = 'You Win!!'
            break
        
        case 'RockPaper':
            case 'PaperScissors':
            case 'ScissorsRock':
                finalChoiceDisplay.innerHTML = 'You Lose!!'
                break
    }
        
}