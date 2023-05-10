import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './GlobalStyles.css'
import AboutGame from './pages/about-game'
import Home from './pages/home'
import ContactsPage from './pages/contacts'
import ProductsPage from './pages/products'
import LoginPage from './pages/login'
import DashboardPage from './pages/adm'
import RegisterProducts from './components/dashboard/register-products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<AboutGame />} />
        <Route path='/produtos' element={<ProductsPage />} />
        <Route path='/contatos' element={<ContactsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/dashboard/newProduct' element={<DashboardPage/>} />
        {/* <Route path='/cadastrar' element={<NewUserPage />} />
        <Route path='/adm' element={<DashboardPage />} />
        <Route path='/carrinho' element={<CartPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
