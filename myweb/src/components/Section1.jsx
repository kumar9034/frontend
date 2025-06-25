import React from 'react'

const Section1 = () => {
  return (
    <div>
      <div className='flex '>
          <div className='h-[50%] w-[60%]   mt-[18%] ml-20'>
            <h3 className='text-[25px] text-black font-bold '>In-Depth Frontend & Fullstack Courses</h3>
            <h1 className='text-[3rem] font-bold text-black'>Your Path to Senior Developer and Beyond</h1>
            <div className='flex gap-10'>
              <div className='h-10 w-50 bg-[#c02d28] rounded-2xl mt-10 text-[18px] leading-none text-white flex items-center justify-center'>
                <h2 >Browes Our Courses</h2>
              </div>
              <div className='h-10 w-50 bg-[#c95018] rounded-2xl mt-10 text-[18px] text-white flex items-center cursor-pointer justify-center'>
                <a href="/learn">
                <h2 >View Learning Paths</h2>
                </a>
              </div>
            </div>
          </div >

          <div className='w-[50%]'>
            <div className='h-40 w-[30rem] bg-[#020303] mt-[33rem] ml-10'>
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
