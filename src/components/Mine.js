import React, { useState, useEffect } from 'react';

const Mine = ({ setPage }) => {
  const [ice, setIce] = useState(1969);
  const [currentIcePerHour, setCurrentIcePerHour] = useState(891);
  const [upgradeCost, setUpgradeCost] = useState(7590);
  const [icePerHourIncrease, setIcePerHourIncrease] = useState(298);
  const [lastActivity, setLastActivity] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const hoursSinceLastActivity = (Date.now() - lastActivity) / (1000 * 60 * 60);
      if (hoursSinceLastActivity <= 3) {
        setIce(prevIce => prevIce + currentIcePerHour);
      }
    }, 3600000); // 1 hour in milliseconds

    return () => clearInterval(interval);
  }, [lastActivity, currentIcePerHour]);

  const handleUpgrade = () => {
    if (ice >= upgradeCost) {
      setIce(ice - upgradeCost);
      setCurrentIcePerHour(currentIcePerHour + icePerHourIncrease);
      setUpgradeCost(Math.round(upgradeCost * 1.2));
      setIcePerHourIncrease(Math.round(icePerHourIncrease * 1.2));
      setLastActivity(Date.now());
    } else {
      alert("Not enough ice to upgrade!");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full flex justify-between items-center bg-black p-2">
        <i className="fas fa-arrow-left text-white"></i>
        <h1 className="text-white text-lg">Ton Ice</h1>
        <i className="fas fa-ellipsis-v text-white"></i>
      </div>
      <div className="w-full bg-gray-800 p-4 mt-4 rounded-lg">
        <h2 className="text-center text-xl mb-4 text-white">Upgrade Ice Production</h2>
        <div className="flex justify-center mb-4">
          <i className="fas fa-cube text-blue-500 text-4xl"></i>
          <span className="text-4xl ml-2 text-white">{ice}</span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <div className="flex justify-between mb-2 text-white">
            <span>Current ice per hour:</span>
            <span className="text-yellow-500">{currentIcePerHour}</span>
          </div>
          <div className="flex justify-between mb-2 text-white">
            <span>Upgrade cost:</span>
            <span className="text-yellow-500">{(upgradeCost / 1000).toFixed(2)}K</span>
          </div>
          <div className="flex justify-between text-white">
            <span>Ice per hour increase:</span>
            <span className="text-yellow-500">+{icePerHourIncrease}</span>
          </div>
        </div>
        <button onClick={handleUpgrade} className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Upgrade</button>
      </div>
      <div className="w-full flex justify-between items-center bg-gray-900 p-4 mt-4 rounded-lg">
        <div className="flex items-center space-x-2">
          <i className="fas fa-info-circle text-yellow-500"></i>
          <span className="text-white">Your mine automatically produces ice for up to 3 hours after your last activity.</span>
        </div>
      </div>
      <div className="w-full flex justify-around items-center bg-gray-800 p-2 fixed bottom-0">
        <div className="flex flex-col items-center cursor-pointer" onClick={() => setPage('game')}>
          <i className="fas fa-cube text-blue-500"></i>
          <span className="text-xs text-white">Game</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => setPage('mine')}>
          <i className="fas fa-pickaxe text-yellow-500"></i>
          <span className="text-xs text-white">Mine</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => setPage('friends')}>
          <i className="fas fa-users text-red-500"></i>
          <span className="text-xs text-white">Friends</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => setPage('earn')}>
          <i className="fas fa-coins text-green-500"></i>
          <span className="text-xs text-white">Earn</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => setPage('airdrop')}>
          <i className="fas fa-gift text-purple-500"></i>
          <span className="text-xs text-white">Airdrop</span>
        </div>
      </div>
    </div>
  );
};

export default Mine;
