import React from 'react'
import { FaSearch } from "react-icons/fa";
import Navbar from '../Navbar';
const Thirdpage = () => {
  return (
    <div>
            <Navbar fixed="" bg='#37140f' text='text-[#aaaaaa]'/>
            <div className='h-auto w-full flex flex-col   bg-[#222222]  '>
                <div className='w-full flex flex-col gap-10 items-center pt-33 '>
                    <input 
                    className='w-100 pl-4 rounded-lg text-[17px] h-10 outline-none bg-white'
                    type="text" placeholder='Username or Email' />
                    <input 
                    className='w-100 pl-4 rounded-lg text-[17px] h-10 outline-none bg-white'
                    type="password"  placeholder='Passwords' />
                </div>
                <div className='flex flex-col gap-5 items-center mt-5'>
                    <p className='text-[14px] font-bold text-[#fc706b] ml-64'>Forgot you Password?</p>
                    <div className='h-10 w-100 rounded-3xl bg-[#c02d28] flex items-center text-white text-[17px] justify-center '>continue</div>
                </div>
            <div className='text-[#fc706b] mt-10 flex justify-center items-center'>
                <p>Login with Single Sign-On</p>
            </div>
            <div className='w-full h-13 mt-10 bg-black'></div>
            </div>
    </div>
  )
}

export default Thirdpage
