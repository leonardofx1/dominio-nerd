import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './GlobalStyles.css'
import AboutGame from './pages/about-game'
import Home from './pages/home'
import Products from './pages/products'
import Contacts from './pages/contacts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<AboutGame />} />
        <Route path='/produtos' element={<Products />} />
        <Route path='/contatos' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
