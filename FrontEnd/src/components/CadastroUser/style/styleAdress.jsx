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

export const CepContainer = styled.div `
    & a {
        width: 90%;
        text-align: end;
        padding:.5rem;
    }
`