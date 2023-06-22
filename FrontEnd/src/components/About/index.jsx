import React from 'react'
import Minis from '/minis.jpg'

import * as S from './styles'
import Card from '../Cards'

const About = () => {
    const oi = 'po'
    console.log(oi)
    return(
        <S.Container>
            <S.CardField>
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
            </S.CardField>
        </S.Container>
    )
}

export default About