import React from 'react'


import Secondpage from './components/Secondpage';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';



const App = () => {
  return (
    <>
    
    <div className='h-auto w-full flex '>
        <img className='object-cover relative ' src="/photoHero.webp" alt="" />
      <div className=''>
      </div>
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
