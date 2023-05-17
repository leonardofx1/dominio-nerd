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
    height: auto;
    min-width: 40%;
    & form {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    & form button {
        width: 200px;
        margin: 1rem auto;
    }
`
export const Title = styled.h2`
    margin: 2rem;
`

export const FieldContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: start;
    gap: 10px;
    & label {
        display: flex;
        width: 70%;
        justify-content: center;
        flex-direction: column;
        text-align: start;
        gap:10px;
        & input {
            align-self: end;
        }
    }
    & input {
        width:250px;
        margin-left: 1rem;
        padding:.5em;
        border-radius: 5px;
        border: none;
        box-shadow: 1px 1px 5px black;
        outline:none;
    }
   
`

export const Entrega = styled.div `
    display: flex;
    height: auto;
    flex-wrap: wrap;
    flex-direction: column;
    gap:10px;
    & input{
        width:200px;
        margin-left: 1rem;
        padding:.5em;
        border-radius: 5px;
        border: none;
        box-shadow: 1px 1px 5px black;
        outline:none;
    }
`
