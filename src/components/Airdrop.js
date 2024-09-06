import React, { useState } from 'react';
import '../styles/Airdrop.css';

const Airdrop = () => {
    const [walletAddress, setWalletAddress] = useState(null);
    const [activeTab, setActiveTab] = useState('airdrop');

    const connectWallet = async () => {
        try {
            const response = await window.tonkeeper.connect();
            setWalletAddress(response.address);
        } catch (error) {
            console.error("Error connecting to wallet:", error);
        }
    };

    return (
        <div className="airdrop-container">
            <div className="airdrop-card">
                <div className="airdrop-header">
                    <img src="https://placehold.co/100x100" alt="Ice cube icon" className="airdrop-icon" />
                </div>
                <h1 className="airdrop-title">Airdrop Tasks</h1>
                <p className="airdrop-description">There is a list of challenges below. Complete them to qualify for the Airdrop.</p>

                <div className="airdrop-section">
                    <h2 className="airdrop-section-title">Wallet</h2>
                    <button onClick={connectWallet} className="airdrop-wallet-btn">
                        <div className="airdrop-wallet-content">
                            <i className="fas fa-wallet"></i>
                            <span>{walletAddress ? walletAddress : "Connect your TON wallet"}</span>
                        </div>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                <div className="airdrop-section">
                    <h2 className="airdrop-section-title">Tasks</h2>
                    <div className="airdrop-task">
                        <div className="airdrop-task-content">
                            <i className="fas fa-medal"></i>
                            <div>
                                <p className="airdrop-task-title">Ice Age Advancement</p>
                                <p className="airdrop-task-reward">+500K</p>
                            </div>
                        </div>
                        <p className="airdrop-task-ton">0.5 TON</p>
                    </div>
                </div>
            </div>

            <div className="airdrop-navigation">
                <button className="nav-button" onClick={() => setActiveTab('game')}>Game</button>
                <button className="nav-button" onClick={() => setActiveTab('mine')}>Mine</button>
                <button className="nav-button" onClick={() => setActiveTab('friends')}>Friends</button>
                <button className="nav-button" onClick={() => setActiveTab('earn')}>Earn</button>
                <button className="nav-button active">Airdrop</button>
            </div>
        </div>
    );
};

export default Airdrop;
