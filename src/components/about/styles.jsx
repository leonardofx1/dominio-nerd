import styled from 'styled-components'

export const Container = styled.div`
    background: var(--cor-light);
    display: flex;
    min-height: calc(100vh - 100px);
    position: relative;
    width: 100vw;

    ::before{
        content:'';
        position: absolute;
        width:85%;
        height: 5px;
        top: 100px;
        left: 100px;
        background: var(--cor-dark);
        color: var(--cor-light);

        @media(max-width: 840px){
            left: 40px;
        }
    }

    ::after{
        content:'Sobre o Jogo';
        position: absolute;
        height: 40px;
        top: 47px;
        left: 100px;
        background: var(--cor-dark);
        color: var(--cor-light);
        padding: .5rem 4rem;
        font-size: 2rem;
        font-weight: bold;

        @media(max-width: 840px){
            font-size: 1.5rem;
            padding: .2rem 3rem;
            left: 40px;
            top:57px
        }
    }
`

export const CardField = styled.div`
    display:flex;
    position: absolute;
    top: 150px;
    left: 190px;

    @media(max-width: 840px){
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        left: 120px;
    }
`