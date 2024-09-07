const { getReferralLink } = require('../db');

module.exports = async (req, res) => {
  const { userId } = req.query;
  try {
    const referralLink = await getReferralLink(userId);
    if (referralLink) {
      res.status(200).json({ referralLink });
    } else {
      res.status(404).json({ error: 'Referral link not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch referral link', details: error.message });
  }
};
