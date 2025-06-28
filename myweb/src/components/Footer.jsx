import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className='h-auto w-full  '>
        <div className='h-76 w-full  bg-[#000000] pr-10 pl-15 pt-12 '>
            <div className='flex ml-[80%]  gap-3'>
            <FaSquareXTwitter />
            <img className='h-9 w-10 '  src="/twitter.svg" alt="" />
            <img className='h-9 w-10 ' src="/linkin.svg" alt="" />
            <img className='h-9 w-10 ' src="/facebook-icon.svg" alt="" />
            <img className='h-9 w-10 ' src="/inst.svg" alt="" />
            </div>
            <div className='w-full mt-4 flex justify-between '>
                <img className='h-10 w-55' src="/logo.svg" alt="" />
                <div className='flex gap-3'>
                <img className='' src="/apple.svg" alt="" />
                <img src="/playstore.svg" alt="" />
                </div>
            </div>
            <div className='flex justify-between mt-8 '>
                <div className='flex gap-5'>
                <p className='text-sm text-[#aaaaaa]'>Courses</p>
                <p className='text-sm text-[#aaaaaa]'>Learn</p>
                <p className='text-sm text-[#aaaaaa]'>Workshops</p>
                <p className='text-sm text-[#aaaaaa]'>Topics</p>
                <p className='text-sm text-[#aaaaaa]'>Teachers</p>
                <p className='text-sm text-[#aaaaaa]'>Reviews</p>
                <p className='text-sm text-[#aaaaaa]'>Guides</p>
                <p className='text-sm text-[#aaaaaa]'>Blog</p>
                <p className='text-sm text-[#aaaaaa]'>FAQ</p>
                <p className='text-sm text-[#aaaaaa]'>Login</p>
                <p className='text-sm text-[#aaaaaa]'>Join Now</p>

                </div>
                <div>
                    <p className='text-sm text-[#aaaaaa]'>Contact: support@frontendmasters.com</p>
                </div>
            </div>
            <div className='border-1 border-[#aaaaaa] w-full mt-8'></div>
            <div className='flex justify-between mt-8'>
                <p className='text-sm text-[#aaaaaa] '>Frontend Masters is proudly made in Minneapolis, MN</p>
                <div>
                    <p className='text-sm text-[#aaaaaa] '>© 2025 Frontend Masters ·<span className='text-sm font-semibold text-[#aaaaaa]'>Terms of Service · Privacy Policy</span></p>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Footer
