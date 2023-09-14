import React from 'react';

function Welcome() {
    return (
        <>            
            <div className="container-welcome">
                <div className="text text--48">
                    Tic Tac Toe
                </div>

                <button className="primary-button" onClick={() => window.location.href = '/home'}>
                    <div className="text text--32">
                        Play
                    </div>
                </button>
            </div>
        </>
    );
}

export default Welcome;