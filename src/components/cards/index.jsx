import react from 'react'
import { BiCartAdd } from 'react-icons/bi'

import * as C from './styles'

const Card = ({ image, title, text, btnText, textLink }) => {

    return(
        <C.Container>
            <C.ImgCard 
                src={image} 
                alt='Imagem do card'
            />
            <C.TextField>
                <h5>
                    {title}
                </h5>
                <p>
                    {text}
                </p>
                {btnText ?
                    <C.Btn><BiCartAdd/> {btnText}</C.Btn>:
                    <C.TextLink>{textLink}</C.TextLink>}
            </C.TextField>
        </C.Container>
    )
}

export default Card