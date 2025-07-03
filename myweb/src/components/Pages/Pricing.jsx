import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import Footer from '../Footer';
import { LuUsers } from "react-icons/lu";
import Navbar from '../Navbar';

const Pricing = () => {
    return (
        <div>
            <Navbar text='text-[#aaaaaa]'/>
            <div className='h-auto w-full bg-[#484848]'>
                <div className='flex flex-col px-10 items-center'>
                    <h1 className='sm:text-[48px]  text-[38px] text-center mt-10 font-bold text-white '>Master Modern JavaScript to Full Stack</h1>
                    <h2 className='sm:text-[24px] text-[18px] text-center mt-1 font-bold text-white '>200+ Courses, Learning Paths, & Mobile Apps for "On the Go" Learning</h2>
                </div>
                <div className='flex h-20 items-center  sm:ml-104 p mt-13'>
                    <div className='sm:h-17 hidden sm:block h-10 sm:w-18 w-14 rounded-full bg-[#484848] p-[0.1%] relative'>
                        <img className='rounded-full object-cover w-full h-full' src="/third.jpg" alt="" />
                    </div>
                    <div className='sm:h-17 h-10 sm:w-18 w-14 rounded-full bg-[#484848] p-[0.1%]  absolute ml-10 z-9'>
                        <img className='rounded-full object-cover' src="/secondboy.jpg" alt="" />
                    </div>
                    <div className='sm:h-16 h-10 sm:w-17 w-14 rounded-full bg-[#484848] p-[0.1%]  absolute ml-20 z-10'>
                        <img className='rounded-full object-cover' src="/secondgirl.jpg" alt="" />
                    </div>
                    <div className='sm:h-16 h-10 sm:w-17 w-14 rounded-full bg-[#484848] p-[0.1%]  absolute ml-30 z-99'>
                        <img className='rounded-full object-cover' src="/boys.jpg" alt="" />
                    </div>
                    <div className='sm:h-16 h-10 sm:w-17 w-14 rounded-full bg-[#484848] p-[0.1%]  absolute ml-40 z-99'>
                        <img className='rounded-full object-cover' src="/girls.webp" alt="" />
                    </div>
                    <div className='flex flex-col h-20 mt-8 sm:ml-44 ml-55 gap-1 '>
                        <div className='flex gap-1'>
                            <FaStar size={24} color='#f09e14' />
                            <FaStar size={24} color='#f09e14' />
                            <FaStar size={24} color='#f09e14' />
                            <FaStar size={24} color='#f09e14' />
                            <FaStar size={24} color='#f09e14' />
                        </div>
                        <div>
                            <p className='sm:text-[17px] text-[15px] font-semibold text-white'>Loved by 100K+ developers</p>
                        </div>
                    </div>
                </div>
                <div className='sm:flex justify-between pt-28 pb-20 gap-10  sm:px-15 px-5 '>
                    <div className='sm:w-[50%] w-full  bg-[#222222] sm:h-[34rem] h-auto rounded-lg '>
                        <div className='flex text-white gap-3 text-[18px]   font-semibold mt-4 pt-5 sm:ml-50 ml-20'>
                            <LuUser size={25} />
                            <p>For Individuals</p>
                        </div>
                        <div className='pl-5 pr-5 pt-5 sm:flex gap-x-5 pb-5 mb-5 h-full w-full '>
                            {/* inner firstcard  */}

                            <div className='sm:w-[48%] rounded-lg h-[70%] mb-5 cursor-pointer p-5 bg-[#131313]'>
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

                            <div className='sm:w-[48%] w-full rounded-lg h-[70%] pt-2 border-1 border-[#229966]  bg-[#131313] '>
                                <span className='w-30 h-20 p-1 sm:ml-43 ml-54 text-sm font-bold rounded-l-lg bg-[#229966]'>Save 17%</span>
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
                    <div className='sm:w-[50%] w-full bg-[#222222] flex-col sm:flex rounded-lg pt-5 pb-5 sm:h-[40rem] h-auto'>
                        <div className='flex text-white gap-3 text-[18px]   font-semibold mt-4 sm:ml-50 ml-20'>
                            <LuUsers size={25} />
                            <p>For Individuals</p>
                        </div>
                        <div className='pl-5 pr-5 pt-5 sm:flex gap-x-5 sm:h-[45rem] mb-5  w-full '>
                            {/* inner firstcard  */}

                            <div className='sm:w-[48%] w-full rounded-lg sm:h-auto pt-2 cursor-pointer mb-10 pb-5  bg-[#131313]'>
                                <span className='w-30 h-20 p-1 sm:ml-43 ml-[13.5rem] text-sm font-bold rounded-l-lg bg-[#229966]'>Save 37%</span>
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

                            <div className='sm:w-[48%] w-full rounded-lg sm:h-auto h-[50%] border-1 border-[#229966] pt-3 pb-5 bg-[#131313] '>
                                <span className='w-30 h-20 p-1 sm:ml-43 ml-[13.4rem] text-sm font-bold rounded-l-lg bg-[#229966]'>Save 37%</span>
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
                                <div className='btn h-9 w-50 mt-8 ml-5 bg-[#3e3e3e] hover:bg-[#df3f3a] cursor-pointer flex justify-center items-center  rounded-xl'>
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