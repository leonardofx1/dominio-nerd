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
`
export const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
`