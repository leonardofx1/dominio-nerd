import styled from 'styled-components'

export const MenuContainer = styled.section`
    background: ${({theme}) => theme.colors.colorOrange};
    color: ${({theme}) => theme.colors.colorLight};
    width: 20%;
    padding: 2rem;
    padding-right: 0;
`

export const List = styled.ul`
    list-style: none;

    :hover{
        background: ${({theme}) => theme.colors.colorYellow};
        font-size: 1.1rem;
    }
`

export const ItemList = styled.li`
    border-radius: 15px 0 0 15px;
    padding: 1rem;
    margin: .5rem 0;
    text-transform: uppercase;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    color:white;
`
