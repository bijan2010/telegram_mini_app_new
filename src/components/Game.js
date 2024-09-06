import React, { useState, useEffect } from 'react';
import '../styles/Game.css';

const Game = ({ setPage }) => {
  const [count, setCount] = useState(1965);
  const [energy, setEnergy] = useState(1248);
  const [isClicking, setIsClicking] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleClick = () => {
    setCount(count + 4);
    setEnergy(energy - 4);
    setIsClicking(true);

    if (timer) {
      clearTimeout(timer);
    }

    setTimer(setTimeout(() => {
      setIsClicking(false);
    }, 3000));
  };

  useEffect(() => {
    if (!isClicking) {
      const interval = setInterval(() => {
        setEnergy(prevEnergy => (prevEnergy < 1500 ? prevEnergy + 4 : prevEnergy));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isClicking]);

  return (
    <div className="game-container">
      <div className="header">
        <i className="fas fa-times text-white"></i>
        <h1 className="text-white">Ton Ice</h1>
        <i className="fas fa-chevron-down text-white"></i>
      </div>

      <div className="game-info">
        <i className="fas fa-snowflake text-blue-500"></i>
        <h2>{count}</h2>
        <div className="image-container">
          <img 
            src="https://placehold.co/200x200" 
            alt="Character in ice bath" 
            onClick={handleClick} 
          />
        </div>
      </div>

      <div className="energy-info">
        <i className="fas fa-bolt text-yellow-500"></i>
        <span>{energy} / 1500</span>
      </div>

      <button onClick={() => setPage('home')}>Back to Home</button>
    </div>
  );
};

export default Game;
