import React, {useState} from 'react';
import XIcon from './x.svg';
import OIcon from './o.svg';
import GameInfo from './GameInfo';
import BoardAI from "./BoardAI";

function GameAI() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [xWinCount, setXWinCount] = useState(0);
    const [oWinCount, setOWinCount] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function endGame(xWin, oWin) {
        const count = xWin ? xWinCount + 1 : oWin ? oWinCount + 1 : null;

        if(xWin)
        {
            setXWinCount(count);
        }
        else if(oWin)
        {
            setOWinCount(count);
        }

        jumpTo(0);
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
                <div className={xIsNext ? "" : "icon-disabled"} >
                    <img src={XIcon} alt="X" />
                </div>

                <div className="win-count">
                    <div className="square-count">
                        {xWinCount}
                    </div>

                    <div className="divisor">
                        <div className="dot"></div>

                        <div className="dot"></div>
                    </div>

                    <div className="square-count">
                        {oWinCount}
                    </div>
                </div>

                <div className={xIsNext ? "icon-disabled" : ""} >
                    <img src={OIcon} alt="O" />
                </div>
            </div>

            <div className="game-board">
                <BoardAI xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} onEndGame={endGame}
                         setHistory={setHistory}
                         history={history}/>
            </div>

            <GameInfo moves={moves} currentMove={currentMove} jumpTo={jumpTo} />
        </div>
    );
}

export default GameAI;
