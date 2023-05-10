import styled from 'styled-components'

export const MenuContainer = styled.section`
    background: var(--cor-red);
    color: var(--cor-light);
    width: 20%;
    padding: 2rem;
    padding-right: 0;
`

export const List = styled.ul`
    list-style: none;

    :hover{
        background: var(--cor-yellow);
        cursor: pointer;
        font-size: 1.3rem;
    }
`

export const ItemList = styled.li`
    border-radius: 15px 0 0 15px;
    padding: 1rem;
    margin: .5rem 0;
    text-transform: uppercase;
`