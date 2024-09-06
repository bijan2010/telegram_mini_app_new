// components/Mine.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Mine.css'; // اگر فایل Mine.css در فولدر styles داخل src قرار دارد

const Mine = () => {
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
        }, 3600000); // 1 ساعت به میلی‌ثانیه

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

    const navigateTo = (page) => {
        alert(`Navigating to ${page} page...`);
    };

    return (
        <div className="mine-container">
            <div className="mine-header">
                <i className="fas fa-arrow-left text-white"></i>
                <h1 className="mine-title">Ton Ice</h1>
                <i className="fas fa-ellipsis-v text-white"></i>
            </div>
            <div className="mine-content">
                <div className="mine-profile">
                    <div className="mine-avatar">
                        <i className="fas fa-user text-black"></i>
                    </div>
                    <span className="mine-username">bijan</span>
                    <div className="mine-sync">
                        <span className="text-green-500">Sync</span>
                        <span>Ice per hour</span>
                        <span className="text-blue-500">+{currentIcePerHour}</span>
                    </div>
                </div>
                <div className="mine-upgrade">
                    <h2 className="text-center text-xl mb-4">Upgrade Ice Production</h2>
                    <div className="flex justify-center mb-4">
                        <i className="fas fa-cube text-blue-500 text-4xl"></i>
                        <span className="text-4xl ml-2">{ice}</span>
                    </div>
                    <div className="mine-stats">
                        <div className="stat-item">
                            <span>Current ice per hour:</span>
                            <span className="text-yellow-500">{currentIcePerHour}</span>
                        </div>
                        <div className="stat-item">
                            <span>Upgrade cost:</span>
                            <span className="text-yellow-500">{(upgradeCost / 1000).toFixed(2)}K</span>
                        </div>
                        <div className="stat-item">
                            <span>Ice per hour increase:</span>
                            <span className="text-yellow-500">+{icePerHourIncrease}</span>
                        </div>
                    </div>
                    <button onClick={handleUpgrade} className="upgrade-btn">Upgrade</button>
                </div>
                <div className="mine-info">
                    <i className="fas fa-info-circle text-yellow-500 mr-2"></i>
                    <span>Your mine automatically produces ice for up to <span className="font-bold">3 hours</span> after your last activity. Make sure to check in regularly to maximize your ice production!</span>
                </div>
            </div>
            <div className="mine-footer">
                <div className="footer-item" onClick={() => navigateTo('Game')}>
                    <i className="fas fa-cube text-blue-500"></i>
                    <span>Game</span>
                </div>
                <div className="footer-item" onClick={() => navigateTo('Mine')}>
                    <i className="fas fa-hammer text-white"></i>
                    <span>Mine</span>
                </div>
                <div className="footer-item" onClick={() => navigateTo('Friends')}>
                    <i className="fas fa-users text-white"></i>
                    <span>Friends</span>
                </div>
                <div className="footer-item" onClick={() => navigateTo('Earn')}>
                    <i className="fas fa-coins text-white"></i>
                    <span>Earn</span>
                </div>
                <div className="footer-item" onClick={() => navigateTo('Airdrop')}>
                    <i className="fas fa-gift text-blue-500"></i>
                    <span>Airdrop</span>
                </div>
            </div>
        </div>
    );
};

export default Mine;
