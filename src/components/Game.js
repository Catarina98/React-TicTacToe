import React, {useState} from 'react';
import Board from './Board';
import XIcon from './x.svg';
import OIcon from './o.svg';
import GameInfo from './GameInfo';

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    // keep the game start, but improve button
    // keep the last step and next step, but improve button
    // to implement - remove play by clicking on the current move
    const moves = history.map((squares, move) => {
        const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
        return description;
    });
    
    return (
        <div className="container-game">
            <div className="content-header">
                <img src={XIcon} alt="X" />
                
                <div className="win-count">
                    <div className="square-count">
                        1
                    </div>
                    
                    <div className="divisor">
                        <div className="dot"></div>
                        
                        <div className="dot"></div>
                    </div>

                    <div className="square-count">
                        1
                    </div>
                </div>

                <img src={OIcon} alt="O" />
            </div>
            
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            
            <GameInfo moves={moves} jumpTo={jumpTo} />
        </div>
    );
}

export default Game;
