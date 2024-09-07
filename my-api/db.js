// db.js
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
    const query = `INSERT INTO friends (user_id, friend_name, points, bonus) VALUES ($1, $2, $3, $4)`;
    await client.query(query, [userId, friendName, points, bonus]);
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

module.exports = { addFriendToUser, getUserFriends };
