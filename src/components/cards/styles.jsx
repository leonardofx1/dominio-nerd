import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 1rem;
    width:18rem;

    @media(max-width: 840px){
        margin-bottom: 1rem;
    }
`

export const ImgCard = styled.img`
    border: 2px solid var(--cor-dark);
    width:100%;
`

export const TextField = styled.div`
    align-items: center;
    border: 2px solid var(--cor-dark);  
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -6px;
    padding: 1rem .5rem;
    width:100%;
`

export const Btn = styled.button`
    background: none;
    border: 2px solid var(--cor-dark);
    border-radius: 0;
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