import React, { useState } from 'react';
import '../styles/Friends.css'; // اگر فایل Mine.css در فولدر styles داخل src قرار دارد

const Friends = ({ setPage }) => {
    const [friends, setFriends] = useState([]);
    const [totalPoints, setTotalPoints] = useState(0);

    const inviteFriend = (bonus) => {
        const newFriend = { name: "New Friend", points: 0, bonus: bonus };
        setFriends([...friends, newFriend]);
        setTotalPoints(totalPoints + bonus);
    };

    const shareOnTelegram = (bonus) => {
        const referralCode = Math.random().toString(36).substring(2, 15);
        const referralLink = `https://t.me/tonice_clicker_bot/start?startapp=${referralCode}`;
        window.open(`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=Join%20Ton%20Ice%20and%20get%20${bonus}K%20points!`, '_blank');
        inviteFriend(bonus);
    };

    return (
        <div className="friends-container">
            <div className="header">
                <i className="fas fa-times"></i>
                <h1 className="title">Ton Ice</h1>
                <i className="fas fa-chevron-down"></i>
            </div>
            <div className="invite-section">
                <h2 className="invite-title">Invite Friends!</h2>
                <p className="description">You and your friend will receive bonuses</p>
                <div className="invite-card" onClick={() => inviteFriend(5.00)}>
                    <img src="https://placehold.co/40x40" alt="Gift icon" />
                    <div>
                        <p className="invite-text">Invite a friend</p>
                        <p className="bonus">+5.00K for you and your friend</p>
                    </div>
                </div>
                <div className="invite-card" onClick={() => shareOnTelegram(25.00)}>
                    <img src="https://placehold.co/40x40" alt="Gift icon" />
                    <div>
                        <p className="invite-text">Invite a friend with Telegram Premium</p>
                        <p className="bonus">+25.00K for you and your friend</p>
                    </div>
                </div>
                <p className="more-bonuses">More bonuses</p>
            </div>
            <div className="friends-list">
                <h2 className="list-title">List of your friends ({friends.length})</h2>
                {friends.length === 0 ? (
                    <p className="no-friends">No friends invited yet.</p>
                ) : (
                    friends.map((friend, index) => (
                        <div key={index} className="friend-card">
                            <img src="https://placehold.co/40x40" alt="Gift icon" />
                            <div>
                                <p className="friend-name">{friend.name}</p>
                                <p className="friend-points">{friend.points.toFixed(2)}K points</p>
                            </div>
                            <p className="friend-bonus">+{friend.bonus.toFixed(2)}K</p>
                        </div>
                    ))
                )}
            </div>
            <button className="invite-button" onClick={() => shareOnTelegram(5.00)}>Invite friend</button>
            <div className="navigation">
                <div onClick={() => setPage('game')} className="nav-item">
                    <i className="fas fa-cube"></i>
                    <p>Game</p>
                </div>
                <div onClick={() => setPage('mine')} className="nav-item">
                    <i className="fas fa-hammer"></i>
                    <p>Mine</p>
                </div>
                <div onClick={() => setPage('friends')} className="nav-item active">
                    <i className="fas fa-users"></i>
                    <p>Friends</p>
                </div>
                <div onClick={() => setPage('earn')} className="nav-item">
                    <i className="fas fa-coins"></i>
                    <p>Earn</p>
                </div>
                <div onClick={() => setPage('airdrop')} className="nav-item">
                    <i className="fas fa-parachute-box"></i>
                    <p>Airdrop</p>
                </div>
            </div>
        </div>
    );
};

export default Friends;
