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
import Navbar from '../Navbar';

const Tutorial = () => {

    const cards = [{
        id: 1,
        name: 'Web Dev Simplified',
        title: "Vitest Crash Course",
        image: "/thumb-270.webp",
        language: "Testing",
        language2: "React"
    },
    {
        id: 2,
        name: 'Web Dev Simplified',
        title: "Concurrency in a Go web application",
        image: "/thumb-270 (1).webp",
        language: "Go",
        language2: "REACT"

    },
    {
        id: 3,
        name: ' Melkey',
        title: "Concurrency Locking & SQL Query Timeouts in Golang",
        image: "/thumb-270 (3).webp",
        language: "DATABASE",
        language2: "GO"
    },
    {
        id: 4,
        name: 'Web Dev Simplified',
        title: "Strategies for margins, padding, gaps, and more",
        image: "/thumb-270.webp",
        language: "CSS",
        language2: "Javascript"
    }]
    const Populer = [{
        id: 1,
        name: 'Maximiliano Firtman',
        title: "JavaScript Promises from Scratch",
        image: "./public/thumb-270 (5).webp",
        language: "APIs",
        language2: "Javascript"
    },
    {
        id: 2,
        name: 'Web Dev Simplified',
        title: "How To Handle Internationalization Like A...",
        image: "/thumb-270 (6).webp",
        language: "Typescript",
        language2: "javascript"

    },
    {
        id: 3,
        name: 'Kevin Powell',
        title: "5 CSS Secrets every developer should know",
        image: "/thumb-270 (7).webp",
        language: "Creative Coding",
        language2: "CSS"
    },
    {
        id: 4,
        name: 'Kevin Powell',
        title: "Create a clean, modern navigation with HTML",
        image: "/thumb-270 (8).webp",
        language: "CSS",
        language2: "Javascript"
    }]

    const latest = [{
        id: 1,
        name: 'Maximiliano Firtman',
        title: "JavaScript Promises from Scratch",
        image: "/thumb-270 (5).webp",
        language: "APIs",
        language2: "Javascript"
    },
    {
        id: 2,
        name: 'Web Dev Simplified',
        title: "Stop Writing Bad Abstractions - Clean Code...",
        image: "/thumb-270 (9).webp",
        language: "React",
        language2: "javascript"

    },
    {
        id: 3,
        name: 'Kevin Powell',
        title: "Make an animated glowing border effect with CSS",
        image: "/thumb-270 (10).webp",
        language: "Creative Coding",
        language2: "CSS"
    },
    {
        id: 4,
        name: 'Web Dev Simplified',
        title: "How To Load Images Like A Pro",
        image: "/thumb-270 (11).webp",
        language: "Performance",
        language2: "Javascript"
    }]

    const CSS = [{
        id: 1,
        name: 'Kevin Powell',
        title: "5 CSS Secrets every developer should know",
        image: "/thumb-270 (12).webp",
        language: "creative coding",
        language2: "CSS"
    },
    {
        id: 2,
        name: 'Kevin Powell',
        title: "Animate height: auto with interpolate-size and calc-",
        image: "/thumb-270 (13).webp",
        language: "Creative",
        language2: "CSS"

    },
    {
        id: 3,
        name: 'Kevin Powell',
        title: "Can I clone this rotating, gradient, inner glow effect?",
        image: "/thumb-270 (14).webp",
        language: "Creative Coding",
        language2: "CSS"
    },
    {
        id: 4,
        name: 'Kevin Powell',
        title: "Create a Frosted Glass Effect with a Gradient Border",
        image: "/thumb-270 (15).webp",
        language: "Performance",
        language2: "Javascript"
    }]

    const JavaScript = [{
        id: 1,
        name: ' Web Dev Simplified',
        title: "Debounce vs Throttle",
        image: "/thumb-270 (16).webp",
        language: "Performance",
        language2: "JavaScript"
    },
    {
        id: 2,
        name: 'Web Dev Simplified',
        title: "How To Create A Search Bar In JavaScript",
        image: "/thumb-270 (17).webp",
        language: "Javascript",
        language2: "HTML"

    },
    {
        id: 3,
        name: 'Web Dev Simplified',
        title: "How To Create An Animated Image Carousel With",
        image: "/thumb-270 (18).webp",
        language: "Javascript",
        language2: "CSS"
    },
    {
        id: 4,
        name: 'Chris Coyier',
        title: "Image Gallery Web Component - Part 1",
        image: "/thumb-270 (19).webp",
        language: "CSS",
        language2: "Javascript"
    }]
    return (
        <div>
            <Navbar text='text-[#aaaaaa]' />
            <div className='w-ful h-auto flex flex-col  items-center pt-2 px-10 md:px-0 bg-[#222222]'>
                <img className='h-26 w-18' src="/cookes.png" alt="" />
                <div>
                    <h1 className='sm:text-5xl text-4xl text-center  text-white font-bold'>Snackable Tutorials from Creators </h1>
                    <h1 className='sm:text-5xl text-4xl text-white text-center sm:ml-8  sm:mt-4 font-bold'>Who are Masters of Their Craft</h1>
                    <p className='text-white sm:ml-25 mt-5'>Turn spare moments into skill-building victories with short creator-led tutorials.</p>
                </div>
                <div className="w-full max-w-[72rem] mx-auto flex items-center bg-[#3e3e3e] rounded-[2rem] px-3 sm:px-6 h-10 sm:h-14 mt-5 sm:mt-16">
                    <CgSearch className="text-white w-4 h-4 sm:w-7 sm:h-7" />
                    <input
                        type="text"
                        className="w-full bg-transparent text-[#aaaaaa] placeholder:text-[#aaaaaa] outline-none text-sm sm:text-lg pl-2 sm:pl-4"
                        placeholder="Search for courses, languages, frameworks, or teachers..."
                    />
                </div>

                <div className='sm:h-20 sm:w-full w-full  mt-7 overflow-auto no-scrollbar  gap-3 sm:pl-10 pl-5 pr-5 flex '>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 px-4 w-auto'>
                        <img className='h-6 w-6 ' src="/css (1).svg" alt="" />
                        <p>CSS</p>
                    </div>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="/javascript.svg" alt="" />
                        <p>Javascript</p>
                    </div>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="/go.svg" alt="" />
                        <p>Go</p>
                    </div>

                    <div className=' border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="/typescript.svg" alt="" />
                        <p>TypeScript</p>
                    </div>
                    <div className='border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="/html.svg" alt="" />
                        <p>HTML</p>
                    </div>
                    <div className=' border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="/Rt.svg" alt="" />
                        <p>React</p>
                    </div>
                    <div className=' border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="/algorithms.svg" alt="" />
                        <p>Algorithms</p>
                    </div>
                    <div className=' border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="/apis.svg" alt="" />
                        <p>APIs</p>
                    </div>
                    <div className=' border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="/node.svg" alt="" />
                        <p>Node.js</p>
                    </div>
                    <div className=' border-1 flex gap-1  border-[#333333] justify-center items-center bg-[#222222] text-white h-10 p-4 w-auto'>
                        <img className='h-6 w-6 ' src="/testing.svg" alt="" />
                        <p>Testing</p>
                    </div>

                </div>
            </div>
            <div className='h-auto flex justify-center pb-10 px-5  w-full bg-[#222222] pt-15  '>
                <div className='sm:h-65 h-[30rem] sm:w-[74rem] w-full sm:flex  justify-between bg-gradient-to-r from-[#052749] via-[#052749] to-[#070216]" '>
                    <img className='sm:h-65 sm:w-[30rem] w-full' src="/thumb-1080.webp" alt="" />
                    <div className=' max-w-[70rem] mx-auto sm:h-full h-auto sm:px-10 px-5 pt-5'>
                        <div className='flex gap-1'>
                            <FaRegChessQueen size={20} color='#e6682d' />
                            <p className='text-sm font-bold text-[#e6682d]'>Featured</p>
                        </div>
                        <div className='h-7 text-sm py-1 px-2 w-10  border-1 border-[#8a8a8a] text-[#8a8a8a] mt-3'> CSS</div>
                        <h1 className='sm:text-2xl text-xl text-white font-bold sm:mt-4 '>Form Styling Essentials | The basics to modern CSS tips...</h1>
                        <p className='sm:text-md text-sm text-white sm:mt-5'>In this tutorial, we'll explore using .form-groups for better organization, making sure our elements inherit font properties, when to use CSS Grid over Flexbox for form layouts plu...</p>
                        <p className='text-sm text-[#8a8a8a] mt-5'>By <span className='font-bold'>Kevin Powell</span> </p>
                    </div>
                </div>
            </div>
            <div className='h-auto pb-20 w-full bg-[#222222] '>
                <div className='flex justify-between sm:px-10 px-5'>
                    <div className='flex '>
                        <IoIosStarOutline size={26} fontWeight={800} color='#f09e14' />
                        <h1 className='text-lg ml-3 text-white font-bold'>Member Exclusive</h1>
                    </div>
                    <div>
                        <p className='text-sm text-[#e6682d]'>view more</p>
                    </div>
                </div>
                <div className='border-1 max-w-[74rem] mx-auto border-[#3e3e3e] sm:ml-10 ml-5 mt-4'></div>
                <div className='flex gap-5 sm:pl-10 pl-5 overflow-auto no-scrollbar '>
                    {cards.map((item) => (<div key={item.id}>
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
                        <FaFireFlameCurved size={26} fontWeight={800} color='#f09e14' />
                        <h1 className='text-lg ml-3 text-white font-bold'>Popular</h1>
                    </div>
                    <div>
                        <p className='text-sm text-[#e6682d]'>view more</p>
                    </div>
                </div>
                <div className='border-1 smax-w-[74rem] wmx-auto order-[#3e3e3e] sm:ml-10 ml-5 mt-4'></div>
                <div className='flex gap-5 pl-10 overflow-auto no-scrollbar '>
                    {Populer.map((item) => (<div key={item.id}>
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
                        <FaBullhorn size={26} fontWeight={800} color='white' />
                        <h1 className='text-lg ml-3 text-white font-bold'>Latest</h1>
                    </div>
                    <div>
                        <p className='text-sm text-[#e6682d]'>view more</p>
                    </div>
                </div>
                <div className='border-1 smax-w-[74rem] wmx-auto order-[#3e3e3e] sm:ml-10 ml-5 mt-4'></div>
                <div className='flex gap-5 pl-10 overflow-auto no-scrollbar '>
                    {latest.map((item) => (<div key={item.id}>
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
                        <SiCss3 size={26} fontWeight={800} color='#663399' />
                        <h1 className='text-lg ml-3 text-white font-bold'>CSS</h1>
                    </div>
                    <div>
                        <p className='text-sm text-[#e6682d]'>view more</p>
                    </div>
                </div>
                <div className='border-1 max-:w-[74rem] mx-auto border-[#3e3e3e] sm:ml-10 ml-5 mt-4'></div>
                <div className='flex gap-5 pl-10 overflow-auto no-scrollbar '>
                    {CSS.map((item) => (<div key={item.id}>
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
                        <IoLogoJavascript size={26} fontWeight={800} color='#f09e14' />
                        <h1 className='text-lg ml-3 text-white font-bold'>JavaScript</h1>
                    </div>
                    <div>
                        <p className='text-sm text-[#e6682d]'>view more</p>
                    </div>
                </div>
                <div className='border-1 max-:w-[74rem] mx-auto border-[#3e3e3e] sm:ml-10 ml-5 mt-4'></div>
                <div className='flex gap-5 pl-10 overflow-auto no-scrollbar '>
                    {JavaScript.map((item) => (<div key={item.id}>
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
            <Footer />
        </div>

    )
}

export default Tutorial
