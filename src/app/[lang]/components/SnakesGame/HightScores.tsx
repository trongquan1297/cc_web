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
    <div className="high-score-table my-16">
    <div className="row justify-content-center">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-violet-400 dark:text-violet-400">
          <thead className="text-xs text-violet-500 uppercase bg-pink-300 dark:text-violet-400">
            <tr>
              <th scope="col" className="px-6 py-3">#</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Score</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr className="bg-pink-200 border-b borde-red-400" key={player.id}>
                <th scope="row" className="px-6 py-4 font-medium text-violet-400 whitespace-nowrap dark:text-violet-400">{index + 1}</th>
                <td className="px-6 py-4">{player.name}</td>
                <td className="px-6 py-4">{player.score}</td>
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