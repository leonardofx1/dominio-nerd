import React from 'react'
import { 
    RiWhatsappFill,
    RiInstagramLine,
    RiPhoneFill,
    RiMailLine,
    RiCopyrightLine
} from 'react-icons/ri'

import * as C from './styles'

const Footer = () => {
    return(
        <C.Container>
        <C.Footer>
            <C.AboutUs>
                <h2>About Us</h2>
                <p>
                    SADLAJSLASJAS
                </p>
                <ul>
                    <li><a href='#'><RiWhatsappFill/></a></li>
                    <li><a href='#'><RiInstagramLine/></a></li>
                </ul>
            </C.AboutUs>
            <C.QuickLinks>
                <h2>Support</h2>
                <ul>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'>Privacy Policy</a></li>
                    <li><a href='#'>Help</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </C.QuickLinks>
            <C.QuickLinks>
            <h2>Menu</h2>
                <ul>
                    <li><a href='#'>Início</a></li>
                    <li><a href='#'>Produtos</a></li>
                    <li><a href='#'>Regras Rápidas</a></li>
                    <li><a href='#'>Calendário de jogos</a></li>
                </ul>
            </C.QuickLinks>
            <C.Contact>
                <h2>Contatos</h2>
                <ul>
                    <li><a href='tel:+5522999424224'><RiPhoneFill/> +55 22 99543-5269</a></li>
                    <li><a href='mailto:marcio.b.a.dias@gmail.com'><RiMailLine/> contato@dominionerd.com</a></li>
                </ul>
            </C.Contact>
        </C.Footer>
        <C.CopyRightText>
            <p><RiCopyrightLine/>Marcio Dias. Para informações e orçamentos: <a href='#'><RiWhatsappFill/></a> <a href='#'><RiInstagramLine/></a>
            </p>
        </C.CopyRightText>
        </C.Container>
    )
}

export default Footer