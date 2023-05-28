import React, { useState } from 'react'
import { 
    BiCartAdd,
    BiUserCircle
} from 'react-icons/bi'
import {
    CgMenuRound,
    CgCloseO
} from 'react-icons/cg'
import Logo from '/LogoTitle.png'
import { Link } from 'react-router-dom'

import * as C from './styles'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [cartItens, setCartItens] = useState(0)
    return(
        <C.Nav>
            <Link
                style={{textDecoration:'none'}} 
                to='/'
            >
                <C.Logo src={Logo} />
            </Link>
            
            <C.Menu showMenu={showMenu}>
                <Link
                    style={{textDecoration:'none'}} 
                    to='/'//parametro de local
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

            <div style={{ display: 'flex', flexDirection:'row' }}>
                <Link
                    style={{textDecoration:'none'}} 
                    to='/cart'
                >
                    <div style={{ 
                        color: 'var(--cor-yellow)',
                        marginRight: '2rem'
                    }}>
                        <BiCartAdd style={{ height: 32, width: 32 }}/> {cartItens}
                    </div>
                </Link>
                <Link
                    style={{textDecoration:'none'}} 
                    to='/login'
                >
                    <div style={{ 
                        color: `${(props)=> props.theme.colors.colorYellow}`, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        flexDirection: 'column'
                    }}>
                        <BiUserCircle style={{ height: 32, width: 32 }}/> 
                        <p style={{ marginTop: '.5rem' }}>
                            Entrar / Cadastrar
                        </p>
                    </div>
                </Link>
            </div>


        </C.Nav>
    )
}

export default Header