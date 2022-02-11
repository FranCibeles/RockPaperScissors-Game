import { useEffect, useState } from "react";

const App = () => {
  // useState(null) the start state of userChoice is null
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, SetResult] = useState(null)
  const choices = ['Rock', 'Paper', 'Scissors']


  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
    checkResults()
  }


  const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length)
    const randomChoice = choices[randomNumber]
    setComputerChoice(randomChoice)
  }

  // Make the check only if the computerChoice or userChoice changes

  useEffect(() => {
    checkResults()
  }, [computerChoice, userChoice])


  const checkResults = () => {
    switch (userChoice + computerChoice) {
      case 'RockRock':
      case 'PaperPaper':
      case 'ScissorsScissors':
        SetResult('Draw Computer choose ' + computerChoice + ' and you ' + userChoice)
        break

      case 'PaperRock':
      case 'ScissorsPaper':
      case 'RockScissors':
        SetResult('You Win!! Computer choose ' + computerChoice + ' and you ' + userChoice)
        break

      case 'RockPaper':
      case 'PaperScissors':
      case 'ScissorsRock':
        SetResult('You Lose!! Computer choose ' + computerChoice + ' and you ' + userChoice)
        break
    }
  }


  return (
    <div>
      <h1>User's choice is: {userChoice}</h1>
      <h1>Computer's choice is: {computerChoice}</h1>
      {/* <button onClick={() => handleClick('Rock')}>Rock</button>
      <button onClick={() => handleClick('Scissors')}>Scissors</button>
      <button onClick={() => handleClick('Paper')}>Paper</button> */}
      {choices.map((choice, index) => <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}
      <h1>{result}</h1>
    </div>
  );
}

export default App;
