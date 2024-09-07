// addFriend.js
const express = require('express');
const { addFriendToUser, getUserFriends } = require('./db'); // اتصال به فایل db.js
const app = express();

// برای پشتیبانی از JSON در بدنه درخواست
app.use(express.json());

// Endpoint برای اضافه کردن دوست به دیتابیس
app.post('/api/add-friend', async (req, res) => {
  const { userId, friendName, points, bonus } = req.body;
  try {
    await addFriendToUser(userId, friendName, points, bonus);
    res.status(200).json({ message: 'Friend added successfully!' });
  } catch (error) {
    console.error('Error adding friend:', error);
    res.status(500).json({ error: 'Failed to add friend' });
  }
});

// Endpoint برای دریافت لیست دوستان
app.get('/api/get-friends', async (req, res) => {
  const { userId } = req.query;
  try {
    const friends = await getUserFriends(userId);
    res.status(200).json({ friends });
  } catch (error) {
    console.error('Error fetching friends:', error);
    res.status(500).json({ error: 'Failed to fetch friends' });
  }
});

// اجرای سرور
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
