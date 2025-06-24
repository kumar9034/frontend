import React from 'react'
import App from './App'
import { Routes, Route } from 'react-router-dom';
import Firstpage from './components/Pages/Firstpage';
import Second from './components/Pages/Second';

const index = () => {
  return (
    <div>
      <Routes>
            <Route path="/" element={<App />} />
            <Route path='/feature' element={<Firstpage/>} />
            <Route path='/learn' element={<Second/>} />
          </Routes>
    </div>
  )
}

export default index
