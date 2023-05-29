import styled from 'styled-components'

export const Container = styled.div`
    background:  ${({theme} ) => theme.colorLight};
    display: flex;
    min-height: calc(100vh - 100px);
    position: relative;
    width: 100vw;

    ::before{
        content:'';
        position: absolute;
        width:85%;
        height: 5px;
        top: 100px;
        left: 100px;
        background:${({theme} ) => theme.colors.colordark};
        color: ${({theme} ) => theme.colorLight};

        @media(max-width: 840px){
            left: 40px;
        }
    }

    ::after{
        content:'Produtos';
        position: absolute;
        height: 40px;
        top: 47px;
        left: 100px;
        background: ${({theme} ) => theme.colors.colorDark };
        color: var(--cor-light);
        padding: .5rem 4rem;
        font-size: 2rem;
        font-weight: bold;

        @media(max-width: 840px){
            font-size: 1.5rem;
            padding: .2rem 3rem;
            left: 40px;
            top:57px
        }
    }
`

export const CardField = styled.div`
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 8rem 3rem;
    width:100%;

    @media(max-width: 840px){
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        left: 120px;
    }
`