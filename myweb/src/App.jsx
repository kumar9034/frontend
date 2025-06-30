import React from 'react'


import Secondpage from './components/Secondpage';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';



const App = () => {
  return (
    <>
    
    <div className='hero h-auto w-full flex  '>
        <img className='image1 object-cover relative ' src="/photoHero.webp" alt="" />
      
      <div className='flex absolute'>
        <Navbar/>
        <Section1/>
      </div>
    </div>
      <Secondpage/>
      
      
    </>
  )
}

export default App
