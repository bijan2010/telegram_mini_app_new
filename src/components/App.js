import React, { useState } from 'react';
import Game from './Game';
import Mine from './Mine'; // اضافه کردن Mine

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'game':
        return <Game setPage={setPage} />;
      case 'mine': // اضافه کردن case برای صفحه Mine
        return <Mine setPage={setPage} />;
      default:
        return (
          <div className="text-white text-center p-4">
            <h2 className="text-2xl mb-4">Home Page</h2>
            <button className="bg-blue-500 px-4 py-2 rounded" onClick={() => setPage('game')}>Go to Game</button>
            <button className="bg-yellow-500 px-4 py-2 rounded ml-4" onClick={() => setPage('mine')}>Go to Mine</button> {/* دکمه برای Mine */}
          </div>
        );
    }
  };

  return renderPage();
};

ReactDOM.render(<App />, document.getElementById('root'));
