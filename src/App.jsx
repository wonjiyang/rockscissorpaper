import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import rockImg from './assets/rock.png';
import scissorsImg from './assets/scissors.png';
import paperImg from './assets/paper.png';

const choice = {
  rock: {
    name: 'Rock',
    img: rockImg,
  },
  scissors: {
    name: 'Scissors',
    img: scissorsImg,
  },
  paper: {
    name: 'Paper',
    img: paperImg,
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [ties, setTies] = useState(0);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    const gameResult = judgement(choice[userChoice], computerChoice);
    setResult(gameResult);

    if (gameResult === 'win') {
      setUserScore(userScore + 1);
    } else if (gameResult === 'lose') {
      setComputerScore(computerScore + 1);
    }
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? 'win' : 'lose';
    else if (user.name === 'Scissors')
      return computer.name === 'Paper' ? 'win' : 'lose';
    else if (user.name === 'Paper')
      return computer.name === 'Rock' ? 'win' : 'lose';
  };

  const resetGame = () => {
    setUserSelect(null);
    setComputerSelect(null);
    setResult('');
    setUserScore(0);
    setComputerScore(0);
  };

  return (
    <div className="container">
      <div className="score-board">
        <h3>Score</h3>
        <span>{userScore}</span>
        <span>:</span>
        <span>{computerScore}</span>
      </div>
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
      </div>

      <div className="button">
        <button
          className="btn btn-scissors"
          onClick={() => play('scissors')}
        ></button>
        <button className="btn btn-rock" onClick={() => play('rock')}></button>
        <button
          className="btn btn-paper"
          onClick={() => play('paper')}
        ></button>
      </div>

      <button className="reset-btn" onClick={resetGame}>
        Return
      </button>
    </div>
  );
}

export default App;
