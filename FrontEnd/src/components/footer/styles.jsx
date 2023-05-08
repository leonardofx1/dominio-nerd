import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    justify-content: end;
    align-items: end;
    min-height: 30vh;
    background: var(--cor-gray);
    color: var(--cor-yellow);
    padding: 2rem 1rem;
`

export const Footer = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
    padding: 5rem, 10rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-gap: 2rem;

    @media (max-width: 840px){
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`
export const AboutUs = styled.div`
`

export const QuickLinks = styled.div`
    position: relative;
    display: inline-block;
    
`

export const Contact = styled.div`
    position: relative;
    display: inline-block;
`

export const CopyRightText = styled.div`
    border-top: 2px solid var(--cor-yellow);
    padding-top: 1rem;
    text-align: center;
`
export const Logo = styled.img`
    margin-left: -1rem;
    width: 150px;
`

export const Title = styled.h2`
    position: relative;
    margin-bottom: 1rem;
`

export const List = styled.ul`
    margin-top: 2rem;
    display: grid;

    
`

export const ListItem = styled.li`
    list-style: none;
    margin-bottom: 1rem;
`

export const ALink = styled.a`
    color: var(--cor-yellow);

    :hover{
        color: var(--cor-light);
    }
`