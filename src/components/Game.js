import React, { useState, useEffect } from 'react';
import { updateUserData, getUserData } from '../my-api/db'; // فرض بر اینکه db.js در فولدر my-api است

const Game = ({ setPage, userId }) => {
  const [count, setCount] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [timer, setTimer] = useState(null);

  // دریافت اطلاعات کاربر از دیتابیس
  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData(userId);
      if (userData) {
        setCount(userData.points);
        setEnergy(userData.energy);
      }
    };
    fetchData();
  }, [userId]);

  const handleClick = async () => {
    const newCount = count + 4;
    const newEnergy = energy - 4;
    setCount(newCount);
    setEnergy(newEnergy);
    setIsClicking(true);

    // ذخیره امتیازات و انرژی به‌روز شده در دیتابیس
    await updateUserData(userId, newCount, newEnergy);

    if (timer) {
      clearTimeout(timer);
    }
    setTimer(setTimeout(() => setIsClicking(false), 3000));
  };

  useEffect(() => {
    if (!isClicking) {
      const interval = setInterval(() => {
        setEnergy(prevEnergy => (prevEnergy < 1500 ? prevEnergy + 4 : prevEnergy));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isClicking]);

  return (
    <div className="flex flex-col items-center p-4">
      {/* ظاهر صفحه بازی همون که بود */}
      <div className="w-full bg-gray-900 p-4 mt-4 rounded-lg text-center">
        <i className="fas fa-snowflake text-blue-500 text-3xl"></i>
        <h2 className="text-4xl font-bold mt-2 text-white">{count}</h2>
        <p className="text-gray-400">Chilly Consultant • 3 / 9</p>
        <div className="mt-4 flex justify-center">
          <img 
            src="https://placehold.co/200x200" 
            alt="Character in ice bath" 
            className="rounded-full border-4 border-blue-500 cursor-pointer" 
            onClick={handleClick} 
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
