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
                <C.Title>About Us</C.Title>
                <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                </p>
                <C.List>
                    <C.ListItem><C.ALink href='#'><RiWhatsappFill/></C.ALink></C.ListItem>
                    <C.ListItem><C.ALink href='#'><RiInstagramLine/></C.ALink></C.ListItem>
                </C.List>
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
                    <C.ListItem><C.ALink href='#'>alendário de jogos</C.ALink></C.ListItem>
                </C.List>
            </C.QuickLinks>
            <C.Contact>
                <C.Title>Contatos</C.Title>
                <C.List>
                    <C.ListItem><C.ALink href='tel:+5522999424224'><RiPhoneFill/> +5522 99543-5269</C.ALink></C.ListItem>
                    <C.ListItem><C.ALink href='mailto:marcio.b.a.dias@gmail.com'><RiMailLine/>contato@dominionerd.com</C.ALink></C.ListItem>
                </C.List>
            </C.Contact>
        </C.Footer>
        <C.CopyRightText>
            <p><RiCopyrightLine/>Marcio Dias. Para informações e orçamentos: <C.ALink href='#'><RiWhatsappFill/></C.ALink> <C.ALink href='#'><RiInstagramLine/></C.ALink>
            </p>
        </C.CopyRightText>
        </C.Container>
    )
}

export default Footer