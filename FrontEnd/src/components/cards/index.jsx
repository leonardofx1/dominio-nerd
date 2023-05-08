import React, { useState } from 'react'
import { BiCartAdd } from 'react-icons/bi'
import { ProductsInCart } from '../counters'

import * as C from './styles'

const Card = ({ image, title, text, btnText, textLink }) => {
    const [ProductCounter, setProductCounter] = useState(0)

    const addToCart = () => setProductCounter(ProductCounter+1)

    return(
        <C.Container>
            <C.ImgCard 
                src={image} 
                alt='Imagem do card'
            />
            <C.TextField>
                <h3>
                    {title}
                </h3>
                {btnText && <h5>
                    Quantidade: {ProductCounter}
                </h5>}
                <p>
                    {text}
                </p>
                {btnText ?
                    <C.Btn
                        onClick={addToCart}
                    ><BiCartAdd/> {btnText}</C.Btn>:
                    <C.TextLink>{textLink}</C.TextLink>}
            </C.TextField>
        </C.Container>
    )
}

export default Card