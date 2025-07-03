import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Card from '../Firstcard';
import Footer from '../Footer'
import Navbar from '../Navbar'

const Courses = () => {

  const cards = [{
        id:1,
        bg:"/thumb.webp",
        name:'Jen Kramer AnnieCannons',
        description:"Build a single-page portfolio with CSS! Learn responsive layout techniques and UI design fundamentals as you style navigation, project cards, images, and more. Give the portfolio extra polish with light and dark themes and deploy your portfolio to GitHub Pages.",
        heading:"Getting Started with CSS, v2",
        time:"3 hours, 2 minutes",
        image:"/thumb (1).webp",
  },
{
        id:2,
        bg:"/bg (2).webp",
        name:'Richard Feldmanzed.dev',
        description:"Most modern languages use some form of type inference, including TypeScript, Rust, and Haskell. Learn how to build your own compiler from scratch that performs static type inference and emits WebAssembly.",
        heading:"Write a Compiler That Understands Types",
        time:"4 hours, 50 minutes",
        image:"/thumb (2).webp",
  },{
        id:3,
        bg:"/bg(3).webp",
        name:'Jen Kramer AnnieCannons',
        description:"Discover why C remains one of the most powerful and widely used languages today! Build a working HTTP server from scratch while learning how C handles memory, file I/O, and low-level networking.",
        heading:"C Fundamentals",
        time:"5 hours, 3 minutes",
        image:"/thumb (2).webp",
  },
{
        id:4,
        bg:"/bg (4).webp",
        name:'Maximiliano FirtmanIndependent Consultant',
        description:"Code a high-performance fullstack app from scratch! Skip the framework while creating a modern web app with Vanilla JavaScript and a rock-solid backend JSON API with Go.",
        heading:"Go & Vanilla JS: Fullstack Without Frameworks",
        time:"10 hours, 11 minutes",
        image:"/thumb (3).webp",
  },
{
        id:5,
        bg:"/bg (5).webp",
        name:'Steve KinneyTemporal',
        description:"Find the end-to-end type-safety strategy that works with your stack! Share TypeScript types across client and server apps. Write bullet-proof Zod schemas. Use tRPC queries and mutations. Explore Prisma for database migrations and schema generation.",
        heading:"Fullstack TypeScript, v2 (feat. Zod)",
        time:"4 hours, 8 minutes",
        image:"./public/thumb (4).webp",
  },
{
        id:6,
        bg:"/bg (6).webp",
        name:'Jen Kramer AnnieCannons',
        description:"Use VS Code like a pro and build apps faster! Search, navigate, and refactor code quickly. Debug your apps without leaving the editor and automate complex or repetitive routines with custom tasks..",
        heading:"Become a VS Code Power User",
        time:"5 hours, 13 minutes",
        image:"/thumb (4).webp",
  },
{
        id:7,
        bg:"/bg (7).webp",
        name:'Brian HoltNeon',
        description:"Master React 19 and create high-performance apps! Build projects using React Server Components, static site generation, and server-side rendering. Explore performance bottlenecks in the framework and leverage transitions and deferred values as you maximize performance.",
        heading:"Intermediate React, v6",
        time:"6 hours, 22 minutes",
        image:"/thumb (5).webp",
  },
{
        id:8,
        bg:"/bg (8).webp",
        name:'Melkey Twitch',
        description:"Learn Go by building a real application from scratch! Create scalable APIs, connect to Postgres with Docker, implement authentication, and build a production-ready backend with Go’s most powerful features.",
        heading:"Complete Go for Professional Developers",
        time:"8 hours, 3 minutes",
        image:"/thumb (7).webp",
  },
{
        id:9,
        bg:"/thumb (6).webp",
        name:'Scott MossNetflix',
        description:"Build full-stack React apps with Next.js. Gain a deep understanding of React Server Components and Server Actions. Learn authentication, caching, static vs. dynamic routing, and deploy a professional application to Vercel.",
        heading:"Next.js Fundamentals, v4",
        time:"6 hours, 41 minutes",
        image:"/thumb (8).webp",
  },
{
        id:10,
        bg:"/bg (10).webp",
        name:'Jon KupermanBloomberg',
        description:"Learn how to audit & fix website accessibility issues. Learn keyboard accessibility, focus control & ARIA roles to make websites accessible to screen readers.",
        heading:"Website Accessibility, v3",
        time:"2 hours, 19 minutes",
        image:"/thumb (9).webp",
  },
]
  
  return (
    <div>
      <Navbar text='text-[#aaaaaa]' />
      <div className='h-auto  w-full items-center flex flex-col px-5  bg-[#222222]'>
        <div className='h-18 border-1 flex items-center justify-center border-[#333333] sm:w-[62.5rem] w-80 text-center mt-9  bg-[#212121]'>
          <p className='text-white font-bold '>Join us live online! <br/> <span className='text-sm text-[#fc706b] font-bold'>API Design in Node.js, v5</span> <span className='font-[400]'>on Aug 13, 2025.</span></p>
        </div>
        <div className='mt-20 flex flex-col items-center justify-center'>
          <h1 className='sm:text-5xl text-4xl px-5 text-center font-bold text-white '>Frontend & Fullstack Engineering Courses</h1>
          <p className='sm:text-[16.5px] text-17 text-center mt-5 text-white'>Not sure where to start? <br/> <span className='text-[#fc706b]'> Check out our Learning Paths!</span></p>
        </div >
        <div className='sm:w-[72rem] w-full  sm:h-14 h-10 sm:mt-15 mt-5 flex    rounded-4xl bg-[#3e3e3e]'>
          <CgSearch color='white' sm:size={27} size={15} className='mt-4 sm:ml-5 ml-2' />
          <input type="text" className='w-full text-[#aaaaaa] outline-none sm:ml-4 ml-2 sm:text-lg text-sm pr-2 ' placeholder='Search For Courses, language , framwork or teacher...' />
        </div>
        <div className='sm:block hidden flex justify-end w-full gap-4 pr-15'>
          <div className='h-7 w-30 bg-[#3e3e3e] rounded  mt-10 gap-3 text-sm text-[#aaaaaa] justify-center flex items-center'>Sort by Date <IoMdArrowDropdown size={20} /></div>
          <IoMenu size={25} color='#aaaaaa' className='mt-10' />
        </div>
        <div className='flex gap-10 mt-7 mb-10  flex-wrap'>
          {cards.map((card) => (
            <div key={card.id}>
              <Card
                bg={card.bg}
                name={card.name}
                heading={card.heading}
                image={card.image}
                description={card.description}
                time={card.time}
              />
            </div>
          ))}
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Courses
