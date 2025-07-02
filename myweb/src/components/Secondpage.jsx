import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import Footer from './Footer';
import Section3 from './Section3';
import CourseCard from './Pages/Second';

const Secondpage = () => {

    return (
        <div>
            <div className='h-auto w-full bg-[#111111] '>
                <div className='flex sm:items-center w-full justify-center text-center pt-3'>
                    <p className=' text-white sm:text-[15px] text-[15px] font-bold'>Join us live online ! <span className='text-[#c02d28]'>API Design in Node.js, v5  </span>on Aug 13, 2025.</p>
                </div>

                <div className=' sm:w-[75%] w-[85%]  sm:ml-[15%] ml-[10%] flex flex-col '>
                    <h1 className=' text-white font-bold sm:text-[2rem] text-[1.5rem] text-center  sm:mt-20 mt-5 sm:ml-20 '>Gain Practical Tech Skills from Experts You Can Trust</h1>
                    <p className='language text-white text-[15px] sm:ml-45 text-center mt-3'>JavaScript, React, and TypeScript to Node.js and Backend (Go, Git, Docker, & More)</p>
                    <div className=' flex flex-wrap sm:gap-13 gap-7 mt-17 sm:ml-20 '>
                        <img className='icon sm:w-20 w-10' src="/javascript.svg" alt="" />
                        <img className='icon sm:w-20 w-14 ' src="/react.svg" alt="" />
                        <img className='icon sm:w-20 w-14 ' src="/typescript.svg" alt="" />
                        <img className='icon sm:w-20 w-14 ' src="/database.svg" alt="" />
                        <img className='icon sm:w-20 w-14 ' src="/node js.svg" alt="" />
                        <img className='icon sm:w-20 w-14 ' src="/nextjs.svg" alt="" />
                        <img className='icon sm:w-20 w-14 ' src="/go.svg" alt="" />
                    </div>
                    <div className=' pt-20  flex justify-center items-center mb-20'>
                        <p className='sm:text-[15px] text-[14 text-center font-bold text-white '>Popular Learning Paths: <span className='text-[#fc706b]'>Beginner </span>• <span className='text-[#fc706b]'>Professional</span> • <span className='text-[#fc706b]'>Fullstack</span></p>
                    </div>
                </div>

            </div>

            <div className='h-auto w-full   bg-[#333333] '>
                <Section3 />

                <div className=' h-77 w-full bg-[#111111] flex flex-col  items-center justify-center '>
                    <h1 className='text-white flex items-center text-center sm:text-[36px] text-[25px] font-bold px-10'>Not sure where to get started?</h1>
                    <p className='text-white mt-3 text-[16px] text-center px-10'>Answer three short questions and we'll recommend the best learning path for your experience level and goals</p>
                    <div className='h-10 flex justify-center items-center w-35 bg-red-600 rounded-2xl text-[15px] mt-10 font-semibold  text-white '>Take the Quiz</div>
                </div>
                <div className='heading3 h-auto w-full bg-[#333333] ' >
                    <div className='inner-heading h-40 w-full pt-12 flex flex-col items-center '>
                        <h1 className='sm:text-4xl text-2xl text-center px-10 text-white font-bold  '>Upskill Your Software Development Team</h1>
                        <p className='sm:text-[24px] text-[20px] text-center px-10 mt-2 font-bold text-white'>Learn together and apply consistent standards and best practices across projects.</p>
                        <p className='sm:text-[18px] text-[18px] text-center px-10 font-sm mt-1 text-white '>Save 37% over individual plans with 10 team members or more!</p>
                        <a href="/pricing">
                            <div className='btn-2 h-13 w-41 bg-red-600  text-[14px] font-[400] flex justify-center py-4 text-white mt-7 rounded-2xl'>Browse Team Plans</div>
                            </a>
                    </div>

                    <div className=' sm:flex w-full h-auto pt-30 sm:flex gap-5 mt-25 items-center pb-10  sm:px-10 px-5'>
                        <div className='card sm:w-100  h-auto bg-black mb-10 rounded-lg px-3 py-3'>
                            <RiDoubleQuotesL color="#de5625" size={30} />
                            <p className='text-white flex-wraps text-[16px] mx-6 my-3  '>When, without any prompting; your manager offers you a Frontend Masters subscription you know you picked a good place to work 😍</p>
                            <div className='flex '>
                                <div className='h-20 w-20 bg-red-200 rounded-full mx-6 mt-9'>
                                    <img className='rounded-full object-cover' src="/girl.jpg" alt="" />
                                </div>
                                <div className='mt-11 leading-none'>
                                    <h2 className='text-white font-bold text-[20px]'>Sarah O'Brien</h2>
                                    <p className='text-[#aaaaaa] text-[16px] mt-1'>sarocodes</p>
                                </div>
                            </div>

                        </div>
                        <div className=' sm:w-100  h-auto bg-black mb-10 rounded-lg px-3 py-3'>
                            <RiDoubleQuotesL color="#de5625" size={30} />
                            <p className='text-white flex-wraps text-[16px] mx-6 my-3  '>Frontend Masters I’ve had a license for at least 4 years now. Got one for all my team when I was a team lead. The content is first class and the price is very cheap especially considering what you would pay to take that workshop in person.</p>
                            <div className='flex '>
                                <div className='h-20 w-20 bg-red-200 rounded-full mx-6 mt-9'>
                                    <img className='rounded-full object-cover' src="/second-girl.jpg" alt="" />
                                </div>
                                <div className='mt-11 leading-none'>
                                    <h2 className='text-white font-bold text-[20px]'>Debbie O'Brien</h2>
                                    <p className='text-[#aaaaaa] text-[16px] mt-1'>debs_obrien</p>
                                </div>
                            </div>

                        </div>
                        <div className=' sm:w-100  h-auto bg-black mb-10 rounded-lg px-3 py-3'>
                            <RiDoubleQuotesL color="#de5625" size={30} />
                            <p className='text-white flex-wraps text-[16px] mx-6 my-3  '>Our team got a Frontend Masters subscription and it has been super helpful, especially for the new devs on our team who aren't as familiar with frontend technologies. I highly recommend giving them a try. 🙂</p>
                            <div className='flex '>
                                <div className='h-20 w-20 bg-red-200 rounded-full mx-6 mt-9'>
                                    <img className='rounded-full object-cover' src="/boy.jpg" alt="" />
                                </div>
                                <div className='mt-11 leading-none'>
                                    <h2 className='text-white font-bold text-[20px]'>Augustus</h2>
                                    <p className='text-[#aaaaaa] text-[16px] mt-1'>augburto</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> 
                <div className=' sm:h-93 h-auto w-full bg-[#1f1f1f] flex flex-col pt-16 pb-10 items-center'>
                    <h1 className='sm:text-4xl text-[1.7rem] px-10 text-center  font-bold text-white '>Learn Straight from Experts Who Shape the Modern Web</h1>
                    <p className='sm:text-2xl text-[1.2rem] px-10 text-center font-bold text-white '>Our courses are taught by developers from these top companies (and more)</p>
                    <div className=' sm:h-10 h-auto  w-full  sm:flex sm:pl-71 pl-33  mt-12'>
                        <img className=' sm:h-10 h-10 w-40 mt-5 ' src="/microsoft.svg" alt="" />
                        <img className=' sm:h-10 h-8 w-40 mt-5' src="/netflix.svg" alt="" />
                        <img className=' sm:h-10 h-6 w-40 mt-5' src="/stripe.svg" alt="" />
                        <img className=' sm:h-10 h-4 w-40 mt-5' src="/spotify.svg" alt="" />
                    </div>
                    <a href="/pricing">
                    <div className='btn-4 h-10 w-35 bg-red-600 rounded-2xl mt-15 flex justify-center py-2  text-[15px] text-white'>Get Full Access</div>
                    </a>
                </div>
                 <Footer />
                
            </div>
        </div>
    )
}

export default Secondpage