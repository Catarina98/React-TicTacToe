import HomeIcon from './home.svg';
import RestartIcon from './restart.svg';
import BackIcon from './back.svg';
import NextIcon from './next.svg';

function GameInfo({moves, currentMove, jumpTo}) {
    function jumpBackForward(previous) {
        var move = previous ? -1 : 1;
        jumpTo(currentMove + move);
    }
    
    return (
        <div className="game-options">
            <div className="game-option" onClick={() => window.location.href = '/home'}>
                <img src={HomeIcon} alt="Home" />
            </div>s

            <div className="game-option" onClick={() => jumpTo(0)}>
                <img src={RestartIcon} alt="Restart" />
            </div>

            <button className="game-option" onClick={() => jumpBackForward(true)} disabled={currentMove === 0}>
                <img src={BackIcon} alt="Back" />
            </button>

            <button className="game-option" onClick={() => jumpBackForward(false)} disabled={currentMove === moves.length - 1}>
                <img src={NextIcon} alt="Next" />
            </button>
            
            {/*<div className="game-info">*/}
            {/*    <ol>*/}
            {/*        {moves.map((description, move) => (*/}
            {/*            <li key={move}>*/}
            {/*                <button onClick={() => jumpTo(move)}>{description}</button>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ol>*/}
            {/*</div>*/}
        </div>
    );
}

export default GameInfo;
