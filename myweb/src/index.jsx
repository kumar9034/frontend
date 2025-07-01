import React from 'react'
import App from './App'
import { Routes, Route } from 'react-router-dom';
import Firstpage from './components/Pages/Firstpage';
import Second from './components/Pages/Second';
import Thirdpage from './components/Pages/Thirdpage';
import Pricing from './components/Pages/Pricing';
import Courses from './components/Pages/Courses';
import Tutorial from './components/Pages/Tutorial';

const index = () => {
  return (
    <div>
      <Routes>
            <Route path="/" element={<App />} />
            <Route path='/feature' element={<Firstpage/>} />
            <Route path='/learn' element={<Second/>} />
            <Route path='/login' element={<Thirdpage/>} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/tutorial' element={<Tutorial/>} />
             <Route path="*" element={<NotFound />} />
          </Routes>
    </div>
  )
}

export default index
