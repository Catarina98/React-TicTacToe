import React from 'react';
import XIcon from './x.svg';
import OIcon from './o.svg';

const Popup = ({isOpen, handleClose, winner}) => {
    return (
        <div className={`popup ${isOpen ? 'open' : ''}`}>
            <div className="popup-inner">
                <button className="close-button" onClick={handleClose}>
                    &times;
                </button>
                
                <div className="content">
                    {winner === 'D' ? (
                        <div className="text">
                            It's a draw
                        </div>
                    ) : (
                        <div className="text">
                            The winner is
                        </div>
                    )}

                    <div className="content-icons">
                        {winner === 'D' ? (
                            <>
                                <img src={XIcon} alt="X"/>
                                <img src={OIcon} alt="O"/>
                            </>
                        ) : (
                            <img src={winner === 'X' ? XIcon : OIcon} alt={winner === 'X' ? "X" : "O"}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;