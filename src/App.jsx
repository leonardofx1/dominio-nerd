import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './GlobalStyles.css'
import AboutGame from './pages/about-game'
import Home from './pages/home'
import ContactsPage from './pages/contacts'
import ProductsPage from './pages/products'
import LoginPage from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<AboutGame />} />
        <Route path='/produtos' element={<ProductsPage />} />
        <Route path='/contatos' element={<ContactsPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
