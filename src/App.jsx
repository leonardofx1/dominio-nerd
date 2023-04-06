import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './GlobalStyles.css'
import AboutGame from './pages/about-game'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutGame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
