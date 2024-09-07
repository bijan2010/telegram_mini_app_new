const express = require('express');
const { addFriendToUser, getReferralLink, getUserFriends } = require('./db'); // مسیر صحیح به db.js
const app = express();

// برای پشتیبانی از JSON در بدنه درخواست
app.use(express.json());

// Endpoint برای اضافه کردن دوست به دیتابیس و ایجاد لینک دعوت
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

// Endpoint برای دریافت لینک دعوت
app.get('/api/get-referral-link', async (req, res) => {
  const { userId } = req.query;
  try {
    const referralLink = await getReferralLink(userId);
    if (referralLink) {
      res.status(200).json({ referralLink });
    } else {
      res.status(404).json({ error: 'Referral link not found' });
    }
  } catch (error) {
    console.error('Error fetching referral link:', error);
    res.status(500).json({ error: 'Failed to fetch referral link' });
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
