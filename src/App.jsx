import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './GlobalStyles.css'
import AboutGame from './pages/about-game'
import Home from './pages/home'
import Contacts from './pages/contacts'
import ProductsPage from './pages/products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<AboutGame />} />
        <Route path='/produtos' element={<ProductsPage />} />
        <Route path='/contatos' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
