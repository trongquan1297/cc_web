import React from 'react';
import "./styles.css"

type Player = {
  id: number;
  name: string;
  score: number;
};

type HighScoreTableProps = {
  players: Player[];
};

const HighScoreTable: React.FC<HighScoreTableProps> = ({ players }) => {
  return (
    <div className=" high-score-table">
    <div className="row justify-content-center">
      <div className="col-md-8 mx-auto">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id}>
                <th scope="row">{index + 1}</th>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default HighScoreTable;