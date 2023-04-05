import styled from 'styled-components'

import backgroundPage from '/hq.bg01.png'

export const Main = styled.main`
    background: url(${backgroundPage});
    background-size: cover;
    display: flex;
    min-height: calc(100vh - 100px);
    position: relative;
    width: 100vw;
`

export const Container = styled.div`
    align-items: center;
    background: #00000075;
    color: var(--cor-light);
    display: flex;
    justify-content: center;
    min-width: 50%;
    overflow: hidden;
`
export const TextField = styled.div`
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 80px;
    text-align: center;
    width: 40%;
`

export const SlideContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 65%;
    overflow: hidden;
`

export const SlideBox = styled.div`
    background: var(--cor-light);
    border-radius: 15px;
    margin: 0 1rem;
    min-height: calc(90vh - 100px);
    min-width: 30vw;
`

export const Mini = styled.img`
    position: absolute;
    width: 300px
`