import React from 'react'
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className='w-full h-20 flex fixed'>
        <a href="/">
          <img
            className=' h-[45%] w-[80%] ml-10 mt-3 mr-10 '
            src="../public/logo.svg" alt="" />
        </a>
        <div className='flex mt-4 ml-3 gap-10'>
          <a href="/feature">
            <h3 className='font-bold text-[#c02d28] text-[16px] coursor-pointer'>Features</h3>
          </a>
          <a href="/learn">
            <h3 className='font-bold text-[#c02d28] text-[16px] coursor-pointer '>Learn</h3>
          </a>
          <h3 className='font-bold text-[#c02d28] text-[16px] '>Courses</h3>
          <h3 className='font-bold text-[#c02d28] text-[16px] '>Tutorials <span className='bg-[#04ba71] h-3 w-4 rounded px-1 text-white text-2'>New</span></h3>
          <h3 className='font-bold text-[#c02d28] text-[16px] '>Pricing</h3>
        </div>
        <div className='ml-[10%] flex'>
          <div className='mt-6'>
            <FaSearch color="white" size={24} />
          </div>
          <div className='w-30 h-10 mt-4 ml-8 rounded-2xl bg-[#c02d28] text-white text-[15px] font-bold items-center flex justify-center'>
            Join Now
          </div>
          <div className='mt-5 ml-8'>
           <a href="/login">
            <h3 className='text-[18px] cursor-pointer font-bold text-white'>Login</h3>
           </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
