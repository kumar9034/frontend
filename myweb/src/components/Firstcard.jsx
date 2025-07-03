import React from 'react'
import { BsCcSquareFill } from "react-icons/bs";

const Firstcard = ({bg , image, heading, description, time, name}) => {
    return (
        <div className='sm:w-[35rem] w-[100%]  sm:h-93 h-[60%] bg-red-400 flex '>
            <img className='h-93 object-cover relative' src={bg} alt="" />
            <div className=' sm:h-93 sm:w-[33rem] w-[90%] h-[25%] bg-[#000000] mt-56 md:mt-0 absolute sm:p-7 p-5 z-9  sm:ml-8'>
                <h1 className='sm:text-2xl text-lg font-[500] text-[#fc706b]'>{heading}</h1>
                <div className='h-15 flex w-15  mt-3 rounded-full bg-red-800'>
                    <img className='rounded-full object-cover ' src={image} alt="" />
                    <p className='text-md font-[700] ml-3 leading-none mt-4 text-white'>{name}</p>
                </div>
                <p className='sm:block hidden text-sm text-white mt-5'>{description}</p>
            <div className='sm:block hidden mt-4 flex gap-5 '>
                <p className='text-[#aaaaaa] text-sm'>{time}</p>
                <BsCcSquareFill size={23} color='#aaaaaa'/>
            </div>
            <div className='sm:block hidden mt-5 md:flex gap-5 '>
                <div className='h-9 w-40 rounded-3xl flex justify-center items-center  bg-[#c95018]'>
                    <p className='text-sm font-[100]  text-white'>Watch Free Preview</p>
                </div>
                <div className='h-9 w-40 rounded-3xl flex justify-center items-center  bg-[#c02d28]'>
                    <p className='text-sm font-[100]  text-white'>Watch Free Preview</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Firstcard
