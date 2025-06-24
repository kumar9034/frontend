import React from 'react'
import { FaSearch } from "react-icons/fa";
import Coursescard from '../Coursescard'

const Second = () => {
  return (
    <>
      <div className='w-full h-20 flex bg-[#37140f] pt-2 border-b-2 border-[#c95018]'>
        <a href="/">
          <img
            className=' h-[45%] w-[80%] ml-10 mt-3 mr-10 '
            src="../public/logo.svg" alt="" />
        </a>
        <div className='flex mt-4 ml-3 gap-10'>
          <a href="/feature">
            <h3 className='font-bold text-[#aaaaaa] text-[16px] coursor-pointer '>Features</h3>
          </a>
          <a href="/learn">
            <h3 className='font-bold text-[#aaaaaa] text-[16px] coursor-pointer '>Learn</h3>
          </a>
          <h3 className='font-bold text-[#aaaaaa] text-[16px] '>Courses</h3>
          <h3 className='font-bold text-[#aaaaaa] text-[16px] '>Tutorials <span className='bg-[#04ba71] h-3 w-4 rounded px-1 text-white text-2'>New</span></h3>
          <h3 className='font-bold text-[#aaaaaa] text-[16px] '>Pricing</h3>
        </div>
        <div className='ml-[10%] flex'>
          <div className='mt-6'>
            <FaSearch color="white" size={24} />
          </div>
          <div className='w-30 h-10 mt-4 ml-8 rounded-2xl bg-[#c02d28] text-white text-[15px] font-bold items-center flex justify-center'>
            Join Now
          </div>
          <div className='mt-5 ml-8'>
            <h3 className='text-[18px] font-bold text-white'>Login</h3>
          </div>
        </div>
      </div>
      <div className='h-auto w-full bg-[#222222]'>
        <div className='flex flex-col gap-5 pt-12 justify-center items-center '>
          <img src="./public/path.svg" alt="" />
          <h1 className='text-5xl  text-white font-bold '>Learning Paths</h1>
          <p className='text-16 text-white '>Guided paths to expand your abilities as a well-rounded engineer!</p>
        </div>
        <div className='flex flex-wrap gap-5  px-15 pt-10 pb-20'>
          <Coursescard title="Beginner"
            description="Your Path to Becoming a Career-Ready Web Developer!"
            duration="Total time: 38 hours, 57 minutes"
            image='./public/beginner.svg'
            color="#874428" />
          <Coursescard title="professional"
            description="Your Path to Becoming a Senior Web Developer!"
            duration="Total time: 68 hours"
            image='./public/professional.svg'
            color="#874428" />
          <Coursescard title="Expert"
            description="Your Path to Becoming a Lead / Staff Developer"
            duration="Total time: 59 hours, 56 minutes"
            image='./public/advanced.svg'
             color="#874428" />
          <Coursescard title="Computer-science"
            description="Learn Data Structures & Algorithms with JavaScript"
            duration="Total time: 27 hours, 34 minutes"
            image='./public/computer-science.svg'
            color="#874428" /> 
          <Coursescard title="Fullstack and Backend"
            description="Expand Your Abilities to the Server and Master the Fullstack"
            duration="Total time: 58 hours, 14 minutes"
            image='./public/fullstack.svg' 
            color="#874428" />
          <Coursescard title="Dsign to code"
            description="Make Your Designs Come to Life Through Code!"
            duration="Total time: 40 hours, 16 minutes"
            image='./public/designers-code.svg'
            color="#874428" />

      <div className='h-auto w-full   flex flex-col pt-15 items-center   '>
          <img className='h-13 w-13 mb-4'  src="./public/book.svg" alt="" />
          <h1 className='text-5xl font-bold text-white  '>Topic Paths</h1>
          <p className='text-[16px] text-white mt-5 mb-10'>Focus on a specific area in web development.</p>
          <div className='flex gap-y-5 flex-wrap'>
            <Coursescard title="Dsign to code"
            description="Make Your Designs Come to Life Through Code!"
            duration="Total time: 40 hours, 16 minutes"
            image='./public/designers-code.svg'
            color="#8f7a26" />
            <Coursescard title="Dsign to code"
            description="Make Your Designs Come to Life Through Code!"
            duration="Total time: 40 hours, 16 minutes"
            image='./public/designers-code.svg'
            color="#8f7a26" />
            <Coursescard title="Dsign to code"
            description="Make Your Designs Come to Life Through Code!"
            duration="Total time: 40 hours, 16 minutes"
            image='./public/designers-code.svg'
            color="#8f7a26" />
            <Coursescard title="Dsign to code"
            description="Make Your Designs Come to Life Through Code!"
            duration="Total time: 40 hours, 16 minutes"
            image='./public/designers-code.svg'
            color="#8f7a26" />
            <Coursescard title="Dsign to code"
            description="Make Your Designs Come to Life Through Code!"
            duration="Total time: 40 hours, 16 minutes"
            image='./public/designers-code.svg'
            color="#8f7a26" />
            <Coursescard title="Dsign to code"
            description="Make Your Designs Come to Life Through Code!"
            duration="Total time: 40 hours, 16 minutes"
            image='./public/designers-code.svg'
            color="#8f7a26" />
            <Coursescard title="Dsign to code"
            description="Make Your Designs Come to Life Through Code!"
            duration="Total time: 40 hours, 16 minutes"
            image='./public/designers-code.svg'
            color="#8f7a26" />
            <Coursescard title="Dsign to code"
            description="Make Your Designs Come to Life Through Code!"
            duration="Total time: 40 hours, 16 minutes"
            image='./public/designers-code.svg'
            color="#8f7a26" />
            <Coursescard title="Dsign to code"
            description="Make Your Designs Come to Life Through Code!"
            duration="Total time: 40 hours, 16 minutes"
            image='./public/designers-code.svg'
            color="#8f7a26" />
          </div>
      </div>
        </div>
      </div>
    </>
  )
}

export default Second
