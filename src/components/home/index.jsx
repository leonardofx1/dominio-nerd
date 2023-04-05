import React from 'react'

import * as C from './styles'
import MiniBotton from '/mini-wonderwoman.svg'
import MiniTop from '/mini-thor.svg'

const Home = () => {
    return (
        <C.Main>
            <C.Mini
                src={MiniBotton}
                alt='Miniatura da Mulher Maravilha'
                style={{
                    bottom:-10,
                    right:375
                }}
            />
            <C.Mini
                src={MiniTop}
                alt='Miniatura do Thor'
                style={{
                    right:10,
                    top:-40
                }}
            />
            <C.Container>
                <C.TextField>
                    <h1 style={{marginBottom:'1rem'}}>Dominio Nerd</h1>
                    <h2 style={{marginBottom:'1rem'}}>Venha jogar Heroclix!</h2>
                    <p style={{marginBottom:'2rem'}}>Nesse jogo, acontece e então as coisas serão jogadas com regras e detalhes para  melhor quando então foi assim que se fez e com isso o melhor de tudo que pode e vença desafios.</p>
                    <button>Saiba mais</button>
                </C.TextField>
            </C.Container>
            <C.Container>
                <button style={{zIndex:5}}>Prev</button>
                <C.SlideField>
                    <C.SlideBox>

                    </C.SlideBox>
                    <C.SlideBox>
                        
                    </C.SlideBox>
                    <C.SlideBox>
                        
                    </C.SlideBox>
                </C.SlideField>
                <button style={{zIndex:5}}>Next</button>
            </C.Container>
        </C.Main>
    )
}

export default Home