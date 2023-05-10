import styled from 'styled-components'

export const Container = styled.div`
    margin:1rem;
    width:18rem;
    border: none;
    box-shadow: 1px 1px 10px  black;
    @media(max-width: 840px){
        margin-bottom: 1rem;
    }
`

export const ImgCard = styled.img`
    border: none;
    width:100%;
    height:100%;
    transition: all 200ms ease-in-out;
    &:hover {
        scale: 1.2;
    }
`

export const ContainerImg = styled.figure `
    width: 100%;
    height: 240px;
    overflow: hidden;
`

export const TextField = styled.div`
    align-items: center;
    border: none; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -6px;
    padding: 1rem .5rem;
    width:100%;
`

export const Btn = styled.button`
    background: none;
    box-shadow: 1px 1px 10px  black;
    margin-top: 1rem;
    padding: .5rem 3rem;

    :hover{
        background: var(--cor-yellow);
        cursor: pointer;
    }
`

export const TextLink = styled.a`
    margin-top: 2rem;
    color: var(--cor-dark);
    
    :hover{
        color: var(--cor-yellow);
        cursor: pointer;
    }
`