import React, { useState } from 'react';
import HomeIcon from './home.svg';
import RestartIcon from './restart.svg';
import BackIcon from './back.svg';
import NextIcon from './next.svg';

function GameInfo({moves, jumpTo}) {
    const [currentStep, setCurrentStep] = useState(0);

    const restartGame = () => {
        jumpTo(0);
        
        setCurrentStep(0);
    }

    const handleClick = (goTo) => {
        console.log("count - " + moves.length);
        setCurrentStep(moves.length);
        console.log("initial - " + currentStep);

        if(goTo === 1)
        {
            console.log("===1");
            
            if (currentStep < 9) {
                setCurrentStep(currentStep + 1);

                console.log("+1 - " + currentStep);
                
                jumpTo(currentStep);
            }
        }
        else if(goTo === -1)
        {
            console.log("===-1");
            
            if (currentStep > 1) {

                setCurrentStep(currentStep - 1);

                console.log("-1 - " + currentStep);

                jumpTo(currentStep);
            }
        }
    }
    
    return (
        <div className="game-options">
            <div className="game-option" onClick={() => window.location.href = '/home'}>
                <img src={HomeIcon} alt="Home" />
            </div>

            <div className="game-option" onClick={restartGame}>
                <img src={RestartIcon} alt="Restart" />
            </div>

            <div className="game-option" onClick={() => handleClick(-1)}>
                <img src={BackIcon} alt="Back" />
            </div>

            <div className="game-option" onClick={() => handleClick(1)}>
                <img src={NextIcon} alt="Next" />
            </div>
            
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
