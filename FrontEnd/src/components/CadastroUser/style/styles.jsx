import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: var(--cor-red);

    min-height: calc(100vh - 100px);
    max-height: auto;

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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        max-height: auto;
        width: 100%;
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
    flex-flow: row wrap;

    height: auto;
    width: 100%;

    text-align: start;
    font-family: sans-serif;

  
    & label {
        width: 70%;

        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: start;
        gap:10px;
    }
    & input {
        width:280px;
        height: 40px;
        min-width:auto;


        margin-left: 1rem;

        border-radius: 5px;
        border:1px solid #00000068;

        outline:none;
    }
   
`

export const UserDataContainer = styled.div `
    display: flex;
    height: auto;
    flex-wrap: wrap;
    gap:10px;
    width: 100%;
    height: auto;
    border:1px solid #00000068;
    padding:1rem;

    & label {
        margin-bottom: .5em;
    }

    & p {
        color:red;
        font-size: small;
        margin-left: 1rem;
    }

`
export const CadastroType = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  padding: 1rem;

  border:1px solid #00000068;

    & p {
        display: block;
        width: 100%;
        padding: .5rem;

        font-weight: bold;
    }
`

export const FieldRadio = styled.section `
    display: flex;
    align-items: center;

    width:100%;

    & label {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 30%;
        & input {
            width: 15px;
        }
    }
    & input {
        display: inline-block;
        width: 150px;
        margin-bottom: .1rem;
       
    }
   
    
    
   
`

export const DataUser =styled.div `
    display:flex;
    justify-content: space-between;
    position:relative;

    width: 100%;
    height: auto;
    border:1px solid #00000068;

    & label{
        margin: .5em;
    }
`

export const FieldContainerUser  =  styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    border: none;

    width: 100%;
    max-height: 100%;
    min-height: 300px;
    min-width: 320px;

    padding: .5rem;
  
    & div {
        width: 50%;
        min-width: 200px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export const Btn = styled.button `
    width: 180px;
    background-color:${({theme}) => theme.colors.colorOrange};
    font-weight: 500;
    color: white;
    font-size:1.2rem;
    margin: 1em;
    
`
