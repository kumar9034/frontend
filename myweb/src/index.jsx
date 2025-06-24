import React from 'react'
import App from './App'
import { Routes, Route } from 'react-router-dom';
import Firstpage from './components/Pages/Firstpage';

const index = () => {
  return (
    <div>
      <Routes>
            <Route path="/" element={<App />} />
            <Route path='/feature' element={<Firstpage/>} />
          </Routes>
    </div>
  )
}

export default index
