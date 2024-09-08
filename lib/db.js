import { MongoClient } from 'mongodb';
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export const connectToDatabase = async () => {
  if (!client.isConnected()) await client.connect();
  return client.db('telegramclicker');
};

// اضافه کردن یا آپدیت امتیاز کاربر
export const updateUserScore = async (userId, score) => {
  const db = await connectToDatabase();
  const user = await db.collection('users').findOne({ userId });
  
  if (user) {
    // آپدیت امتیاز
    await db.collection('users').updateOne(
      { userId },
      { $set: { score: user.score + score } }
    );
  } else {
    // ایجاد کاربر جدید
    const referralLink = `https://t.me/your_bot?start=${userId}`;
    await db.collection('users').insertOne({
      userId, 
      score, 
      referralLink,
      friends: [] // ایجاد لیست خالی دوستان
    });
  }
};

// دریافت امتیاز کاربر
export const getUserScore = async (userId) => {
  const db = await connectToDatabase();
  const user = await db.collection('users').findOne({ userId });
  return user ? user.score : 0;
};

// دریافت لینک دعوت کاربر
export const getReferralLink = async (userId) => {
  const db = await connectToDatabase();
  const user = await db.collection('users').findOne({ userId });
  return user ? user.referralLink : null;
};

// اضافه کردن دوست به لیست دوستان
export const addFriendToUser = async (userId, friendId, bonus) => {
  const db = await connectToDatabase();
  const user = await db.collection('users').findOne({ userId });

  if (user) {
    await db.collection('users').updateOne(
      { userId },
      { $push: { friends: { friendId, bonus } } }
    );
  }
};
