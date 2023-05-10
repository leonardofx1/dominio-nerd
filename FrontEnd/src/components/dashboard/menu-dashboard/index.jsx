import React from 'react'

import * as C from './styles'
import { Link } from 'react-router-dom'

const MenuDashboard = () => {
    return(
        <C.MenuContainer>
            <C.List>
                <Link
                    to={'newProduct'}
                >
                    <C.ItemList>Cadastrar de Produtos</C.ItemList>
                </Link>
                <C.ItemList>Pedidos Pendentes</C.ItemList>
                <C.ItemList>Estoque</C.ItemList>
                <C.ItemList>Histórico de Vendas</C.ItemList>
            </C.List>
        </C.MenuContainer>
    )
}

export default MenuDashboard