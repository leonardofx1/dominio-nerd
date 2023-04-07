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
    }
`