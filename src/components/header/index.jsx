import React, { useState } from 'react'
import { BiCartAdd } from 'react-icons/bi'
import {
    CgMenuRound,
    CgCloseO
} from 'react-icons/cg'
import { Link } from 'react-router-dom'

import * as C from './styles'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [cartItens, setCartItens] = useState(0)
    return(
        <C.Nav>
            
                <C.Title> 
                    Dominio Nerd
                </C.Title>
            
                <C.Menu showMenu={showMenu}>
                    <Link
                        style={{textDecoration:'none'}} 
                        to='/'
                    >
                        <C.ItemMenu>
                            <C.LinkItem>
                                Início  
                            </C.LinkItem>
                        </C.ItemMenu>
                    </Link>
                    <Link
                        style={{textDecoration:'none'}} 
                        to='/sobre'
                    >
                        <C.ItemMenu>       
                            <C.LinkItem>
                                Sobre o Jogo
                            </C.LinkItem>
                        </C.ItemMenu>
                    </Link>
                    <Link
                        style={{textDecoration:'none'}} 
                        to='/produtos'
                    >
                        <C.ItemMenu>
                            <C.LinkItem>
                                Produtos
                            </C.LinkItem>
                        </C.ItemMenu>
                    </Link>
                    <Link
                        style={{textDecoration:'none'}} 
                        to='/contatos'
                    >
                        <C.ItemMenu>
                            <C.LinkItem>
                                Contatos
                            </C.LinkItem>
                        </C.ItemMenu>
                    </Link>
                </C.Menu>
            
            <C.ButtonMenu
                onClick={() => setShowMenu(!showMenu)}
            >
                <C.IconMenu>
                    {showMenu? <CgCloseO />:
                        <CgMenuRound>
                            <C.Menu 
                                showMenu={showMenu}
                            >
                                <C.ItemMenu>
                                    Início
                                </C.ItemMenu>
                                <C.ItemMenu>
                                    Sobre o jogo
                                </C.ItemMenu>
                                <C.ItemMenu>
                                    Produtos
                                </C.ItemMenu>
                                <C.ItemMenu>
                                    Contatos
                                </C.ItemMenu>
                            </C.Menu>
                        </CgMenuRound>}
                </C.IconMenu>
            </C.ButtonMenu>

        </C.Nav>
    )
}

export default Header