import React, { useState, useEffect } from 'react';
import '../styles/Friends.css'; // مسیر درست به فایل CSS

const Friends = ({ setPage, userId }) => {
    const [friends, setFriends] = useState([]);
    const [totalPoints, setTotalPoints] = useState(0);

    useEffect(() => {
        // دریافت لیست دوستان از دیتابیس
        fetch(`/api/get-friends?userId=${userId}`)
            .then(response => response.json())
            .then(data => setFriends(data.friends || []))
            .catch(error => console.error('Error fetching friends:', error));
    }, [userId]);

    const inviteFriend = (bonus) => {
        // اضافه کردن امتیاز دعوت به کاربر
        fetch('/api/add-friend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, bonus })
        })
        .then(() => setTotalPoints(totalPoints + bonus))
        .catch(error => console.error('Error inviting friend:', error));
    };

    const shareOnTelegram = (bonus) => {
        fetch(`/api/get-referral-link?userId=${userId}`)
            .then(response => response.json())
            .then(data => {
                const referralLink = data.referralLink;
                window.open(`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=Join%20Ton%20Ice%20and%20get%20${bonus}K points!`, '_blank');
                inviteFriend(bonus);
            })
            .catch(error => console.error('Error fetching referral link:', error));
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
                <div className="invite-card" onClick={() => shareOnTelegram(5.00)}>
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
        </div>
    );
};

export default Friends;
