import React from 'react';
import '../styles/Earn.css';

const Earn = () => {
  return (
    <div className="earn-container">
      <div className="earn-card">
        <div className="earn-header">
          <img src="https://placehold.co/100x100" alt="Ice cube icon" className="earn-icon" />
        </div>
        <h1 className="earn-title">Earn More Ice</h1>
        <div className="earn-section">
          <h2 className="earn-section-title">Ice Youtube</h2>
          <div className="earn-task">
            <img src="https://placehold.co/40x40" alt="YouTube icon" className="task-icon" />
            <div className="task-details">
              <p>Set Up Telegram Mini App Clicker Game</p>
              <div className="task-reward">
                <img src="https://placehold.co/20x20" alt="Ice cube icon" className="reward-icon" />
                <span>+5.00K</span>
              </div>
            </div>
            <i className="fas fa-clock task-clock"></i>
          </div>
          <div className="earn-task">
            <img src="https://placehold.co/40x40" alt="YouTube icon" className="task-icon" />
            <div className="task-details">
              <p>How to Make a Hamster Kombat Clone</p>
              <div className="task-reward">
                <img src="https://placehold.co/20x20" alt="Ice cube icon" className="reward-icon" />
                <span>+5.00K</span>
              </div>
            </div>
          </div>
          <div className="earn-task">
            <img src="https://placehold.co/40x40" alt="YouTube icon" className="task-icon" />
            <div className="task-details">
              <p>How to Make a Notcoin Clone</p>
              <div className="task-reward">
                <img src="https://placehold.co/20x20" alt="Ice cube icon" className="reward-icon" />
                <span>+5.00K</span>
              </div>
            </div>
          </div>
        </div>
        <div className="earn-section">
          <h2 className="earn-section-title">Tasks list</h2>
          <div className="earn-task">
            <img src="https://placehold.co/40x40" alt="Task icon" className="task-icon" />
            <div className="task-details">
              <p>Join Clicker Game News / Updates</p>
            </div>
          </div>
        </div>
      </div>
      <div className="earn-navigation">
        <button className="nav-button">Game</button>
        <button className="nav-button">Mine</button>
        <button className="nav-button active">Earn</button>
        <button className="nav-button">Friends</button>
        <button className="nav-button">Airdrop</button>
      </div>
    </div>
  );
};

export default Earn;
