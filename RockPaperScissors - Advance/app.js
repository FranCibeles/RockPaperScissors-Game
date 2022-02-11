const resultDisplay = document.querySelector('#result');
const choicesDisplay = document.querySelector('#choices');
const choices = ['Rock', 'Paper', 'Scissors'];

const handleClick = (e) =>{
    /* Here we pass as parameters directly the value of the innerHTML
    of the button and also the random generated value
    */
    const userChoice = e.target.innerHTML;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    getResults(userChoice,computerChoice);
}

choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button);
})

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            resultDisplay.innerHTML = 'Draw Computer choose ' + computerChoice + ' and you ' + userChoice;
            break
        
        case 'PaperRock':
        case 'ScissorsPaper':
        case 'RockScissors':
            resultDisplay.innerHTML = 'You Win!! Computer choose ' + computerChoice + ' and you ' + userChoice;
            break
        
        case 'RockPaper':
            case 'PaperScissors':
            case 'ScissorsRock':
                resultDisplay.innerHTML = 'You Lose!! Computer choose ' + computerChoice + ' and you ' + userChoice;
                break
    }
}