import styled from 'styled-components'

import backgroundPage from '/hq.bg01.png'

export const Main = styled.main`
    background: url(${backgroundPage});
    background-size: cover;
    min-height: calc(100vh - 100px);
    width: 100vw;
`