import React from 'react'
import { 
    RiWhatsappFill,
    RiInstagramLine,
    RiPhoneFill,
    RiMailLine,
    RiCopyrightLine
} from 'react-icons/ri'

import Logo from '/LogoTitle.png'

import * as C from './styles'

const Footer = () => {
    return(
        <C.Container>
        <C.Footer>
            <C.AboutUs>
                <C.Logo src={Logo} />
                <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                </p>
                <C.ALink href='#'><RiWhatsappFill style={{ marginTop:20 , width: 38, height:38 }}/></C.ALink>
                <C.ALink href='#'><RiInstagramLine style={{ marginLeft:10 , width: 38, height:38 }}/></C.ALink>
            </C.AboutUs>
            <C.QuickLinks>
                <C.Title>Support</C.Title>
                <C.List>
                    <C.ListItem><C.ALink href='#'>FAQ</C.ALink></C.ListItem>
                    <C.ListItem><C.ALink href='#'>Privacy Policy</C.ALink></C.ListItem>
                    <C.ListItem><C.ALink href='#'>Help</C.ALink></C.ListItem>
                    <C.ListItem><C.ALink href='#'>Contact</C.ALink></C.ListItem>
                </C.List>
            </C.QuickLinks>
            <C.QuickLinks>
            <C.Title>Menu</C.Title>
                <C.List>
                    <C.ListItem><C.ALink href='#'>Início</C.ALink></C.ListItem>
                    <C.ListItem><C.ALink href='#'>Produtos</C.ALink></C.ListItem>
                    <C.ListItem><C.ALink href='#'>Regras Rápidas</C.ALink></C.ListItem>
                    <C.ListItem><C.ALink href='#'>Calendário de jogos</C.ALink></C.ListItem>
                </C.List>
            </C.QuickLinks>
            <C.Contact>
                <C.Title>Contatos</C.Title>
                <C.List>
                    <C.ListItem><C.ALink href='tel:+5522999424224'><RiPhoneFill style={{ marginRight:10 , width: 20, height:20 }}/> +5522 99543-5269</C.ALink></C.ListItem>
                    <C.ListItem><C.ALink href='mailto:marcio.b.a.dias@gmail.com'><RiMailLine style={{ marginRight:10 , width: 20, height:20 }}/>contato@dominionerd.com</C.ALink></C.ListItem>
                </C.List>
            </C.Contact>
        </C.Footer>
        <C.CopyRightText>
            <p>Copyright <RiCopyrightLine/> 2023 Dominio Nerd. All Rights Reserved. By <C.ALink href='tel:+5522999424224'>Marcio Dias.</C.ALink> <C.ALink href='#'><RiWhatsappFill/></C.ALink> <C.ALink href='#'><RiInstagramLine/></C.ALink>
            </p>
        </C.CopyRightText>
        </C.Container>
    )
}

export default Footer