import styled from 'styled-components'

export const ScrollContainer = styled.div`
    height: 100vh;
    overflow-y: auto;

    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;

    & > section {
        scroll-snap-align: start;
    }
`