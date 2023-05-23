import styled from 'styled-components'

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
    & span {
        margin-top: .5rem;
    }
    & input {
        padding: .5rem;
        margin-top: .5rem;
        border-radius: 5px;
        border:none;
        box-shadow: 1px 1px 10px black;

    }
`
export const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
`
export const BtnForm = styled.button `
    padding: .8rem;
    background-color:#a1a1a1;
    width: 180px;
    transition: all 200ms ease-in-out;
    &:hover {
        background-color:#3e3e53;
        color:white;
    }
`