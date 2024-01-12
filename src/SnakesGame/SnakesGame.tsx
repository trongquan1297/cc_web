import { useState, useEffect } from "react";
import SnakeBoard from "./SnakesBoard";
import GameOverModal from "./GameOverModal";
import PausedModal from "./PausedModal";
import HighScoreTable from "./HightScores"


import "./styles.css";

interface SnakesGameProps {
  visible: boolean;
}

console.log('Rendering SnakeGame component');

type Player = {
  id: number;
  name: string;
  score: number;
};

const getPlayerName = () => {
  const playerName = window.prompt('Enter your name:');
  return playerName ? playerName.trim() : null;
};

const SnakesGame: React.FC<SnakesGameProps> = ({ visible }) => {
  const [score, setScore] = useState(0);
  const [players, setPlayers] = useState<Player[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [justStarted, setJustStarted] = useState(true);
  const [showTable, setShowTable] = useState(true);

  useEffect(() => {

    const fetchHighScores = async () => {
      try {
        const response = await fetch('http://localhost/getTopPlayers');
        const data = await response.json();
        console.log(data);
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching high scores:', error);
      }
    };
    fetchHighScores();

    const saveScore = async ( playerName: string,playerScore: number) => {
      try {
        const response = await fetch('http://localhost/addScore', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: playerName,
            score: playerScore,
          }),
        });
    
        if (response.ok) {
          console.log('Score submitted successfully!');
          // You can perform additional actions if needed
        } else {
          console.error('Failed to submit score:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting score:', error);
      }
    };

    if (isGameOver) {
      const playerName = getPlayerName();
  
      if (playerName) {
        // Call the saveScore function with player's name and score
        saveScore(playerName, score);
      } else {
        console.log('Player canceled entering the name.');
      }
    }
  }, [isGameOver, score]); 

  

  const handleBodyClick = () => {
    if (justStarted) {
      setIsPlaying(true);
      setJustStarted(false);
      setScore(0);
      setShowTable(false)
      return;
    }

    !isGameOver && setIsPlaying(!isPlaying);
  };

  return (
    <div id="snakes-game-container"
    onClick={handleBodyClick}
    style={{ display: visible ? "block" : "none" }}>
      <h1 id="game-title">Snake Game</h1>
      <p className="high-score">Top Highest Score</p>
      {showTable && (
        <HighScoreTable players={players} />
      )}
      
      {justStarted ? (
        <p className="new-game-hint">Click anywhere to start</p>
      ) : (
        <>
          <p className="score">
            <span>Score</span>
            <span>{score}</span>
          </p>
          <p className="pause-hint">
            <strong>PAUSE:</strong> Click Anywhere or Press <kbd>esc</kbd>
          </p>
        </>
      )}
      {!isGameOver && !justStarted && (
        <SnakeBoard
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          externalScore={score}
          setScore={setScore}
          setIsGameOver={setIsGameOver}

        />
      )}

      {isGameOver && (
        <GameOverModal
          setIsGameOver={setIsGameOver}
          setIsPlaying={setIsPlaying}
          finalScore={score}
          setJustStarted={setJustStarted}
          setScore={setScore}
          
        />
        
      )}
      {justStarted
        ? ""
        : !isGameOver && 
          !isPlaying && <PausedModal setIsPlaying={setIsPlaying} />}
      
    </div>
  );
};

export default SnakesGame;