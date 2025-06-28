import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import { FaRegChessQueen } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import Secondcard from '../Secondcard';
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa";
import Footer from '../Footer';
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const Tutorial = () => {

    const cards = [{
        id: 1,
        name : 'Web Dev Simplified',
        title: "Vitest Crash Course",
        image: "./public/thumb-270.webp",
        language : "Testing",
        language2 : "React"
    },
{
        id: 2,
        name : 'Web Dev Simplified',
        title: "Concurrency in a Go web application",
        image: "./public/thumb-270 (1).webp",
        language : "Go",
        language2 : "REACT"
        
    },
{
        id: 3,
        name : ' Melkey',
        title: "Concurrency Locking & SQL Query Timeouts in Golang",
        image: "./public/thumb-270 (3).webp",
        language : "DATABASE",
        language2 : "GO"
    },
{
        id: 4,
        name : 'Web Dev Simplified',
        title: "Strategies for margins, padding, gaps, and more",
        image: "./public/thumb-270.webp",
        language : "CSS",
        language2 : "Javascript"
    }]
    const Populer = [{
        id: 1,
        name : 'Maximiliano Firtman',
        title: "JavaScript Promises from Scratch",
        image: "./public/thumb-270 (5).webp",
        language : "APIs",
        language2 : "Javascript"
    },
{
        id: 2,
        name : 'Web Dev Simplified',
        title: "How To Handle Internationalization Like A...",
        image: "./public/thumb-270 (6).webp",
        language : "Typescript",
        language2 : "javascript"
        
    },
{
        id: 3,
        name : 'Kevin Powell',
        title: "5 CSS Secrets every developer should know",
        image: "./public/thumb-270 (7).webp",
        language : "Creative Coding",
        language2 : "CSS"
    },
{
        id: 4,
        name : 'Kevin Powell',
        title: "Create a clean, modern navigation with HTML",
        image: "./public/thumb-270 (8).webp",
        language : "CSS",
        language2 : "Javascript"
    }]

    const latest = [{
        id: 1,
        name : 'Maximiliano Firtman',
        title: "JavaScript Promises from Scratch",
        image: "./public/thumb-270 (5).webp",
        language : "APIs",
        language2 : "Javascript"
    },
{
        id: 2,
        name : 'Web Dev Simplified',
        title: "Stop Writing Bad Abstractions - Clean Code...",
        image: "./public/thumb-270 (9).webp",
        language : "React",
        language2 : "javascript"
        
    },
{
        id: 3,
        name : 'Kevin Powell',
        title: "Make an animated glowing border effect with CSS",
        image: "./public/thumb-270 (10).webp",
        language : "Creative Coding",
        language2 : "CSS"
    },
{
        id: 4,
        name : 'Web Dev Simplified',
        title: "How To Load Images Like A Pro",
        image: "./public/thumb-270 (11).webp",
        language : "Performance",
        language2 : "Javascript"
    }]

    const CSS =  [{
        id: 1,
        name : 'Kevin Powell',
        title: "5 CSS Secrets every developer should know",
        image: "./public/thumb-270 (12).webp",
        language : "creative coding",
        language2 : "CSS"
    },
{
        id: 2,
        name : 'Kevin Powell',
        title: "Animate height: auto with interpolate-size and calc-",
        image: "./public/thumb-270 (13).webp",
        language : "Creative",
        language2 : "CSS"
        
    },
{
        id: 3,
        name : 'Kevin Powell',
        title: "Can I clone this rotating, gradient, inner glow effect?",
        image: "./public/thumb-270 (14).webp",
        language : "Creative Coding",
        language2 : "CSS"
    },
{
        id: 4,
        name : 'Kevin Powell',
        title: "Create a Frosted Glass Effect with a Gradient Border",
        image: "./public/thumb-270 (15).webp",
        language : "Performance",
        language2 : "Javascript"
    }]

    const JavaScript = [{
        id: 1,
        name : ' Web Dev Simplified',
        title: "Debounce vs Throttle",
        image: "./public/thumb-270 (16).webp",
        language : "Performance",
        language2 : "JavaScript"
    },
{
        id: 2,
        name : 'Web Dev Simplified',
        title: "How To Create A Search Bar In JavaScript",
        image: "./public/thumb-270 (17).webp",
        language : "Javascript",
        language2 : "HTML"
        
    },
{
        id: 3,
        name : 'Web Dev Simplified',
        title: "How To Create An Animated Image Carousel With",
        image: "./public/thumb-270 (18).webp",
        language : "Javascript",
        language2 : "CSS"
    },
{
        id: 4,
        name : 'Chris Coyier',
        title: "Image Gallery Web Component - Part 1",
        image: "./public/thumb-270 (19).webp",
        language : "CSS",
        language2 : "Javascript"
    }]
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
            <div className='w-ful h-auto flex flex-col items-center pt-2 bg-[#222222]'>
                <img className='h-26 w-18' src="./public/cookes.png" alt="" />
                <div>
                    <h1 className='text-5xl text-white font-bold'>Snackable Tutorials from Creators </h1>
                    <h1 className='text-5xl text-white ml-8 mt-4 font-bold'>Who are Masters of Their Craft</h1>
                    <p className='text-white ml-25 mt-5'>Turn spare moments into skill-building victories with short creator-led tutorials.</p>
                </div>
                <div className='w-[72rem] h-14 mt-5 flex  rounded-4xl bg-[#3e3e3e]'>
                    <CgSearch color='white' size={27} className='mt-4 ml-5' />
                    <input type="text" className='w-full text-[#aaaaaa] outline-none ml-4 text-lg' placeholder='Search For Courses, language , framwork or teacher...' />
                </div>
                <div className='h-20 w-full  mt-7 items-center gap-3 pl-10 pr-4 flex '>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 px-4 w-auto'>
                        <img className='h-6 w-6 ' src="./public/css (1).svg" alt="" />
                        <p>CSS</p>
                    </div>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="./public/javascript.svg" alt="" />
                        <p>Javascript</p>
                    </div>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="./public/go.svg" alt="" />
                        <p>Go</p>
                    </div>

                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="./public/typescript.svg" alt="" />
                        <p>TypeScript</p>
                    </div>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="./public/html.svg" alt="" />
                        <p>HTML</p>
                    </div>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="./public/Rt.svg" alt="" />
                        <p>React</p>
                    </div>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="./public/algorithms.svg" alt="" />
                        <p>Algorithms</p>
                    </div>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="./public/apis.svg" alt="" />
                        <p>APIs</p>
                    </div>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="./public/node.svg" alt="" />
                        <p>Node.js</p>
                    </div>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="./public/testing.svg" alt="" />
                        <p>Testing</p>
                    </div>

                </div>
            </div>
            <div className='h-auto flex justify-center pb-10   w-full bg-[#222222] pt-15  '>
                <div className='h-65 w-[74rem] flex  justify-between bg-gradient-to-r from-[#052749] via-[#052749] to-[#070216]" '>
                    <img className='h-65 w-[30rem]' src="./public/thumb-1080.webp" alt="" />
                    <div className=' w-[70rem] h-full px-10 pt-5'>
                        <div className='flex gap-1'>
                            <FaRegChessQueen size={20} color='#e6682d' />
                            <p className='text-sm font-bold text-[#e6682d]'>Featured</p>
                        </div>
                        <div className='h-7 text-sm py-1 px-2 w-10  border-1 border-[#8a8a8a] text-[#8a8a8a] mt-3'> CSS</div>
                        <h1 className='text-2xl text-white font-bold mt-4'>Form Styling Essentials | The basics to modern CSS tips...</h1>
                        <p className='text-md text-white mt-5'>In this tutorial, we'll explore using .form-groups for better organization, making sure our elements inherit font properties, when to use CSS Grid over Flexbox for form layouts plu...</p>
                        <p className='text-sm text-[#8a8a8a] mt-5'>By <span className='font-bold'>Kevin Powell</span> </p>
                    </div>
                </div>
            </div>
                <div className='h-auto pb-20 w-full bg-[#222222] '>
                    <div className='flex justify-between px-10'>
                        <div className='flex '>
                        <IoIosStarOutline size={26}fontWeight={800} color='#f09e14'/>
                        <h1 className='text-lg ml-3 text-white font-bold'>Member Exclusive</h1>    
                        </div>
                        <div>
                            <p className='text-sm text-[#e6682d]'>view more</p>
                        </div>
                    </div>
                    <div className='border-1 w-[74rem] border-[#3e3e3e] ml-10 mt-4'></div>
                    <div className='flex gap-5 pl-10'>
                    {cards.map((item)=>(<div  key={item.id}>
                        <Secondcard  
                        image={item.image}
                        language={item.language}
                        language2={item.language2}
                        name={item.name}
                        title={item.title} />
                    </div>
                        
                    ))}
                    </div>
                    <div className='flex justify-between px-10 mt-18'>
                        <div className='flex '>
                        <FaFireFlameCurved size={26}fontWeight={800} color='#f09e14'/>
                        <h1 className='text-lg ml-3 text-white font-bold'>Popular</h1>    
                        </div>
                        <div>
                            <p className='text-sm text-[#e6682d]'>view more</p>
                        </div>
                    </div>
                    <div className='border-1 w-[74rem] border-[#3e3e3e] ml-10 mt-4'></div>
                    <div className='flex gap-5 pl-10'>
                        {Populer.map((item)=>(<div  key={item.id}>
                        <Secondcard  
                        image={item.image}
                        language={item.language}
                        language2={item.language2}
                        name={item.name}
                        title={item.title} />
                    </div>
                        
                    ))}
                    </div>
                    <div className='flex justify-between px-10 mt-18'>
                        <div className='flex '>
                        <FaBullhorn size={26}fontWeight={800} color='white'/>
                        <h1 className='text-lg ml-3 text-white font-bold'>Latest</h1>    
                        </div>
                        <div>
                            <p className='text-sm text-[#e6682d]'>view more</p>
                        </div>
                    </div>
                    <div className='border-1 w-[74rem] border-[#3e3e3e] ml-10 mt-4'></div>
                    <div className='flex gap-5 pl-10'>
                        {latest.map((item)=>(<div  key={item.id}>
                        <Secondcard  
                        image={item.image}
                        language={item.language}
                        language2={item.language2}
                        name={item.name}
                        title={item.title} />
                    </div>
                        
                    ))}
                    </div>
                    <div className='flex justify-between px-10 mt-18'>
                        <div className='flex '>
                        <SiCss3 size={26}fontWeight={800} color='#663399'/>
                        <h1 className='text-lg ml-3 text-white font-bold'>CSS</h1>    
                        </div>
                        <div>
                            <p className='text-sm text-[#e6682d]'>view more</p>
                        </div>
                    </div>
                    <div className='border-1 w-[74rem] border-[#3e3e3e] ml-10 mt-4'></div>
                    <div className='flex gap-5 pl-10'>
                        {CSS.map((item)=>(<div  key={item.id}>
                        <Secondcard  
                        image={item.image}
                        language={item.language}
                        language2={item.language2}
                        name={item.name}
                        title={item.title} />
                    </div>
                        
                    ))}
                    </div>
                    <div className='flex justify-between px-10 mt-18'>
                        <div className='flex '>
                        <IoLogoJavascript size={26}fontWeight={800} color='#f09e14'/>
                        <h1 className='text-lg ml-3 text-white font-bold'>JavaScript</h1>    
                        </div>
                        <div>
                            <p className='text-sm text-[#e6682d]'>view more</p>
                        </div>
                    </div>
                    <div className='border-1 w-[74rem] border-[#3e3e3e] ml-10 mt-4'></div>
                    <div className='flex gap-5 pl-10'>
                        {JavaScript.map((item)=>(<div  key={item.id}>
                        <Secondcard  
                        image={item.image}
                        language={item.language}
                        language2={item.language2}
                        name={item.name}
                        title={item.title} />
                    </div>
                        
                    ))}
                    </div>
                </div>
                <Footer/>
        </div>

    )
}

export default Tutorial
