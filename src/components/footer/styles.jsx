import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    justify-content: end;
    align-items: end;
    min-height: 30vh;
    background: var(--cor-gray);
    color: var(--cor-yellow);
    padding: 5rem;
`

export const Footer = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
    padding: 5rem, 10rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-gap: 2rem;
`
export const AboutUs = styled.div``

export const QuickLinks = styled.div`
    position: relative;
    display: inline-block;
`

export const Contact = styled.div`
    position: relative;
    display: inline-block;
`

export const CopyRightText = styled.div``

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

    svg{
        width: 36px;
        height: 36px;
    }
    
    :hover{
        color: var(--cor-light);
    }
`