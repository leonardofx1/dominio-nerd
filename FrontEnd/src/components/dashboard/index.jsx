import React from 'react'

import { Routes, Route } from 'react-router-dom'

import MenuDashboard from './menu-dashboard'
import RegisterProducts from './register-products'
import PedingOrders from './peding-orders'

import * as C from './styles'

const Dashboard = () => {
    return(
        <C.Main>
            <MenuDashboard/>
            <Routes>
            <Route path='/dashboard/newProduct' element={<RegisterProducts/>} />
            <Route path='/dashboard/pending-orders' element={<PedingOrders/>} />
            </Routes>
        </C.Main>

    )
}

export default Dashboard