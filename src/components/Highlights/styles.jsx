import styled from 'styled-components'

import backgroundPage from '/hq.bg01.png'

export const Main = styled.main`
    background: url(${backgroundPage});
    background-size: cover;
    display: flex;
    min-height: calc(100vh - 100px);
    position: relative;
    width: 100vw;

    @media(max-width: 840px){
        align-items: center;
        flex-direction: column;
        justify-content: center;
        min-height: 60vh;
    }
`

export const Container = styled.div`
    align-items: center;
    background: #00000075;
    color: var(--cor-light);
    display: flex;
    justify-content: center;
    width: 50%;
    overflow: hidden;

    @media(max-width: 840px){
        width: 100%;
        min-height:60vh;
    }
`
export const TextField = styled.div`
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 80px;
    text-align: center;
    width: 40%;
    
    @media(max-width: 840px){
        top:10px;
        width: 90%;
    }
`

export const Logo = styled.img`
    margin-top: -100px;
    width:350px;

    @media(max-width: 840px){
        margin-top: -50px;
    }
`

export const SlideField = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 65%;
    overflow: hidden;

    @media(max-width: 840px){
        position: absolute;
        top: 500px;
        left: auto;
        width: 70%;
    }
`

export const SlideBox = styled.div`
    background: var(--cor-light);
    border-radius: 15px;
    margin: 0 1rem;
    min-height: calc(90vh - 100px);
    min-width: 30vw;

    @media(max-width: 840px){
        min-height: 35vh;
        min-width: 70vw;
        margin-bottom: 2rem;
    }
`

export const SlideButton = styled.button`
    background: none;
    border: none;
    font-size: 3rem;
    margin: 0;
    padding:0;
    z-index: 5;

    svg{
        color: var(--cor-yellow);
    }

    @media(max-width: 840px){
        position: absolute;
        top: 580px;
    }
`

export const Mini = styled.img`
    position: absolute;
    width: 300px;

    @media(max-width: 840px){
        display: none;
    }
`