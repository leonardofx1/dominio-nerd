import { styled } from "styled-components";

export const NumPais = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    
    width: 100%;

    & input {
        width: 118px;
    }
`

export const CepContainer = styled.section `
    width: 100%;
    margin-top: 1rem;

    & input {
        width: 90%;
        margin-bottom: .5em;
    }
    & a {
        display: block;
        width: 100%;
        margin-left:.8rem;
        font-size: 1em;
      
    }
`