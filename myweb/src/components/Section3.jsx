import React from 'react'
import { Link } from 'react-router-dom'

const Section3 = () => {
    return (
        <div>
            <div className=' sm:flex w-full h-auto pt-10 '>
                <div className='sm:w-[45%] w-full  '>
                    <div className=' sm:mt-15  sm:ml-15 flex'>
                        <video
                            className="w-full max-w-2xl px-5 rounded-md shadow-lg"
                            poster="/poster.webp"
                            controls
                        >
                            <source src="/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className=' sm:w-[55%] w-88  '>
                    <h1 className='sm:text-[35px] text-[25px] sm:mt-23 mt-10 sm:pl-18 px-1 text-center text-white font-bold'>Learn From the Best Teachers</h1>
                    <p className='sm:text-[15px] text-center text-[14px] text-white font-normal sm:pl-18 pl-7 pr-18 mt-3'>At Frontend Masters, we pride ourselves on offering courses designed and taught by leading experts actively employing their skills at renowned companies such as Netflix, Spotify, Google, and Stripe. Our curriculum is continually refreshed to align with the most recent advancements, guaranteeing that our learners are equipped with industry-standard best practices and cutting-edge techniques.</p>
                    <div className=' sm:flex gap-10 sm:ml-20 px-5 '>
                        <Link to="/courses">
                            <div className=' h-10 sm:w-40 w-[20rem] cursor-pointer bg-[#c02d28] rounded-2xl mt-5 text-[14px] leading-none text-white flex items-center justify-center'>
                                <h2 >Browes Our Courses</h2>
                            </div>
                        </Link>
                        <div className=' h-10 sm:w-40 w-[20rem] bg-[#c95018] cursor-pointer rounded-2xl mt-5 text-[14px] text-white flex items-center justify-center'>
                            <Link to="/learn">
                                <h2 >View Learning Paths</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' sm:flex flex-wrap   pl-30 md:pl-0 py-10 justify-center items-center gap-20 text-white'>
                <div className='feature w-[10rem]'>
                    <p className='text-[55px] w-[2rem] font-bold text-[#c44d42]'>
                        2<span className='text-[#d8532b]'>00+</span>
                    </p>
                    <p className='text-[20px]  mt-2'>In-Depth Courses</p>
                </div>

                <div className='feature w-[10rem]  '>
                    <p className='text-[55px] w-[5rem] ml-4 font-bold text-[#c44d42]'>
                        2<span className='text-[#d8532b] '>1</span>
                    </p>
                    <p className='text-[20px] w-[10rem] mt-2'>Learning Paths</p>
                </div>

                <div className='feature w-[10rem]  text-center '>
                    <img className='h-12 mb-2 w-[7rem] h-[4rem] ml-3'  src="/star.png" alt="Star Icon" />
                    <p className='text-[18px] w-[10rem]'>Industry Leading Experts</p>
                </div>

                <div className='feature w-[10rem] flex flex-col justify-center items-center'>
                    <img className='h-14  w-[7rem] h-[5rem]' src="/interactive.webp" alt="Workshop Icon" />
                    <p className='text-[18px] w-[10rem] text-center'>Live Interactive Workshops</p>
                </div>
            </div>

        </div >
    )
}

export default Section3
