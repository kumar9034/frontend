import React from 'react';
import { BsCcSquareFill } from "react-icons/bs";

const Firstcard = ({ bg, image, heading, description, time, name }) => {
  return (
    <div className="relative w-full sm:max-w-[30rem] mx-auto md:h-[25rem] h-[15rem] bg-red-400 rounded-xl overflow-hidden">
      
      <img
        className="w-full h-[200px] sm:h-[240px] object-cover"
        src={bg}
        alt="background"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 sm:p-7 p-4">
        <h1 className="text-lg sm:text-2xl font-semibold text-[#fc706b]">{heading}</h1>
        <div className="flex items-center mt-3">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            src={image}
            alt="instructor"
          />
          <p className="text-white ml-3 text-sm sm:text-md font-semibold">{name}</p>
        </div>
        <p className="hidden sm:block text-sm text-white mt-4">{description}</p>
        <div className="hidden sm:flex items-center gap-4 mt-4 text-[#aaaaaa] text-sm">
          <p>{time}</p>
          <BsCcSquareFill size={20} />
        </div>
        <div className="hidden sm:flex gap-4 mt-5">
          <button className="h-9 w-40 rounded-3xl bg-[#c95018] text-white text-sm">
            Watch Free Preview
          </button>
          <button className="h-9 w-40 rounded-3xl bg-[#c02d28] text-white text-sm">
            Watch Free Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Firstcard;
