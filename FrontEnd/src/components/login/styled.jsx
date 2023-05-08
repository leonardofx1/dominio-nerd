import styled from 'styled-components'

export const Main = styled.main`
    align-items: center;
    background: var(--cor-red);
    display: flex;
    min-height: calc(100vh - 100px);
    justify-content: center;
    padding: 2rem;
`

export const Container = styled.section`
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
export const Title = styled.h2`
    margin-bottom: 2rem;
`

export const FieldContainer = styled.div`
    align-items: start;
    display: flex;
    justify-content: center;
    flex-direction: column;
`