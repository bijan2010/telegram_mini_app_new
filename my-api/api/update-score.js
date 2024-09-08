const { getReferralLink } = require('../lib/db');


module.exports = async (req, res) => {
  const { userId, score } = req.body;
  try {
    await updateUserScore(userId, score);
    res.status(200).json({ message: 'Score updated successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update score', details: error.message });
  }
};
