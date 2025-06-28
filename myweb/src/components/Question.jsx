import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";


const Question = () => {
    return (
        <>
            <div className='h-auto w-full bg-[#333333] pb-20 '>
                <div className='flex flex-col justify-center gap-4 items-center pt-20'>
                    <img src="/Question-marks.svg" alt="" />
                    <h1 className='text-5xl font-bold text-white '>Frequently Asked Questions</h1>
                </div>
                <div className='border-1 border-white w-[90%] ml-15 mt-15 '></div>
                <div className='ml-15 mt-3 mr-20 flex justify-between items-center'>
                    <p className='text-[18px] font-bold text-white'>What is the difference between a workshop and a course?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='border-1 border-white w-[90%] ml-15 mt-5 '></div>
                <div className='ml-15 mt-3 mr-20 flex justify-between items-center'>
                    <p className='text-[18px] font-bold text-white'>How long does it take for a course to be released?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='border-1 border-white w-[90%] ml-15 mt-5 '></div>
                <div className='ml-15 mt-3 mr-20 flex justify-between items-center'>
                    <p className='text-[18px] font-bold text-white'>Can courses be downloaded?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='border-1 border-white w-[90%] ml-15 mt-5 '></div>
                <div className='ml-15 mt-3 mr-20 flex justify-between items-center'>
                    <p className='text-[18px] font-bold text-white'>How often do you update your courses?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='border-1 border-white w-[90%] ml-15 mt-5 '></div>
                <div className='ml-15 mt-3 mr-20 flex justify-between items-center'>
                    <p className='text-[18px] font-bold text-white'>Do you offer certificates of completion?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='border-1 border-white w-[90%] ml-15 mt-5 '></div>
                <div className='ml-15 mt-3 mr-20 flex justify-between items-center'>
                    <p className='text-[18px] font-bold text-white'>Do you offer a free trial?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='border-1 border-white w-[90%] ml-15 mt-5 '></div>
                <div className='ml-15 mt-3 mr-20 flex justify-between items-center'>
                    <p className='text-[18px] font-bold text-white'>Do you offer a student discount?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='border-1 border-white w-[90%] ml-15 mt-5 '></div>
                <div className='ml-15 mt-3 mr-20 flex justify-between items-center'>
                    <p className='text-[18px] font-bold text-white'>Do you have team plans?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>

                <div className='h-27 w-[80%] bg-black mt-20 ml-30 flex justify-center items-center rounded-lg'>
                    <MdOutlineEmail  size={24} color='#fff'/>
                    <p className='text-white text-sm ml-2'>Still need help? <span className='text-sm text-[#fc706b] font-bold '>support@frontendmasters.com</span></p>
                </div>
                
            </div>
        </>
    )
}

export default Question
