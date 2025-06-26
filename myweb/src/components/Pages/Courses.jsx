import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";

const Courses = () => {
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
                  <h3 className='font-bold text-[#aaaaaa] text-[16px] coursor-pointer'>Features</h3>
                </a>
                <a href="/learn">
                        <h3 className='font-bold text-[#aaaaaa] text-[16px] coursor-pointer '>Learn</h3>
                </a>
                <a href="/courses">
                 <h3 className='font-bold text-[#aaaaaa] cursor-pointer text-[16px] '>Courses</h3>
                </a>
                <h3 className='font-bold text-[#aaaaaa] text-[16px] '>Tutorials <span className='bg-[#04ba71] h-3 w-4 rounded px-1 text-white text-2'>New</span></h3>
                <a href="/pricing">
                <h3 className='font-bold text-[#aaaaaa] text-[16px] cursor-pointer '>Pricing</h3>
                </a>
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
            <div className='h-screen  w-full items-center flex flex-col  bg-[#222222]'>
                    <div className='h-18 border-1 flex items-center justify-center border-[#333333] w-[62.5rem] mt-9  bg-[#212121]'>
                        <p className='text-white font-bold '>Join us live online! <span className='text-sm text-[#fc706b] font-bold'>API Design in Node.js, v5</span> <span className='font-[400]'>on Aug 13, 2025.</span></p>
                    </div>
                    <div className='mt-20 flex flex-col items-center justify-center'>
                        <h1 className='text-5xl font-bold text-white '>Frontend & Fullstack Engineering Courses</h1>
                        <p className='text-[16.5px] mt-5 text-white'>Not sure where to start? <span className='text-[#fc706b]'> Check out our Learning Paths!</span></p>
                    </div >
                    <div className='w-[72rem] h-14 mt-15 flex  rounded-4xl bg-[#3e3e3e]'>
                        <CgSearch color='white' size={27} className='mt-4 ml-5'/>
                        <input type="text" className='w-full text-[#aaaaaa] outline-none ml-4 text-lg' placeholder='Search For Courses, language , framwork or teacher...' />
                    </div>
                    <div>
                        
                    </div>
            </div>
    </div>
  )
}

export default Courses
