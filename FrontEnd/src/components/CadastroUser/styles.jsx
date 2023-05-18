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
    background: #ffffff2d;
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
    font-weight: 500;
    font-family: sans-serif;
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
        width:280px;
        margin-left: 1rem;
        padding:.8em;
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
        width:280px;
        margin-left: 1rem;
        padding:.8em;
        border-radius: 5px;
        border: none;
        box-shadow: 1px 1px 5px black;
        outline:none;
    }
`

export const Btn = styled.button `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 200px;
    background-color:#fe502d;
    font-weight: bold;
    color: white;
    font-size:1.3rem;
    box-shadow: 1px 1px 10px white;
    margin: 1em;
    
`
