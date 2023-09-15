import React from 'react';
import XIcon from './x.svg';
import OIcon from './o.svg';

function Square({value, onSquareClick}) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value === 'X' ? <img src={XIcon} alt="X" /> :
                value === 'O' ? <img src={OIcon} alt="O" /> : value}
        </button>
    );
}

export default Square;