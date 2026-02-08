import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
`

export const AlertError = styled.p`
    color: red;
`