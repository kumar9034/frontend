import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import Footer from '../Footer';
import { LuUsers } from "react-icons/lu";

const Pricing = () => {
    return (
        <div>
            <div className='w-full h-20 flex bg-[#37140f] pt-2 border-b-2 border-[#c95018]'>
                <a href="/">
                    <img
                        className=' h-[45%] w-[80%] ml-10 mt-3 mr-10 '
                        src="/logo.svg" alt="" />
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
                    <a href="/tutorial">
                        <h3 className='font-bold text-[#aaaaaa] cursor-pointer text-[16px] '>Tutorials <span className='bg-[#04ba71] h-3 w-4 rounded px-1 text-white text-2'>New</span></h3>
                    </a>
                    <a href="/pricing">
                        <h3 className='font-bold text-[#aaaaaa] text-[16px] cursor-pointer '>Pricing</h3>
                    </a>
                </div>
                <div className='ml-[10%] flex'>
                    <div className='mt-6'>
                        <FaSearch color="white" size={24} />
                    </div>
                    <a href="/pricing">
                        <div className='w-30 h-10 mt-4 ml-8 cursor-pointer rounded-2xl bg-[#c02d28] text-white text-[15px] font-bold items-center flex justify-center'>
                            Join Now
                        </div>
                    </a>
                    <div className='mt-5 ml-8'>
                        <a href="/login">
                            <h3 className='text-[18px] cursor-pointer font-bold text-white'>Login</h3>
                        </a>
                    </div>
                </div>
            </div>
            <div className='h-auto w-full bg-[#484848]'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-[48px] mt-10 font-bold text-white '>Master Modern JavaScript to Full Stack</h1>
                    <h2 className='text-[24px] mt-1 font-bold text-white '>200+ Courses, Learning Paths, & Mobile Apps for "On the Go" Learning</h2>
                </div>
                <div className='flex h-20 items-center  ml-104 mt-13'>
                    <div className='h-15 w-15 rounded-full bg-[#484848] p-[0.1%] relative'>
                        <img className='rounded-full object-cover' src="/third.jpg" alt="" />
                    </div>
                    <div className='h-15 w-15 rounded-full bg-[#484848] p-[0.1%]  absolute ml-10 z-9'>
                        <img className='rounded-full object-cover' src="/secondboy.jpg" alt="" />
                    </div>
                    <div className='h-15 w-15 rounded-full bg-[#484848] p-[0.1%]  absolute ml-20 z-10'>
                        <img className='rounded-full object-cover' src="/secondgirl.jpg" alt="" />
                    </div>
                    <div className='h-15 w-15 rounded-full bg-[#484848] p-[0.1%]  absolute ml-30 z-99'>
                        <img className='rounded-full object-cover' src="/boys.jpg" alt="" />
                    </div>
                    <div className='h-15 w-15 rounded-full bg-[#484848] p-[0.1%]  absolute ml-40 z-99'>
                        <img className='rounded-full object-cover' src="/girls.webp" alt="" />
                    </div>
                    <div className='flex flex-col h-20 mt-8 ml-44 gap-1 '>
                        <div className='flex gap-1'>
                            <FaStar size={24} color='#f09e14' />
                            <FaStar size={24} color='#f09e14' />
                            <FaStar size={24} color='#f09e14' />
                            <FaStar size={24} color='#f09e14' />
                            <FaStar size={24} color='#f09e14' />
                        </div>
                        <div>
                            <p className='text-[17px] font-semibold text-white'>Loved by 100K+ developers</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between pt-28 pb-20 gap-10 px-15 '>
                    <div className='w-[50%] bg-[#222222] h-[34rem] rounded-lg '>
                        <div className='flex text-white gap-3 text-[18px]   font-semibold mt-4 ml-50'>
                            <LuUser size={25} />
                            <p>For Individuals</p>
                        </div>
                        <div className='pl-5 pr-5 pt-5 flex gap-x-5 h-full w-full '>
                            {/* inner firstcard  */}

                            <div className='w-[48%] rounded-lg h-[70%]  cursor-pointer p-5 bg-[#131313]'>
                                <div className='text-[20px] text-white font-bold '>
                                    <h2>Monthly</h2>
                                    <p className='text-[35px] font-bold '>$39 <span className='text-[10px] text-[#888888] font-[100]'>per month</span></p>
                                </div>
                                <div className='w-50 mt-10 border-[0.01rem] border-[#888888]'></div>
                                <div>
                                    <p className='text-[14px] font-[100] pt-5 px-2 text-white '>Access all in-depth courses, workshops, and mobile apps.</p>
                                </div>
                                <div className='h-9 w-50 mt-27 bg-[#3e3e3e] hover:bg-[#df3f3a] flex justify-center items-center  rounded-xl'>
                                    <p className='text-white text-[15px]'>Start Learning</p>
                                </div>
                            </div>
                            {/* inner secondcard */}

                            <div className='w-[48%] rounded-lg h-[70%] pt-2 border-1 border-[#229966]  bg-[#131313] '>
                                <span className='w-30 h-20 p-1 ml-43  text-sm font-bold rounded-l-lg bg-[#229966]'>Save 17%</span>
                                <div className='text-[20px] text-white font-bold ml-5'>
                                    <h2>Monthly</h2>
                                    <p className='text-[35px] font-bold '>$390 <span className='text-[10px] text-[#888888] font-[100]'>per month</span></p>
                                    <p className='text-[10px] font-[100] text-[#888888]'>$32.50 /month billed yearly</p>
                                </div>
                                <div className='w-50 mt-7 ml-5 border-[0.01rem] border-[#888888]'></div>
                                <div>
                                    <p className='text-[14px] ml-5 font-[100] pt-5 px-2 text-white '>Billed yearly. Access all in-depth courses, workshops, and mobile apps.</p>
                                </div>
                                <div className='btn h-9 m-5 w-50 mt-18 bg-[#3e3e3e] hover:bg-[#df3f3a] flex justify-center items-center  rounded-xl'>
                                    <p className='text-white text-[15px]'>Start Learning</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-[50%] bg-[#222222] flex-col flex rounded-lg h-[40rem]'>
                        <div className='flex text-white gap-3 text-[18px]   font-semibold mt-4 ml-50'>
                            <LuUsers size={25} />
                            <p>For Individuals</p>
                        </div>
                        <div className='pl-5 pr-5 pt-5 flex gap-x-5 h-[45rem] w-full '>
                            {/* inner firstcard  */}

                            <div className='w-[48%] rounded-lg h-[70%] pt-2 cursor-pointer   bg-[#131313]'>
                                <span className='w-30 h-20 p-1 ml-43  text-sm font-bold rounded-l-lg bg-[#229966]'>Save 37%</span>
                                <div className='text-[20px] ml-5 text-white font-bold '>
                                    <h2>Monthly</h2>
                                    <p className='text-[35px] font-bold '>$24.50 <span className='text-[10px] text-[#888888] font-[100]'>per seat,per month</span></p>
                                </div>
                                <div className='w-50 mt-5 ml-5 border-[0.01rem] border-[#888888]'></div>
                                <div>
                                    <p className='text-[14px] ml-5 font-[100] pt-5 px-2 text-white '><li>Access all in-depth courses for teams of 10+ users.</li><li>Reporting and reassignable seats.</li></p>
                                </div>
                                <div className='h-9 ml-5 w-50 mt-8 bg-[#3e3e3e] hover:bg-[#df3f3a] flex justify-center items-center  rounded-xl'>
                                    <p className='text-white text-[15px] '>Start Learning</p>
                                </div>
                            </div>
                            {/* inner secondcard */}

                            <div className='w-[48%] rounded-lg h-[70%] border-1 border-[#229966] pt-3 bg-[#131313] '>
                                <span className='w-30 h-20 p-1 ml-43  text-sm font-bold rounded-l-lg bg-[#229966]'>Save 37%</span>
                                <div className='text-[20px] ml-5 text-white font-bold '>
                                    <h2>Yearly</h2>
                                    <p className='text-[35px] font-bold '>$245 <span className='text-[10px] text-[#888888] font-[100]'>per seat, per year</span></p>
                                    <p className='text-[10px] text-[#888888] font-[100]'>$20.42 /seat /month billed yearly</p>
                                </div>
                                <div className='w-50 mt-4 ml-5 border-[0.01rem] border-[#888888]'></div>
                                <div>
                                    <p className='text-[14px] ml-5 font-[100] pt-5 px-2 text-white '><li>
                                        Billed yearly. Access all in-depth courses for teams of 10+ users.</li><li>Reporting and reassignable seats.</li></p>
                                </div>
                                <div className='btn h-9 w-50 mt-3 ml-5 bg-[#3e3e3e] hover:bg-[#df3f3a] cursor-pointer flex justify-center items-center  rounded-xl'>
                                    <p className='text-white text-[15px]  '>Start Learning</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col  mb-20 items-center'>
                            <p className='text-sm text-[#888888] '>Pay via invoice or for enterprise plans, email</p>
                            <p className='text-sm text-[#df3f3a] font-bold '>support@frontendmasters.com</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Pricing