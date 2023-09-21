import React from 'react';

function Home() {
    return (
        <>
            <div className="container-home">
                <div className="text text--48">
                    Select mode
                </div>

                <div className="container-modes">
                    <button className="primary-button" onClick={() => window.location.href = '/gameAI'}>
                        <div className="text text--32">
                            Vs AI
                        </div>
                    </button>

                    <button className="primary-button" onClick={() => window.location.href = '/game'}>
                        <div className="text text--32">
                            Simple board
                        </div>
                    </button>

                    <button className="primary-button" onClick={() => window.location.href = '/game9'}>
                        <div className="text text--32">
                            9 boards
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;