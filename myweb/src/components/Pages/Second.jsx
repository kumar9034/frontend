import React from 'react'
import { FaSearch } from "react-icons/fa";
import Coursescard from '../Coursescard'
import { LuTv } from "react-icons/lu";
import Footer from '../Footer'
import { MdPlayArrow } from "react-icons/md";

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
          <div className='w-30 h-10 mt-4 ml-8 rounded-2xl bg-[#c02d28] text-white text-[15px] font-bold items-center flex justify-center'>
            Join Now
          </div>
          </a>
          <div className='mt-5 ml-8'>
           <a href="/login">
            <h3 className='text-[18px]cursor-pointer font-bold text-white'>Login</h3>
           </a>
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
            color="#874428"
            gradientFrom='#b64614'
            gradientTo='#b64614'
          />
          <Coursescard title="professional"
            description="Your Path to Becoming a Senior Web Developer!"
            duration="Total time: 68 hours"
            image='./public/professional.svg'
            color="#874428"
            gradientFrom='#b64614'
            gradientTo='#b64614'
          />
          <Coursescard title="Expert"
            description="Your Path to Becoming a Lead / Staff Developer"
            duration="Total time: 59 hours, 56 minutes"
            image='./public/advanced.svg'
            color="#874428"
            gradientFrom='#b64614'
            gradientTo='#b64614' />
          <Coursescard title="Computer-science"
            description="Learn Data Structures & Algorithms with JavaScript"
            duration="Total time: 27 hours, 34 minutes"
            image='./public/computer-science.svg'
            color="#874428"
            gradientFrom='#b64614'
            gradientTo='#b64614' />
          <Coursescard title="Fullstack and Backend"
            description="Expand Your Abilities to the Server and Master the Fullstack"
            duration="Total time: 58 hours, 14 minutes"
            image='./public/fullstack.svg'
            color="#874428"
            gradientFrom='#b64614'
            gradientTo='#b64614' />
          <Coursescard title="Dsign to code"
            description="Make Your Designs Come to Life Through Code!"
            duration="Total time: 40 hours, 16 minutes"
            image='./public/designers-code.svg'
            color="#874428"
            gradientFrom='#b64614'
            gradientTo='#b64614' />

          <div className='h-auto w-full   flex flex-col pt-15 items-center   '>
            <img className='h-13 w-13 mb-4' src="./public/book.svg" alt="" />
            <h1 className='text-5xl font-bold text-white  '>Topic Paths</h1>
            <p className='text-[16px] text-white mt-5 mb-10'>Focus on a specific area in web development.</p>
            <div className='flex gap-y-5 flex-wrap'>
              <Coursescard title="JavaScript"
                description="write professional, modern javascript"
                duration="Total time: 65 hours, 43 minutes"
                image='./public/js.svg'
                color="#836f25"
                gradientFrom='#ad9129'
                gradientTo='#ad9129'
              />
              <Coursescard title="CSS"
                description="LearnCSS, from Laying outwebsites to performant Animations"
                duration="Total time: 46 hours, 35 minutes"
                image='./public/css.svg'
                color="#1d6965"
                gradientFrom='#19a499'
                gradientTo='#19a499'
              />
              <Coursescard title="Node.js"
                description="build web APIs and Applications with Node.js"
                duration="Total time: 28 hours, 47 minutes"
                image='./public/node.svg'
                color="#256b34"
                gradientFrom='#2d9e3e'
                gradientTo='#2d9e3e' />
              <Coursescard title="TypeScript"
                description="Add to you web and Node.js Apps with typyscript"
                duration="Total time: 19 hours, 25 minutes"
                image='./public/type.svg'
                color="#385073"
                gradientFrom='#5a759e'
                gradientTo='#5a759e' />
              <Coursescard title="JavaScript performance"
                description="Building blazingly Fast Applications"
                duration="Total time: 22 hours, 27 minutes"
                image='./public/performance.svg'
                color="#8f7a26"
                gradientFrom='#aa9952'
                gradientTo='#aa9952' />
              <Coursescard title="Functional javaScript"
                description="Power up Your JavaScript with functional programming"
                duration="Total time: 40 hours, 16 minutes"
                image='./public/functional-javascript.svg'
                color="#617138"
                gradientFrom='#4e9634'
                gradientTo='#4e9634' />
              <Coursescard title="React.js"
                description="Be Productive with React.js, Today's Most Popular Framework"
                duration="Total time: 40 hours, 16 minutes"
                image='./public/RT.svg'
                color="#236570"
                gradientFrom='#34a0b2'
                gradientTo='#34a0b2' />
              <Coursescard title="Vue.js"
                description="Be Productive with React.js, Today's Most Popular Framework"
                duration="Total time: 40 hours, 16 minutes"
                image='./public/vue.svg'
                color="#355647"
                gradientFrom='#5e917a'
                gradientTo='#5e917a' />
              <Coursescard title="Angular"
                description="Create TypeScript-based Web Applications with a Framework Led by Google"
                duration="Total time: 40 hours, 16 minutes"
                image='./public/angular.svg'
                color="#92142c"
                gradientFrom='#b54459'
                gradientTo='#b54459' />
            </div>
          </div>
        </div>
      </div>
          <div className='w-full h-[34rem] bg-[#393939] pl-16 pt-16  '>
            <div className='w-[95%] px-10 text-white  h-40 pt-13 bg-black flex   rounded-lg '>
              <div className='w-80 text-[17px]  font-bold '>
              <h1 >Learn Straight from the Experts Who Shape the Modern Web</h1>
              </div>
              <div className='w-50 ml-10 leading-5 gap-3 flex flex-col '>
                <p className='flex font-bold text-[#d04327]'>200+ <span className='font-normal text-white ml-2 text-[15px]'>In-depth Courses</span></p>
                <p className='text-[18px] text-[#d04327]  font-bold'>18 <span className='font-normal ml-2 text-white text-[15px]'>Learning Paths</span></p>
              </div>
              <div className='h-17 border-1 border-white ml-3'></div>
              <div className='flex flex-col gap-1 ml-8 '>
                <div className='flex w-70 gap-2'>
                <img className='w-15' src="./public/star.png" alt="" />
                  <p className='text-[15px]'>Industry Leading Experts</p>
                </div>
                  <div className='w-70 flex gap-4'>
                <LuTv size={24} color='#d04327' className='ml-5' />
                    <p className='text-[15px]'>Live Interactive Workshops</p>
                  </div>
              </div>
              <div className='h-10 w-60  rounded-3xl px-4 py-2 bg-[#d04327] text-[15px] '>Get Unlimited Access Now</div>
            </div>
            <div className=' mt-15 flex flex-col justify-center items-center'>
              <h1 className='text-[39px] font-bold text-white'>Not sure where to get started?</h1>
              <p className='text-white mt-5'>Answer three short questions and we'll recommend the best learning path for your experience level and goals</p>
              <p className='text-[#d04327] flex gap-1 mt-10'>Take the Quiz <MdPlayArrow size={25}  /></p>

            </div>

          </div>
          <Footer/>
    </>
  )
}

export default Second
