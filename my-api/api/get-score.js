const { getReferralLink } = require('../lib/db');

module.exports = async (req, res) => {
  const { userId } = req.query;
  try {
    const score = await getUserScore(userId);
    res.status(200).json({ score });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch score', details: error.message });
  }
};
