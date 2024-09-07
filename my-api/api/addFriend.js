const { addFriendToUser } = require('../db');

module.exports = async (req, res) => {
  const { userId, friendName, points, bonus } = req.body;
  
  try {
    // لاگ برای بررسی درخواست
    console.log('Adding friend:', { userId, friendName, points, bonus });
    
    // اضافه کردن دوست به دیتابیس
    await addFriendToUser(userId, friendName, points, bonus);
    res.status(200).json({ message: 'Friend added successfully!' });
  } catch (error) {
    console.error('Error adding friend:', error);
    res.status(500).json({ error: 'Failed to add friend', details: error.message });
  }
};
