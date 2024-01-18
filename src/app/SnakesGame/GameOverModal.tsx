

interface GameOverModal {
  finalScore: number;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setJustStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;

}

export default function GameOverModal({
  finalScore,
  setIsGameOver,
  setIsPlaying,
  setJustStarted,
  setScore,

}: GameOverModal) {
  const handleGameReset = () => {
    // restart the game
    setIsGameOver(false);
    setIsPlaying(true);
    setJustStarted(true);
    setScore(0);

  };


  return (
    <div id="game-over-modal-container" onClick={handleGameReset}>
      <div id="game-over-modal">
        <h2>Game Over</h2>
        <p className="final-score">
          Your Final Score: <span>{finalScore}</span>
        </p>
        <p className="click-dir">(Click anywhere to continue)</p>
      </div>
    </div>
  );
}
