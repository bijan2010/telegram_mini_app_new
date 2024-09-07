import React, { useState } from 'react';
import Game from './components/Game';
import Mine from './components/Mine';
import Friends from './components/Friends';
import Earn from './components/Earn';
import Airdrop from './components/Airdrop';

const App = () => {
  const [page, setPage] = useState('game');

  const renderPage = () => {
    switch (page) {
      case 'game':
        return <Game setPage={setPage} />;
      case 'mine':
        return <Mine setPage={setPage} />;
      case 'friends':
        return <Friends setPage={setPage} />;
      case 'earn':
        return <Earn setPage={setPage} />;
      case 'airdrop':
        return <Airdrop setPage={setPage} />;
      default:
        return <Game setPage={setPage} />;
    }
  };

  return (
    <div>
      {renderPage()}
      {/* منوی پایین */}
      <div className="w-full flex justify-around items-center bg-gray-800 p-2 fixed bottom-0">
        <div className={`flex flex-col items-center cursor-pointer ${page === 'game' ? 'active' : ''}`} onClick={() => setPage('game')}>
          <i className="fas fa-cube text-blue-500"></i>
          <span className="text-xs text-white">Game</span>
        </div>
        <div className={`flex flex-col items-center cursor-pointer ${page === 'mine' ? 'active' : ''}`} onClick={() => setPage('mine')}>
          <i className="fas fa-pickaxe text-yellow-500"></i>
          <span className="text-xs text-white">Mine</span>
        </div>
        <div className={`flex flex-col items-center cursor-pointer ${page === 'friends' ? 'active' : ''}`} onClick={() => setPage('friends')}>
          <i className="fas fa-users text-red-500"></i>
          <span className="text-xs text-white">Friends</span>
        </div>
        <div className={`flex flex-col items-center cursor-pointer ${page === 'earn' ? 'active' : ''}`} onClick={() => setPage('earn')}>
          <i className="fas fa-coins text-green-500"></i>
          <span className="text-xs text-white">Earn</span>
        </div>
        <div className={`flex flex-col items-center cursor-pointer ${page === 'airdrop' ? 'active' : ''}`} onClick={() => setPage('airdrop')}>
          <i className="fas fa-gift text-purple-500"></i>
          <span className="text-xs text-white">Airdrop</span>
        </div>
      </div>
    </div>
  );
};

export default App;
