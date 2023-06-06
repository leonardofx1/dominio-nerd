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
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 2rem;
    height: auto;
    width:55%;
   
    
    & form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
   
`
export const Title = styled.h2`
    align-self: flex-start;
    width: 100%;
    color: ${(props) => props.theme.colors.colorGray};
    border:1px solid #00000068;
`

export const FieldContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    width: 100%;
    text-align: start;
    font-family: sans-serif;
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
    gap:10px;
    width: 100%;
    border:1px solid #00000068;
    padding:1rem;
    & p {
        color:red;
        font-size: small;
        margin-left: 1rem;
    }
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
export const CadastroType = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border:1px solid #00000068;
  padding: 1rem;
    & p {
        display: block;
        width: 100%;
        padding: .5rem;
        font-weight: bold;
    }
`

export const FieldRadio = styled.div `
    display: flex;

    align-items: center;
    width:100%;
    & label {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 30%;
    }
    & input {
        display: inline-block;
        width: 15px;
        margin-bottom: .1rem;
    }
   
    
    
   
`

export const DataUser =styled.div `
    width: 100%;
    display:flex;
    height: 100%;
    justify-content: space-between;
    border:1px solid #00000068;
    & label{
        margin: .5em;
    }
`

export const FieldContainerUser  =  styled.div `
    display: flex;
    justify-content: space-evenly;
    border: none;
    width: 100%;
    height: 100%;
    min-width: 320px;
    & div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }
`

export const RadioContainer = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const Btn = styled.button `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 200px;
    background-color:${({theme}) => theme.colors.colorOrange};
    font-weight: bold;
    color: white;
    font-size:1.3rem;
    box-shadow: 1px 1px 10px white;
    margin: 1em;
    
`
