import React, {useEffect, useState} from 'react';
import Square from './Square';
import Popup from './Popup';

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

function getAIMove(squares) {
    //THIS IS THE WORKING CODE (RANDOM)
    const emptySquares = squares.reduce((acc, value, index) => {
        if (value === null) {
            acc.push(index);
        }
        return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    return emptySquares[randomIndex];
    
    
    
    //AI IMPLEMENTED
    // if(squares.includes(null)) { //not for now 
    //     const myArray = [0, 2, 6, 8];
    //
    //     return Math.floor(Math.random() * myArray.length);
    // }
    // else if(!squares.includes('O')) {
    //     //TODO
    // }
    // else {
    //     const getMyIndex = ICanWin(squares);
    //    
    //     if(getMyIndex !== null) {
    //         return getMyIndex;
    //     }
    //     else {
    //         const getAdvIndex = AdvCanWin(squares);
    //
    //         if(getAdvIndex !== null) {
    //             return getAdvIndex;
    //         }
    //         else {
    //             if (squares.includes('X')) { //not correct - only 1 time 
    //                 //get index of play
    //                 //if index == 0 - return 8
    //                 //if index == 2 - return 6
    //                 //if index == 6 - return 2
    //                 //if index == 8 - return 0
    //             }
    //             else {
    //                 //TODO
    //             }
    //         }
    //     }
    // }
}

//AI IMPLEMENTED
// function ICanWin(squares)
// {
//     if(squares.filter(item => item === 'O').length) { //not for now this is not correct - if squares container al least 2 times '0'
//         //get index of my plays
//         //verify if i can win
//         //yes - return index of play to win
//         //no - return null;
//     }
//     else {
//         return null;
//     }
// }
//
// function AdvCanWin(squares)
// {
//     if(squares.filter(item => item === 'X').length) { //not for now this is not correct - if squares container al least 2 times 'X'
//         //get index of adv plays
//         //verify if adv can win
//         //yes - return index of play to win
//         //no - return null;
//     }
//     else {
//         return null;
//     }
// }

function BoardAI({xIsNext, squares, onPlay, onEndGame}) {
    async function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = 'X';
        onPlay(nextSquares);

        if (calculateWinner(squares) || squares[i]) { //why it does not enter here?
            console.log("win");
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 300));

        const aiMove = getAIMove(nextSquares);
        nextSquares[aiMove] = 'O';
        onPlay(nextSquares);
    }

    const renderSquare = (i) => (
        <Square value={squares[i]} onSquareClick={() => handleClick(i)}/>
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

            <div className="board">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </>
    );
}

export default BoardAI;