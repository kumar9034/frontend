import React from 'react'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <div>
      <div className='flex '>
          <div className=' sm:h-[50%] h-[50%] sm:w-[60%] w-[70%]   sm:mt-[18%] mt-[75%] sm:ml-10 ml-5'>
            <h3 className='sm:text-[25px] text-[20px] sm:text-black font-bold text-white '>In-Depth Frontend & Fullstack Courses</h3>
            <h1 className='sm:text-[3rem] text-[2rem] font-bold sm:text-black text-white'>Your Path to Senior Developer and Beyond</h1>
            <div className=' sm:flex gap-10'>
              <Link to="/courses">
              <div className=' h-10 sm:w-50 w-[19rem] bg-[#c02d28] cursor-pointer rounded-2xl mt-10 sm:text-[18px] text-[15px] leading-none text-white flex items-center justify-center'>
                <h2 >Browes Our Courses</h2>
              </div>
              </Link>
              <div className=' h-10 sm:w-50 w-[19rem] bg-[#c95018] rounded-2xl sm:mt-10 mt-5 sm:text-[18px] text-[15px] text-white flex items-center cursor-pointer justify-center'>
                <Link to="/learn">
                <h2 >View Learning Paths</h2>
                </Link>
              </div>
            </div>
          </div >

          <div className='xl:block hidden contain-description  :w-[50%]  '>
            <div className='h-40 w-[30rem] bg-[#020303] mt-[33rem] md:ml-10 ml-5'>
              <div className='h-20 w-100 text-white pl-5 text-[17px] pt-5'>
                <p>Focus on HTML, CSS, and JavaScript fundamentals. They're the browser bedrock that'll keep your career solid, not fleeting technologies.</p>

                <p className='font-bold mt-4'>Jen Kramer <span className='font-normal ml-2'>Annie Canons  </span></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Section1
