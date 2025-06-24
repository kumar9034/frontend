import React, { useState, useEffect } from 'react';

const CourseCard = ({ title, description, duration ,image, color }) => {
  const [percentage, setPercentage] = useState(0);
  const [direction, setDirection] = useState('forward'); // 'forward' or 'backward'
  const [done, setDone] = useState(false); // stop after 1 full loop

  useEffect(() => {
    if (done) return;

    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (direction === 'forward') {
          if (prev < 100) {
            return prev + 1;
          } else {
            setDirection('backward');
            return prev;
          }
        } else {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(interval);
            setDone(true);
            return prev;
          }
        }
      });
    }, 30); // speed

    return () => clearInterval(interval);
  }, [direction, done]);

  const strokeDasharray = 100;
  const strokeDashoffset = 100 - percentage;

  return (
    <div className="bg-[#2a2a2a] text-white rounded-lg p-6 w-[350px] mx-auto shadow-lg text-center">
      {/* Circular Progress */}
      <img className='absolute ml-25 mt-15' src={image} alt="" />
      <div className="relative w-45 h-45 mx-auto mb-6">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={color}
            strokeWidth="3"
          />
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.2s ease' }}
          />
          <defs>
            <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c63629" />
              <stop offset="100%" stopColor="#cb3e29" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-extrabold">
          {percentage}%
        </div>
      </div>

      {/* Text */}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-[17px] text-gray-300 mt-2 mb-4">{description}</p>

      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full">
        Continue
      </button>

      <p className="text-gray-400 text-sm mt-4">{duration}</p>
    </div>
  );
};

export default CourseCard;
