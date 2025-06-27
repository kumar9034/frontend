import React from 'react'
import { FaSearch } from "react-icons/fa";
import Question from '../Question';
import Footer from '../Footer'
import { FaPlay } from "react-icons/fa";

const Firstpage = () => {
  return (
    <div>
      <div className='w-full h-20 flex bg-[#37140f] pt-2 border-b-2 border-[#c95018]'>
       <a href="/">
          <img
            className=' h-[45%] w-[80%] ml-10 mt-3 mr-10 '
            src="../public/logo.svg" alt="" />
        </a>
        <div className='flex mt-4 ml-3 gap-10'>
          <a href="/feature">
            <h3 className='font-bold text-[#aaaaaa] text-[16px] coursor-pointer'>Features</h3>
          </a>
          <a href="/learn">
                  <h3 className='font-bold text-[#aaaaaa] text-[16px] coursor-pointer '>Learn</h3>
          </a>
          <a href="/courses">
           <h3 className='font-bold text-[#aaaaaa] cursor-pointer text-[16px] '>Courses</h3>
          </a>
          <h3 className='font-bold text-[#aaaaaa] text-[16px] '>Tutorials <span className='bg-[#04ba71] h-3 w-4 rounded px-1 text-white text-2'>New</span></h3>
          <a href="/pricing">
          <h3 className='font-bold text-[#aaaaaa] text-[16px] cursor-pointer '>Pricing</h3>
          </a>
        </div>
        <div className='ml-[10%] flex'>
          <div className='mt-6'>
            <FaSearch color="white" size={24} />
          </div>
          <a href="/pricing">
          <div className='w-30 h-10 mt-4 ml-8 cursor-pointer rounded-2xl bg-[#c02d28] text-white text-[15px] font-bold items-center flex justify-center'>
            Join Now
          </div>
          </a>
          <div className='mt-5 ml-8'>
           <a href="/login">
           <h3 className='text-[18px] cursor-pointer font-bold text-white'>Login</h3>
           </a> 
          </div>
        </div>
      </div>
      <div className='h-auto w-full bg-[#121212]'>
        <div className='flex'>
          <div className='w-[45%]  '>
            <div className='mt-15 ml-15 flex'>
              <video
                className="w-full max-w-2xl rounded-md shadow-lg"
                poster="./public/features.webp"
                controls
              >
                <source src="./public/video.mp4" type="video/mp4" controls autoPlay muted />
                Your browser does not support the video tag.
              </video>
              
            </div>
          </div>
          <div className='w-[55%]  '>
            <h1 className='text-5xl mt-13 pl-18 text-white font-bold'>Why Frontend Masters?</h1>
            <p className='text-[15px] text-white font-normal pl-18 pr-18 mt-3'>All of our courses are taught by active practitioners using the skills they teach at top companies you know like Netflix, Spotify, Google, and Stripe. In addition, our courses are regularly updated to keep pace with the latest evolutions to ensure you're learning industry best practices and the latest techniques.</p>
            <div className='flex gap-10 ml-20'>
              <a href="/courses">
              <div className='h-10 w-40 bg-[#c02d28] cursor-pointer rounded-2xl mt-5 text-[14px] leading-none text-white flex items-center justify-center'>
                <h2 >Browes Our Courses</h2>
              </div>
              </a>
              <div className='h-10 w-40 bg-[#c95018] rounded-2xl mt-5 cursor-pointer text-[14px] text-white flex items-center justify-center'>
                <a href="/learn">
                <h2 >View Learning Paths</h2>
                </a>
              </div>
            </div>
            <div>
              <p className='text-white ml-20 mt-10 '>Not sure where to get started?<span className='text-[#fc706b] font-semibold'> Try the Learning Path Quiz</span></p>
            </div>
          </div>
        </div>
        <div className='flex mb-10 justify-between px-20 '>
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
              <img className='h-15 w-32  ml-15' src="./public/star.png" alt="" />
              <p className='text-[18px] text-white ml-10 top-0 '>Industry Leading Experts</p>
            </div>
          </div>
          <div className='w-full leading-none mt-16'>
            <div className=''>
              <img className='h-20 w-28  ml-20' src="./public/interactive.webp" alt="" />
              <p className='text-[18px] text-white ml-12 top-0 '>Live Interactive Workshops</p>
            </div>
          </div>

        </div>
        <div className='h-screen w-full flex  justify-center bg-[#333333] '>
          <div className='w-[30%] flex-col  flex justify-center ml-17 leading-5'>
            <h1 className='text-2xl font-bold text-[#e6e6e6]'>
              200+ High Quality Courses
            </h1>
            <p className='text-[#e6e6e6]'>Modern, in-depth front-end engineering, Node.js, and full-stack courses.</p>
            <h1 className='text-2xl font-bold mt-10 text-[#e6e6e6]'>
              18 Curated Learning Paths
            </h1>
            <p className='text-[#e6e6e6]'>Pick your goal, and get a recommended set of courses complete with electives, editor notes and progress tracking.</p>
          </div>
          <div className='w-[70%] '>
            <img className=' pt-13 pb-15 w-[82%] ml-25' src="./public/learning-paths.webp" alt="" />
          </div>
        </div>
        <div className='h-screen w-full bg-[#3e3e3e] flex '>
          <div className='w-[62%]  h-full '>
            <img className='pt-19 pl-13 ' src="./public/player.webp" alt="" />
          </div>
          <div className='w-[38%]  h-full pt-8 pl-15 pr-15  ' >
            <h1 className='text-2xl text-white font-bold mt-6 '>Custom Built Video Player with 4K Video</h1>
            <p className='mt-3 text-white leading-5.5 '>Supports choosing streaming quality, playback speed, taking notes on specific timestamps, and lesson descriptions and annotations. You can now give instructors feedback and ask your questions right within the player!</p>
            <h1 className='text-2xl text-white font-bold mt-6'>Closed Captioning</h1>
            <p className='mt-3 text-white leading-5.5 '>All videos are close-captioned, along with transcripts available for download.</p>
            <h1 className='text-2xl text-white font-bold mt-6'>iOS and Android Apps</h1>
            <p className='mt-3 text-white leading-5.5 '>Native mobile and tablet apps support offline downloading and watching videos offline on the plane, train, or anywhere. The mobile apps also support airplay to stream to your TV or Chromecast devices.</p>
          </div>
        </div>
        <div className='h-screen w-full bg-[#333333] flex '>
          <div className='w-[38%]  h-full pt-27 pl-15 pr-15  ' >
            <h1 className='text-2xl text-white font-bold mt-6 '>Personalized Dashboard</h1>
            <p className='mt-3 text-white leading-5.5 '>Allows you to rearrange and prioritize courses, upcoming workshops, current learning paths, notes, and more.</p>
            <h1 className='text-2xl text-white font-bold mt-6'>Sortable Bookmarking</h1>
            <p className='mt-3 text-white leading-5.5 '>Save the courses you'd like to learn from later, and sort them in the order you choose.</p>
            <h1 className='text-2xl text-white font-bold mt-6'>Progress Tracking</h1>
            <p className='mt-3 text-white leading-5.5 '>Always know where you left off when you come back!</p>
          </div>
          <div className='w-[62%]  h-full '>
            <img className='pt-17  pr-17' src="./public/dashboard.webp" alt="" />
          </div>
        </div>
        <div className='h-screen w-full bg-[#3e3e3e] flex '>
          <div className='w-[62%]  h-full '>
            <img className='pt-10  pl-16' src="./public/workshops.webp" alt="" />
          </div>
          <div className='w-[38%]  h-full pt-20 pl-15 pr-15  ' >
            <h1 className='text-2xl text-white font-bold mt-6 '>Live-Streamed Workshops and Chatroom</h1>
            <p className='mt-3 text-white leading-5.5 '>Learn from an industry expert live, and ask your questions directly to the instructor. Workshops happen multiple times per month.</p>
            <h1 className='text-2xl text-white font-bold mt-6'>Workshop Replays</h1>
            <p className='mt-3 text-white leading-5.5 '>At the end of a workshop, the live stream is instantly available for replaying anything you missed</p>
            <div className='h-10 w-40 py-1 text-white bg-[#c02d28] mt-10 rounded-2xl ml-3 text-[14px] flex justify-center items-center'>Browse Workshops</div>
          </div>
        </div>
        <div className='h-screen w-full bg-[#333333] flex '>
          <div className='w-[38%]  h-full pt-20 pl-15 pr-15  ' >
            <h1 className='text-2xl text-white font-bold mt-6 '>User Profiles</h1>
            <p className='mt-3 text-white leading-5.5 '>Show off all your hard work on your user profiles that display: watched courses, learning actions, learning paths progress, and stats in one place.</p>
            <h1 className='text-2xl text-white font-bold mt-6'>Discord Community</h1>
            <p className='mt-3 text-white leading-5.5 '>Connect, chat, and hang out with other like-minded developers!</p>
            <h1 className='text-2xl text-white font-bold mt-6'>Social Sharing</h1>
            <p className='mt-3 text-white leading-5.5 '>After the course, you can one-click share that you’ve completed the course with your friends and colleagues!</p>
          </div>
          <div className='w-[62%]  h-full '>
            <img className='pt-13  pr-16' src="./public/profile.png" alt="" />
          </div>
        </div>
        <div className='h-93 w-full bg-[#1f1f1f] flex flex-col pt-16 items-center'>
          <h1 className='text-4xl font-bold text-white '>Learn Straight from Experts Who Shape the Modern Web</h1>
          <p className='text-2xl font-bold text-white '>200+ Courses Curated into 18 Learning Paths</p>
          <div className='h-10 w-full  flex pl-71 gap-10 mt-12'>
            <img className='h-10 w-40 ' src="./public/microsoft.svg" alt="" />
            <img className='h-10 w-40' src="./public/netflix.svg" alt="" />
            <img className='h-10 w-40' src="./public/stripe.svg" alt="" />
            <img className='h-10 w-40' src="./public/spotify.svg" alt="" />
          </div>
          <a href="/pricing">
          <div className='h-10 w-35 bg-red-600 rounded-2xl cursor-pointer mt-15 flex justify-center py-2  text-[15px] text-white'>join now</div>
          </a>
        </div>
        <Question/>
        <Footer/>
      </div>
    </div>
  )
}

export default Firstpage
