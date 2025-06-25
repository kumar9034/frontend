import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import Footer from './Footer';
import Section3 from './section3';
import CourseCard from './Pages/Second';

const Secondpage = () => {

    return (
        <div>
            <div className='h-auto w-full bg-[#111111] '>
                <div className='flex items-center w-full justify-center pt-3'>
                    <p className='text-white text-[15px] font-bold'>Join us live online ! <span className='text-[#c02d28]'>API Design in Node.js, v5  </span>on Aug 13, 2025.</p>
                </div>

                <div className=' w-[90%]  items-center justify-center flex flex-col'>
                    <h1 className='text-white font-bold text-[2rem] mt-20  ml-20'>Gain Practical Tech Skills from Experts You Can Trust</h1>
                    <p className='text-white text-[15px] ml-5'>JavaScript, React, and TypeScript to Node.js and Backend (Go, Git, Docker, & More)</p>
                    <div className='flex gap-13 mt-17 ml-20'>
                        <img className='w-20' src="./public/javascript.svg" alt="" />
                        <img className='w-20' src="./public/react.svg" alt="" />
                        <img className='w-20' src="./public/typescript.svg" alt="" />
                        <img className='w-20' src="./public/database.svg" alt="" />
                        <img className='w-20' src="./public/node js.svg" alt="" />
                        <img className='w-20' src="./public/nextjs.svg" alt="" />
                        <img className='w-20' src="./public/go.svg" alt="" />
                    </div>
                    <div className='pt-20 flex justify-center items-center ml-20 mb-20'>
                        <p className='text-[15px] font-bold text-white '>Popular Learning Paths: <span className='text-[#fc706b]'>Beginner </span>• <span className='text-[#fc706b]'>Professional</span> • <span className='text-[#fc706b]'>Fullstack</span></p>
                    </div>
                </div>

            </div>

            <div className='h-auto w-full  bg-[#333333] '>
                <Section3 />

                <div className='h-77 w-full bg-[#111111] flex flex-col  items-center justify-center '>
                    <h1 className='text-white flex items-center  text-[36px] font-bold'>Not sure where to get started?</h1>
                    <p className='text-white mt-3 text-[16px]'>Answer three short questions and we'll recommend the best learning path for your experience level and goals</p>
                    <div className='h-10 flex justify-center items-center w-35 bg-red-600 rounded-2xl text-[15px] mt-10 font-semibold  text-white '>Take the Quiz</div>
                </div>
                <div className='h-auto w-full bg-[#333333] ' >
                    <div className='h-40 w-full pt-12 flex flex-col items-center '>
                        <h1 className='text-4xl text-white font-bold  '>Upskill Your Software Development Team</h1>
                        <p className='text-[24px] mt-2 font-bold text-white'>Learn together and apply consistent standards and best practices across projects.</p>
                        <p className='text-[18px] font-sm mt-1 text-white '>Save 37% over individual plans with 10 team members or more!</p>
                        <div className='h-13 w-41 bg-red-600  text-[14px] font-[400] flex justify-center py-2 text-white mt-7 rounded-2xl'>Browse Team Plans</div>
                    </div>

                    <div className='flex w-full h-auto pt-30 flex gap-5 items-center pb-10  px-10'>
                        <div className=' w-100 h-auto bg-black mb-10 rounded-lg px-3 py-3'>
                            <RiDoubleQuotesL color="#de5625" size={30} />
                            <p className='text-white flex-wraps text-[16px] mx-6 my-3  '>When, without any prompting; your manager offers you a Frontend Masters subscription you know you picked a good place to work 😍</p>
                            <div className='flex '>
                                <div className='h-20 w-20 bg-red-200 rounded-full mx-6 mt-9'>
                                    <img className='rounded-full object-cover' src="./public/girl.jpg" alt="" />
                                </div>
                                <div className='mt-11 leading-none'>
                                    <h2 className='text-white font-bold text-[20px]'>Sarah O'Brien</h2>
                                    <p className='text-[#aaaaaa] text-[16px] mt-1'>sarocodes</p>
                                </div>
                            </div>

                        </div>
                        <div className=' w-100 h-auto bg-black mb-10 rounded-lg px-3 py-3'>
                            <RiDoubleQuotesL color="#de5625" size={30} />
                            <p className='text-white flex-wraps text-[16px] mx-6 my-3  '>Frontend Masters I’ve had a license for at least 4 years now. Got one for all my team when I was a team lead. The content is first class and the price is very cheap especially considering what you would pay to take that workshop in person.</p>
                            <div className='flex '>
                                <div className='h-20 w-20 bg-red-200 rounded-full mx-6 mt-9'>
                                    <img className='rounded-full object-cover' src="./public/second-girl.jpg" alt="" />
                                </div>
                                <div className='mt-11 leading-none'>
                                    <h2 className='text-white font-bold text-[20px]'>Debbie O'Brien</h2>
                                    <p className='text-[#aaaaaa] text-[16px] mt-1'>debs_obrien</p>
                                </div>
                            </div>

                        </div>
                        <div className=' w-100 h-auto bg-black mb-10 rounded-lg px-3 py-3'>
                            <RiDoubleQuotesL color="#de5625" size={30} />
                            <p className='text-white flex-wraps text-[16px] mx-6 my-3  '>Our team got a Frontend Masters subscription and it has been super helpful, especially for the new devs on our team who aren't as familiar with frontend technologies. I highly recommend giving them a try. 🙂</p>
                            <div className='flex '>
                                <div className='h-20 w-20 bg-red-200 rounded-full mx-6 mt-9'>
                                    <img className='rounded-full object-cover' src="./public/boy.jpg" alt="" />
                                </div>
                                <div className='mt-11 leading-none'>
                                    <h2 className='text-white font-bold text-[20px]'>Augustus</h2>
                                    <p className='text-[#aaaaaa] text-[16px] mt-1'>augburto</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='h-93 w-full bg-[#1f1f1f] flex flex-col pt-16 items-center'>
                    <h1 className='text-4xl font-bold text-white '>Learn Straight from Experts Who Shape the Modern Web</h1>
                    <p className='text-2xl font-bold text-white '>Our courses are taught by developers from these top companies (and more)</p>
                    <div className='h-10 w-full  flex pl-71 gap-10 mt-12'>
                        <img className='h-10 w-40 ' src="./public/microsoft.svg" alt="" />
                        <img className='h-10 w-40' src="./public/netflix.svg" alt="" />
                        <img className='h-10 w-40' src="./public/stripe.svg" alt="" />
                        <img className='h-10 w-40' src="./public/spotify.svg" alt="" />
                    </div>
                    <div className='h-10 w-35 bg-red-600 rounded-2xl mt-15 flex justify-center py-2  text-[15px] text-white'>Get Full Access</div>
                </div>
                <Footer />
                
            </div>
        </div>
    )
}

export default Secondpage