import styled from 'styled-components'

export const Container = styled.div`
    height: 100dvh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    /* Safe Area */
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
`

export const AlertError = styled.p`
    color: red;
`