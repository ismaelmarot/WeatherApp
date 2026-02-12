import styled from 'styled-components'
import { flex, size } from '../../mixins'

export const Container = styled.div`
    ${size('100dvw','100dvh')}
    ${flex('column','center','center')}
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
`

export const AlertError = styled.p`
    color: red;
`