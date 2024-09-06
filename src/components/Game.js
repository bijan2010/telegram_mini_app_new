import React, { useState, useEffect } from 'react';

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
    <div className="flex flex-col items-center p-4">
      <div className="w-full flex justify-between items-center bg-black p-2">
        <i className="fas fa-times text-white"></i>
        <h1 className="text-white text-lg">Ton Ice</h1>
        <i className="fas fa-chevron-down text-white"></i>
      </div>

      <div className="w-full bg-gray-900 p-4 mt-4 rounded-lg text-center">
        <i className="fas fa-snowflake text-blue-500 text-3xl"></i>
        <h2 className="text-4xl font-bold mt-2">{count}</h2>
        <div className="mt-4 flex justify-center">
          <img 
            src="https://placehold.co/200x200" 
            alt="Character in ice bath" 
            className="rounded-full border-4 border-blue-500 cursor-pointer" 
            onClick={handleClick} 
          />
        </div>
      </div>

      <div className="w-full flex justify-between items-center bg-gray-900 p-4 mt-4 rounded-lg">
        <div className="flex items-center space-x-2">
          <i className="fas fa-bolt text-yellow-500"></i>
          <span>{energy} / 1500</span>
        </div>
      </div>

      <button className="bg-blue-500 px-4 py-2 mt-4 rounded" onClick={() => setPage('home')}>Back to Home</button>
    </div>
  );
};

export default Game;
