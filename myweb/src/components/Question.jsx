import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";


const Question = () => {
    return (
        <>
            <div className=' h-auto w-full bg-[#333333] pb-20 '>
                <div className='heading-4 flex flex-col justify-center gap-4 items-center pt-20'>
                    <img src="/Question-marks.svg" alt="" />
                    <h1 className='sm:text-5xl text-3xl text-center font-bold text-white '>Frequently Asked Questions</h1>
                </div>
                <div className='line border-1 border-white sm:w-[90%] w-[88%] sm:ml-15 ml-5 mt-15 '></div>
                <div className=' sm:ml-15 ml-5 mt-3 sm:mr-20 mr-5 flex justify-between items-center'>
                    <p className='sm:text-[18px] text-[15px] font-bold text-white'>What is the difference between a workshop and a course?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='line border-1 border-white sm:w-[90%] w-[88%] sm:ml-15 ml-5 mt-5 '></div>
                <div className=' sm:ml-15 ml-5 mt-3 sm:mr-20 mr-5 flex justify-between items-center'>
                    <p className='sm:text-[18px] text-[15px] font-bold text-white'>How long does it take for a course to be released?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='line border-1 border-white sm:w-[90%] w-[88%] sm:ml-15 ml-5 mt-5 '></div>
                <div className='sm:ml-15 ml-5 mt-3 sm:mr-20 mr-5 flex justify-between items-center'>
                    <p className='sm:text-[18px] text-[15px] font-bold text-white'>Can courses be downloaded?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='line border-1 border-white sm:w-[90%] w-[88%] sm:ml-15 ml-5 mt-5 '></div>
                <div className='sm:ml-15 ml-5 mt-3 sm:mr-20 mr-5 flex justify-between items-center'>
                    <p className='sm:text-[18px] text-[15px] font-bold text-white'>How often do you update your courses?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='line border-1 border-white sm:w-[90%] w-[88%] sm:ml-15 ml-5 mt-5 '></div>
                <div className='sm:ml-15 ml-5 mt-3 sm:mr-20 mr-5 flex justify-between items-center'>
                    <p className='sm:text-[18px] text-[15px] font-bold text-white'>Do you offer certificates of completion?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='line border-1 border-white sm:w-[90%] w-[88%] sm:ml-15 ml-5 mt-5 '></div>
                <div className='sm:ml-15 ml-5 mt-3 sm:mr-20 mr-5 flex justify-between items-center'>
                    <p className='sm:text-[18px] text-[15px] font-bold text-white'>Do you offer a free trial?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='line border-1 border-white sm:w-[90%] w-[88%] sm:ml-15 ml-5 mt-5 '></div>
                <div className='sm:ml-15 ml-5 mt-3 sm:mr-20 mr-5 flex justify-between items-center'>
                    <p className='sm:text-[18px] text-[15px] font-bold text-white'>Do you offer a student discount?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>
                <div className='line border-1 border-white sm:w-[90%] w-[88%] sm:ml-15 ml-5 mt-5 '></div>
                <div className='sm:ml-15 ml-5 mt-3 sm:mr-20 mr-5 flex justify-between items-center'>
                    <p className='sm:text-[18px] text-[15px] font-bold text-white'>Do you have team plans?</p>
                    <IoIosArrowDown size={24} color="#fff" />
                </div>

                <div className='h-27 w-[80%] bg-black mt-20 sm:ml-30 ml-10 pl-10 flex justify-center items-center rounded-lg'>
                    <MdOutlineEmail  size={24} color='#fff' className='icon-mail'/>
                    <p className='text-white text-sm ml-2'>Still need help? <span className='text-sm text-[#fc706b] font-bold '>support@frontendmasters.com</span></p>
                </div>
                
            </div>
        </>
    )
}

export default Question
