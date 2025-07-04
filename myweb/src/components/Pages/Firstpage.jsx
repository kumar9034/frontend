import React from 'react'
import { FaSearch } from "react-icons/fa";
import Question from '../Question';
import Footer from '../Footer'
import { FaPlay } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const Firstpage = () => {
  return (
    <div>
      <Navbar fixed="" bg='#37140f' text='text-[#aaaaaa]'/>
      <div className='h-auto w-full bg-[#121212]'>
        <div className='sm:flex'>
          <div className=' sm:w-[45%] w-[100%]  '>
            <div className=' sm:mt-15 pt-10 sm:ml-15 px-5 flex'>
              <video
                className="w-full max-w-2xl rounded-md shadow-lg"
                poster="/features.webp"
                controls
              >
                <source src="/video.mp4" type="video/mp4" controls autoPlay muted />
                Your browser does not support the video tag.
              </video>

            </div>
          </div>
          <div className=' sm:w-[55%] w-full  '>
            <h1 className='sm:text-5xl text-4xl pl-5 mt-13 sm:pl-18 text-white font-bold'>Why Frontend Masters?</h1>
            <p className='sm:text-[15px] text-white font-normal sm:pl-18 pl-5 sm:pr-18 pr-5 mt-3'>All of our courses are taught by active practitioners using the skills they teach at top companies you know like Netflix, Spotify, Google, and Stripe. In addition, our courses are regularly updated to keep pace with the latest evolutions to ensure you're learning industry best practices and the latest techniques.</p>
            <div className=' sm:flex gap-10 sm:ml-20 ml-10'>
              <Link to="/courses">
                <div className=' h-10 sm:w-40 w-70 bg-[#c02d28] cursor-pointer rounded-2xl mt-5 text-[14px] leading-none text-white flex items-center justify-center'>
                  <h2 >Browes Our Courses</h2>
                </div>
              </Link>
              <div className=' h-10 sm:w-40 w-70 bg-[#c95018] rounded-2xl mt-5 cursor-pointer text-[14px] text-white flex items-center justify-center'>
                <Link to="/learn">
                  <h2 >View Learning Paths</h2>
                </Link>
              </div>
            </div>
            <div>
              <p className='text-white sm:ml-20 ml-5 text-center mt-10 '>Not sure where to get started?<span className='text-[#fc706b] font-semibold'> Try the Learning Path Quiz</span></p>
            </div>
          </div>
        </div>
         <div className=' sm:flex flex-wrap   pl-30 md:pl-0 py-10 justify-center items-center gap-20 text-white'>
                <div className='feature w-[10rem]'>
                    <p className='text-[55px] w-[2rem] font-bold text-[#c44d42]'>
                        2<span className='text-[#d8532b]'>00+</span>
                    </p>
                    <p className='text-[20px]  mt-2'>In-Depth Courses</p>
                </div>

                <div className='feature w-[10rem]  '>
                    <p className='text-[55px] w-[5rem] ml-4 font-bold text-[#c44d42]'>
                        2<span className='text-[#d8532b] '>1</span>
                    </p>
                    <p className='text-[20px] w-[10rem] mt-2'>Learning Paths</p>
                </div>

                <div className='feature w-[10rem]  text-center '>
                    <img className='h-12 mb-2 w-[7rem] h-[4rem] ml-3'  src="/star.png" alt="Star Icon" />
                    <p className='text-[18px] w-[10rem]'>Industry Leading Experts</p>
                </div>

                <div className='feature w-[10rem] flex flex-col justify-center items-center'>
                    <img className='h-14  w-[7rem] h-[5rem]' src="/interactive.webp" alt="Workshop Icon" />
                    <p className='text-[18px] w-[10rem] text-center'>Live Interactive Workshops</p>
                </div>
            </div>


        <div className=' h-screen w-full sm:flex  justify-center bg-[#333333] '>
          <div className='contain-1 sm:w-[30%] w-full flex-col  flex sm:justify-center sm:pl-17 px-5 pt-10  leading-5'>
            <h1 className='sm:text-2xl font-bold text-[#e6e6e6]'>
              200+ High Quality Courses
            </h1>
            <p className='text-[#e6e6e6]'>Modern, in-depth front-end engineering, Node.js, and full-stack courses.</p>
            <h1 className='text-2xl font-bold mt-10 text-[#e6e6e6]'>
              18 Curated Learning Paths
            </h1>
            <p className='text-[#e6e6e6]'>Pick your goal, and get a recommended set of courses complete with electives, editor notes and progress tracking.</p>
          </div>
          <div className='sm:w-[70%] w-full '>
            <img className=' pt-13 pb-15 w-[82%] sm:ml-25 ml-5' src="/learning-paths.webp" alt="" />
          </div>
        </div>
        <div className=' h-auto w-full bg-[#3e3e3e] sm:flex '>
          <div className='sm:w-[62%] w-full sm:h-full '>
            <img className='pt-19 sm:pl-13 px-5' src="/player.webp" alt="" />
          </div>
          <div className=' sm:w-[38%] w-full  sm:h-full  pt-8 sm:pl-15 sm:pr-15 pl-5 pr-5 pb-5  ' >
            <h1 className='text-2xl text-white font-bold mt-6 '>Custom Built Video Player with 4K Video</h1>
            <p className='mt-3 text-white leading-5.5 '>Supports choosing streaming quality, playback speed, taking notes on specific timestamps, and lesson descriptions and annotations. You can now give instructors feedback and ask your questions right within the player!</p>
            <h1 className='text-2xl text-white font-bold mt-6'>Closed Captioning</h1>
            <p className='mt-3 text-white leading-5.5 '>All videos are close-captioned, along with transcripts available for download.</p>
            <h1 className='text-2xl text-white font-bold mt-6'>iOS and Android Apps</h1>
            <p className='mt-3 text-white leading-5.5 '>Native mobile and tablet apps support offline downloading and watching videos offline on the plane, train, or anywhere. The mobile apps also support airplay to stream to your TV or Chromecast devices.</p>
          </div>
        </div>
        <div className=' h-auto w-full bg-[#333333] sm:flex '>
          <div className=' sm:w-[38%] w-full  h-full sm:pt-27 pt-5 sm:pl-15 sm:pr-15 pl-5 pr-5  ' >
            <h1 className='text-2xl text-white font-bold mt-6 '>Personalized Dashboard</h1>
            <p className='mt-3 text-white leading-5.5 '>Allows you to rearrange and prioritize courses, upcoming workshops, current learning paths, notes, and more.</p>
            <h1 className='text-2xl text-white font-bold mt-6'>Sortable Bookmarking</h1>
            <p className='mt-3 text-white leading-5.5 '>Save the courses you'd like to learn from later, and sort them in the order you choose.</p>
            <h1 className='text-2xl text-white font-bold mt-6'>Progress Tracking</h1>
            <p className='mt-3 text-white leading-5.5 '>Always know where you left off when you come back!</p>
          </div>
        <div className=' sm:w-[62%] w-full h-full '>
            <img className='sm:pt-17  sm:pr-17 pt-5 pr-5 pl-5 pb-5' src="/dashboard.webp" alt="" />
          </div>
        </div>
        <div className=' sm:h-auto w-full bg-[#3e3e3e] sm:flex '>
          <div className='contain-image2 sm:w-[62%] w-full   h-full '>
            <img className='pt-10  sm:pl-16 px-5' src="/workshops.webp" alt="" />
          </div>
          <div className='sm:w-[38%]  h-full sm:pt-20 pt-10 sm:pl-15 pl-5 pb-5 sm:pr-15 pr-5  ' >
            <h1 className='text-2xl text-white font-bold mt-6 '>Live-Streamed Workshops and Chatroom</h1>
            <p className='mt-3 text-white leading-5.5 '>Learn from an industry expert live, and ask your questions directly to the instructor. Workshops happen multiple times per month.</p>
            <h1 className='text-2xl text-white font-bold mt-6'>Workshop Replays</h1>
            <p className='mt-3 text-white leading-5.5 '>At the end of a workshop, the live stream is instantly available for replaying anything you missed</p>
            <div className='h-10 sm:w-40 w-70  py-1 text-white bg-[#c02d28] mt-10 rounded-2xl ml-3 text-[14px] flex justify-center items-center'>Browse Workshops</div>
          </div>
        </div>
        <div className=' sm:h-auto w-full bg-[#333333] sm:flex '>
          <div className=' sm:w-[38%] w-full  sm:h-full sm:pt-20 pt-10 sm:pl-15 pl-5 sm:pr-15 pr-5  ' >
            <h1 className='text-2xl text-white font-bold mt-6 '>User Profiles</h1>
            <p className='mt-3 text-white leading-5.5 '>Show off all your hard work on your user profiles that display: watched courses, learning actions, learning paths progress, and stats in one place.</p>
            <h1 className='text-2xl text-white font-bold mt-6'>Discord Community</h1>
            <p className='mt-3 text-white leading-5.5 '>Connect, chat, and hang out with other like-minded developers!</p>
            <h1 className='text-2xl text-white font-bold mt-6'>Social Sharing</h1>
            <p className='mt-3 text-white leading-5.5 '>After the course, you can one-click share that you’ve completed the course with your friends and colleagues!</p>
          </div>
          <div className=' sm:w-[62%] w-full  h-full '>
            <img className='sm:pt-13 pt-5 sm:pr-16 pl-5 pr-5' src="/profile.png" alt="" />
          </div>
        </div>
        <div className=' sm:h-93 h-auto max-w-full mx-auto  bg-[#1f1f1f] flex flex-col pt-16  pb-5 items-center  px-5 text-center'>
          <h1 className='sm:text-4xl text-2xl font-bold text-white '>Learn Straight from Experts Who Shape the Modern Web</h1>
          <p className='sm:text-2xl text-xl font-bold text-white '>200+ Courses Curated into 18 Learning Paths</p>
          <div className=' sm:h-10 h-auto max-w-[60rem] mx-auto  sm:ml-60  justify-center items-center    sm:flex  gap-5 mt-12'>
            <img className='h-10 sm:w-40 w-50 ' src="/microsoft.svg" alt="" />
            <img className='h-10 sm:w-40 w-48 mt-5' src="/netflix.svg" alt="" />
            <img className='h-10 sm:w-40 w-46 mt-5' src="/stripe.svg" alt="" />
            <img className='h-10 sm:w-40 w-44 mt-5' src="/spotify.svg" alt="" />
          </div>
        <Link to="/pricing">
          <div className=' h-10 sm:w-35 w-70 bg-red-600 rounded-2xl cursor-pointer mt-15 flex justify-center py-2  text-[15px] text-white'>join now</div>
        </Link>
      </div>
      <Question />
      <Footer />
    </div>
    </div>
  )
}

export default Firstpage
