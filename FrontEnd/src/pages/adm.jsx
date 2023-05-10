import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import MenuDashboard from '../components/dashboard/menu-dashboard'
import RegisterProducts from '../components/dashboard/register-products'

const DashboardPage = () => {
    return(
        <>
            <Header/>
            <div style={{ display: 'flex' }} >
                <MenuDashboard/>
                <RegisterProducts/>
            </div>
            <Footer/>
        </>
    )
}

export default DashboardPage