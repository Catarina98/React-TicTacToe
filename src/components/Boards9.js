import React, {useEffect, useState} from 'react';
import Popup from './Popup';
import Board from "./Board";
import Square from "./Square";

// The lines are all the ways it is possible to win
//return the winner or null
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    if(!squares.includes(null))
    {
        return 'D';
    }

    return null;
}

function Boards9({xIsNext, squares, onPlay, onEndGame}) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }

    const renderBoard = (i) => (
        <Board xIsNext={xIsNext} squares={squares} onPlay={onPlay} onEndGame={onEndGame}/>
    );

    const winner = calculateWinner(squares);
    const status = !!winner;

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (status) {
            setIsOpen(true);
        }
    }, [status]);

    const handleClose = () => {
        if(winner === 'X')
        {
            onEndGame(true, false);
        }
        else if(winner === 'O')
        {
            onEndGame(false, true);
        }
        else
        {
            onEndGame(false, false);
        }

        setIsOpen(false);
    }

    return (
        <>
            <Popup isOpen={isOpen} handleClose={handleClose} winner={winner} />

            <div className="board9">
                {renderBoard(0)}
                {renderBoard(1)}
                {renderBoard(2)}
                {renderBoard(3)}
                {renderBoard(4)}
                {renderBoard(5)}
                {renderBoard(6)}
                {renderBoard(7)}
                {renderBoard(8)}
            </div>
        </>
    );
}

export default Boards9;
