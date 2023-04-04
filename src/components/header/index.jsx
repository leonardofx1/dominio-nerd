import React, { useState } from 'react'
import {
    CgMenuRound,
    CgCloseO
} from 'react-icons/cg'

import * as C from './styles'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <C.Nav>
            
                <C.Title> 
                    Dominio Nerd
                </C.Title>
            
            
                <C.Menu showMenu={showMenu}>
                    <C.ItemMenu>
                        <C.LinkItem
                            style={{textDecoration:'none'}} 
                            to='home'
                        >
                            Início  
                        </C.LinkItem>
                    </C.ItemMenu>
                    <C.ItemMenu>
                        <C.LinkItem
                            style={{textDecoration:'none'}} 
                            to='about'
                        >
                            Sobre o jogo
                        </C.LinkItem>
                    </C.ItemMenu>
                    <C.ItemMenu>
                        <C.LinkItem
                            style={{textDecoration:'none'}} 
                            to='products'
                        >
                            Produtos
                        </C.LinkItem>
                    </C.ItemMenu>
                    <C.ItemMenu>
                        <C.LinkItem
                            style={{textDecoration:'none'}} 
                            to='constact'
                        >
                            Contatos
                        </C.LinkItem>
                    </C.ItemMenu>
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