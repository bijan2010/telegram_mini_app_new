const { Pool } = require('pg');
require('dotenv').config();

// تنظیمات اتصال به دیتابیس با استفاده از DATABASE_URL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// تابع برای اضافه کردن دوست به جدول friends
async function addFriendToUser(userId, friendName, points, bonus) {
  const client = await pool.connect();
  try {
    // چک کردن اینکه آیا لینک دعوت از قبل وجود دارد
    const checkLinkQuery = `SELECT referral_link FROM friends WHERE user_id = $1 LIMIT 1`;
    const result = await client.query(checkLinkQuery, [userId]);

    let referralLink;
    if (result.rows.length > 0 && result.rows[0].referral_link) {
      // اگر لینک وجود دارد، از آن استفاده کنید
      referralLink = result.rows[0].referral_link;
    } else {
      // اگر لینک وجود ندارد، لینک جدید ایجاد کنید
      referralLink = `https://t.me/test_minnnes_bot/start?referral=${userId}`;
      const updateLinkQuery = `UPDATE friends SET referral_link = $1 WHERE user_id = $2`;
      await client.query(updateLinkQuery, [referralLink, userId]);
    }

    // اضافه کردن دوست جدید به جدول friends
    const query = `INSERT INTO friends (user_id, friend_name, points, bonus, referral_link) VALUES ($1, $2, $3, $4, $5)`;
    await client.query(query, [userId, friendName, points, bonus, referralLink]);
  } finally {
    client.release();
  }
}

// تابع برای دریافت لیست دوستان
async function getUserFriends(userId) {
  const client = await pool.connect();
  try {
    const query = `SELECT * FROM friends WHERE user_id = $1`;
    const res = await client.query(query, [userId]);
    return res.rows;
  } finally {
    client.release();
  }
}

// تابع برای دریافت لینک دعوت کاربر
async function getReferralLink(userId) {
  const client = await pool.connect();
  try {
    const query = `SELECT referral_link FROM friends WHERE user_id = $1 LIMIT 1`;
    const res = await client.query(query, [userId]);
    if (res.rows.length > 0) {
      return res.rows[0].referral_link;
    } else {
      return null; // در صورتی که لینک دعوت موجود نباشد
    }
  } finally {
    client.release();
  }
}

module.exports = { addFriendToUser, getUserFriends, getReferralLink };
