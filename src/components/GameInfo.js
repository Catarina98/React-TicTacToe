import React from 'react';

function GameInfo({ moves, jumpTo }) {
  return (
    <div className="game-info">
      <ol>
        {moves.map((description, move) => (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default GameInfo;
