import styled from 'styled-components'

import backgroundPage from '/hq.bg01.png'

export const Main = styled.main`
    background: url(${backgroundPage});
    background-size: cover;
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
    margin: 0 0 5px 0;
    justify-content: space-between;
    max-height: auto;

    @media(max-width: 840px){
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`

export const Container = styled.div`
    align-items: center;
    background: #00000075;
    color:  ${(props) => props.theme.colorLight};
    display: flex;
    justify-content: center;
    height:100%;
    width: 50%;
    overflow: hidden;

    @media(max-width: 840px){
        width: 100%;
    }
`
export const TextField = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    width: 40%;
    
    @media(max-width: 840px){
       width: 100%;
       padding:1em;
       font-weight: bold;
    }
`
export const LogoIcon = styled.img`

    width: 150px;
`

export const Logo = styled.img`
    margin-top: -50px;
    width:350px;

    @media(max-width: 840px){
     width: 85%;
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
        top: 550px;
        left: auto;
        width: 70%;
    }
`

export const SlideBox = styled.div`
    background:  ${(props) => props.theme.colorLight};
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
        color: ${(props) => props.theme.colors.colorYellow };
    }

    @media(max-width: 840px){
        position: absolute;
        top: 650px;
    }
`

export const Mini = styled.img`
    position: absolute;
    width: 300px;

    @media(max-width: 840px){
        display: none;
    }
`