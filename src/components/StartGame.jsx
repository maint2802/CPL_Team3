import React from 'react';

const StartGame = ({setGameStatus}) => {
    return (
        <div>
            StartGame
            <button onClick={()=>setGameStatus('ingame')}>Start</button>
        </div>
    );
};

export default StartGame;