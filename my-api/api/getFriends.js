const { getUserFriends } = require('../db');

module.exports = async (req, res) => {
  const { userId } = req.query;
  try {
    const friends = await getUserFriends(userId);
    res.status(200).json({ friends });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch friends', details: error.message });
  }
};
