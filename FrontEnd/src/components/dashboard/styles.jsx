import styled from 'styled-components'

export const Main = styled.main`
    background: var(--cor-light);
    display: flex;
    min-height: calc(100vh - 100px);
`
export const MenuContainer = styled.section`
    background: var(--cor-red);
    color: var(--cor-light);
    width: 20%;
    padding: 2rem;
    padding-right: 0;
`
export const DashboardField = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: var(--cor-red);
    padding: 2rem 0 0 0;
    width: 80%;
`
export const Container = styled.div`
    align-items: center;
    border: 3px solid var(--cor-red);
    background: var(--cor-light);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 2rem;
    padding: 1rem;
    width: 50%;
`
export const FieldContainer = styled.div`
    align-items: start;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 2rem 0;
`
export const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
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