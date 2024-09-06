import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import Mine from './components/Mine';
import Friends from './components/Friends';
import Earn from './components/Earn';
import Airdrop from './components/Airdrop';  // Import Airdrop component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/mine" element={<Mine />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/airdrop" element={<Airdrop />} />  {/* Airdrop route */}
        <Route path="/" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
