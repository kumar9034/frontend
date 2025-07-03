import React from 'react'


import Secondpage from './components/Secondpage';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';



const App = () => {
  return (
    <>
    
    <div className='hero h-auto w-full flex  '>
        <img className=' relative w-full sm:h-auto h-[45rem]  object-cover ' src="/photoHero.webp" alt="" />
      
      <div className='flex absolute'>
        <Navbar fixed="fixed"
        bg='bg-transparent'
        text="text-[#c02d28]"/>
        <Section1/>
      </div>
    </div>
      <Secondpage/>
      
      
    </>
  )
}

export default App
