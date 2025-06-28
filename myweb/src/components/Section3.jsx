import React from 'react'

const Section3 = () => {
  return (
    <div>
      <div className='flex w-full h-auto'>
                    <div className='w-[55%] h- '>
                        <h1 className='text-[35px] mt-23 pl-18 text-white font-bold'>Learn From the Best Teachers</h1>
                        <p className='text-[15px] text-white font-normal pl-18 pr-18 mt-3'>At Frontend Masters, we pride ourselves on offering courses designed and taught by leading experts actively employing their skills at renowned companies such as Netflix, Spotify, Google, and Stripe. Our curriculum is continually refreshed to align with the most recent advancements, guaranteeing that our learners are equipped with industry-standard best practices and cutting-edge techniques.</p>
                        <div className='flex gap-10 ml-20'>
                            <a href="/courses">
                            <div className='h-10 w-40 cursor-pointer bg-[#c02d28] rounded-2xl mt-5 text-[14px] leading-none text-white flex items-center justify-center'>
                                <h2 >Browes Our Courses</h2>
                            </div>
                            </a>
                            <div className='h-10 w-40 bg-[#c95018] cursor-pointer rounded-2xl mt-5 text-[14px] text-white flex items-center justify-center'>
                               <a href="/learn">
                               <h2 >View Learning Paths</h2>
                               </a> 
                            </div>
                        </div>
                    </div>
                    <div className='w-[45%]  '>
                        <div className='mt-15 mr-15 flex'>
                            <video
                                className="w-full max-w-2xl rounded-md shadow-lg"
                                poster="./public/poster.webp"
                                controls
                            >
                                <source src="./public/video.mp4" type="video/mp4"   />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                
                <div className='flex h-auto justify-between px-20 '>
                    <div className='w-full leading-[45px]'>
                        <div className=''>
                            <p className='text-[55px]  mt-22 ml-20 font-bold buttom-0 text-[#c44d42]'>2<span className='text-[#d8532b]'>00+</span></p>
                            <p className='text-[20px] text-white ml-17 top-0 '>In-deth courses</p>
                        </div>
                    </div>
                    <div className='w-full leading-[45px]'>
                        <div className=''>
                            <p className='text-[55px] w-15 mt-22 ml-20 font-bold buttom-0 text-[#c44d42]'>2<span className='text-[#d8532b]'>1</span></p>
                            <p className='text-[18px] text-white ml-15 top-0 '>Learning Path</p>
                        </div>
                    </div>
                    <div className='w-full leading-none mt-21'>
                        <div className=''>
                            <img className='h-15 w-32  ml-15' src="/star.png" alt="" />
                            <p className='text-[18px] text-white ml-10 top-0 '>Industry Leading Experts</p>
                        </div>
                    </div>
                    <div className='w-full leading-none mt-16'>
                        <div className=''>
                            <img className='h-20 w-28  ml-20' src="/interactive.webp" alt="" />
                            <p className='text-[15px] text-white ml-12 top-0 '>Live Interactive Workshops</p>
                        </div>
                    </div>

                </div>
    </div>
  )
}

export default Section3
