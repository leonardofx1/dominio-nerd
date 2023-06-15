import React from 'react'
import Minis from '/minis.jpg'

import * as C from './styles'
import Card from '../Cards'

const About = () => {
    const oi = 'po'
    console.log(oi)
    return(
        <C.Container>
            <C.CardField>
                <Card
                    image={Minis}
                    title='Titulo do card'
                    text='Coisas que serão exibidas'
                    textLink='Saiba mais'
                />
                <Card
                    image={Minis}
                    title='Titulo do card'
                    text='Coisas que serão exibidas'
                    textLink='Saiba mais'
                />
                <Card
                    image={Minis}
                    title='Titulo do card'
                    text='Coisas que serão exibidas'
                    textLink='Saiba mais'
                />
            </C.CardField>
        </C.Container>
    )
}

export default About