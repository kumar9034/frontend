import React from 'react'
import App from './App'
import { Routes, Route } from 'react-router-dom';
import Firstpage from './components/Pages/Firstpage';
import Second from './components/Pages/Second';
import Thirdpage from './components/Pages/Thirdpage';

const index = () => {
  return (
    <div>
      <Routes>
            <Route path="/" element={<App />} />
            <Route path='/feature' element={<Firstpage/>} />
            <Route path='/learn' element={<Second/>} />
            <Route path='/login' element={<Thirdpage/>} />
          </Routes>
    </div>
  )
}

export default index
