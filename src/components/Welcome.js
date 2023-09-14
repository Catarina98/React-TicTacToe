import React from 'react';
// import {Routes, Route, useNavigate, Link} from 'react-router-dom';
// import Game from "./Game";

function Welcome() {
    // const navigate = useNavigate();

    // const navigateToWelcome = () => {
    //     navigate('/');
    // };
    //
    // const navigateToHome = () => {
    //     navigate('/home');
    // };
    //
    // const navigateToSelectMode = () => {
    //     navigate('/selectmode');
    // };

    // const navigateToGame = () => {
    //     navigate('/game');
    // };
    return (
        <>            
            <div className="container-welcome">
                <div className="text text--48">
                    Tic Tac Toe
                </div>

                {/*<button className="primary-button" onClick={navigateToGame}>*/}
                {/*    <div className="text text--32">*/}
                {/*        Play*/}
                {/*    </div>*/}
                {/*</button>*/}

                <button className="primary-button">
                    <div className="text text--32">
                        Play
                    </div>
                </button>
            </div>

            {/*<Routes>*/}
            {/*    /!*<Route path="/" element={<Welcome />} />*!/*/}
            
            {/*    /!*<Route path="/home" element={<Home />} />*!/*/}
            
            {/*    <Route path="/game" element={<Game />} />*/}
            {/*</Routes>*/}
        </>
    );
}

export default Welcome;