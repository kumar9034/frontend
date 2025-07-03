import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = ({bg, fixed, text }) => {
  return (
    <div>
      <div className={`w-full h-20 flex ${fixed} bg-[#37140f] sm:bg-${bg} `}>
        <div className='sm:flex'>
          <Link to='/'>
            <img
              className='logo h-[45%] w-[80%] ml-10 mt-3 mr-10 '
              src="/logo.svg" alt="" />
          </Link>
          <div className='ml-10 block sm:hidden'>
            <MdMenu color='white' size={26} />
          </div>
        </div>
        <div className='hidden sm:block sm:flex mt-4  ml-3 gap-10'>
          <Link to="/feature">
            <h3 className={`font-bold ${text} text-[16px] cursor-pointer`}>Features</h3>
          </Link>
          <Link to="/learn">
            <h3 className={`font-bold ${text} text-[16px] cursor-pointer`}>Learn</h3>
          </Link>
                <Link to="/courses">
            <h3 className={`font-bold ${text} text-[16px] cursor-pointer`}>Courses</h3>
          </Link>
            <Link to="/tutorial">
            <h3 className={`font-bold ${text} text-[16px] cursor-pointer`}>Tutorials <span className='bg-[#04ba71] h-3 w-4 rounded px-1 text-white text-2'>New</span></h3>
          </Link>     
            <Link to="/pricing">
            <h3 className={`font-bold ${text} text-[16px] cursor-pointer`}>Pricing</h3>
          </Link>     </div>
        <div className=' ml-[10%] flex'>
          <div className=' mt-6'>
            <FaSearch color="white" size={24} className='search ' />
          </div>
          <Link to="/pricing">
          <div className='join w-30 h-10 mt-4 ml-8 cursor-pointer rounded-2xl bg-[#c02d28] text-white text-[15px] font-bold items-center flex justify-center'>
            Join Now
          </div>
          </Link>
          <div className='hidden sm:block mt-5 ml-8'>
            <Link to="/login">
              <h3 className='text-[18px] cursor-pointer font-bold text-white'>Login</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
