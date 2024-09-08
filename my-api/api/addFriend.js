const { getReferralLink } = require('../lib/db');

module.exports = async (req, res) => {
  const { userId, friendId, bonus } = req.body;
  try {
    await addFriendToUser(userId, friendId, bonus);
    res.status(200).json({ message: 'Friend added successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add friend', details: error.message });
  }
};
