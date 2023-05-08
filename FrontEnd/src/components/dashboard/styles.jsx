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
`
export const DashboardField = styled.section`
    width: 80%;
`
export const Container = styled.div`
    align-items: center;
    background: var(--cor-light);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 2rem;
    height: 400px;
    min-width: 40%;
    padding: 0 3.5rem;
`
export const FieldContainer = styled.div`
    align-items: start;
    display: flex;
    justify-content: center;
    flex-direction: column;
`