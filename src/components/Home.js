import React from 'react';

function Home() {
    return (
        <>
            <div className="container-home">
                <div className="text text--48">
                    Select mode
                </div>

                <button className="primary-button">
                    <div className="text text--32">
                        Vs AI
                    </div>
                </button>

                <button className="primary-button">
                    <div className="text text--32">
                        Simple board
                    </div>
                </button>

                <button className="primary-button">
                    <div className="text text--32">
                        9 boards
                    </div>
                </button>
            </div>
        </>
    );
}

export default Home;