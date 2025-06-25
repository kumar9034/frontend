import React from 'react'
import { FaSearch } from "react-icons/fa";
const Thirdpage = () => {
  return (
    <div>
      <div className='w-full h-20 flex bg-[#37140f] pt-2 border-b-2 border-[#c95018]'>
              <a href="/">
                <img
                  className=' h-[45%] w-[80%] ml-10 mt-3 mr-10 '
                  src="../public/logo.svg" alt="" />
              </a>
              <div className='flex mt-4 ml-3 gap-10'>
                <a href="/feature">
                  <h3 className='font-bold text-[#aaaaaa] text-[16px] coursor-pointer '>Features</h3>
                </a>
                <a href="/learn">
                  <h3 className='font-bold text-[#aaaaaa] text-[16px] coursor-pointer '>Learn</h3>
                </a>
                <h3 className='font-bold text-[#aaaaaa] text-[16px] '>Courses</h3>
                <h3 className='font-bold text-[#aaaaaa] text-[16px] '>Tutorials <span className='bg-[#04ba71] h-3 w-4 rounded px-1 text-white text-2'>New</span></h3>
                <h3 className='font-bold text-[#aaaaaa] text-[16px] '>Pricing</h3>
              </div>
              <div className='ml-[10%] flex'>
                <div className='mt-6'>
                  <FaSearch color="white" size={24} />
                </div>
                <div className='w-30 h-10 mt-4 ml-8 rounded-2xl bg-[#c02d28] text-white text-[15px] font-bold items-center flex justify-center'>
                  Join Now
                </div>
                <div className='mt-5 ml-8'>
                  <h3 className='text-[18px] font-bold text-white'>Login</h3>
                </div>
              </div>
            </div>
            <div className='h-auto w-full flex flex-col   bg-[#222222]  '>
                <div className='w-full flex flex-col gap-10 items-center pt-33 '>
                    <input 
                    className='w-100 pl-4 rounded-lg text-[17px] h-10 outline-none bg-white'
                    type="text" placeholder='Username or Email' />
                    <input 
                    className='w-100 pl-4 rounded-lg text-[17px] h-10 outline-none bg-white'
                    type="password"  placeholder='Passwords' />
                </div>
                <div className='flex flex-col gap-5 items-center mt-5'>
                    <p className='text-[14px] font-bold text-[#fc706b] ml-64'>Forgot you Password?</p>
                    <div className='h-10 w-100 rounded-3xl bg-[#c02d28] flex items-center text-white text-[17px] justify-center '>continue</div>
                </div>
            <div className='text-[#fc706b] mt-10 flex justify-center items-center'>
                <p>Login with Single Sign-On</p>
            </div>
            <div className='w-full h-13 mt-10 bg-black'></div>
            </div>
    </div>
  )
}

export default Thirdpage
