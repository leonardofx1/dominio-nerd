import React from 'react'
import Minis from '/minis.jpg'

import * as C from './styles'
import Card from '../cards'

const Products = () => {
    return(
        <C.Container>
            <C.CardField>
                <Card
                    image={Minis}
                    title='Titulo do card'
                    text='Coisas que serão exibidas'
                    btnText='Comprar'
                />
                <Card
                    image={Minis}
                    title='Titulo do card'
                    text='Coisas que serão exibidas'
                    btnText='Comprar'
                />
                <Card
                    image={Minis}
                    title='Titulo do card'
                    text='Coisas que serão exibidas'
                    btnText='Comprar'
                />
                <Card
                    image={Minis}
                    title='Titulo do card'
                    text='Coisas que serão exibidas'
                    btnText='Comprar'
                />
            </C.CardField>
        </C.Container>
    )
}

export default Products