import React from 'react'
import { BsCcSquareFill } from "react-icons/bs";

const card = ({bg , image, heading, description, time, name}) => {
    return (
        <div className='w-[35rem] h-93 bg-red-400 flex '>
            <img className='h-93 object-cover relative' src={bg} alt="" />
            <div className=' h-93 w-[33rem] bg-[#000000] absolute p-7 z-9 ml-8'>
                <h1 className='text-2xl font-[500] text-[#fc706b]'>{heading}</h1>
                <div className='h-15 flex w-15  mt-3 rounded-full bg-red-800'>
                    <img className='rounded-full object-cover ' src={image} alt="" />
                    <p className='text-md font-[700] ml-3 leading-none mt-4 text-white'>{name}</p>
                </div>
                <p className='text-sm text-white mt-5'>{description}</p>
            <div className='mt-4 flex gap-5 '>
                <p className='text-[#aaaaaa] text-sm'>{time}</p>
                <BsCcSquareFill size={23} color='#aaaaaa'/>
            </div>
            <div className='mt-10 flex gap-5 '>
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

export default card
