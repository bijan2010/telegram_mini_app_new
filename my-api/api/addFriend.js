const { addFriendToUser } = require('../db');

module.exports = async (req, res) => {
  const { userId, friendName, points, bonus } = req.body;
  try {
    await addFriendToUser(userId, friendName, points, bonus);
    res.status(200).json({ message: 'Friend added successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add friend', details: error.message });
  }
};
