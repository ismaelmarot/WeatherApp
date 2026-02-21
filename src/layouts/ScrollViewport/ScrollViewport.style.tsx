import styled from 'styled-components'
import { size } from '../../mixins'

export const Viewport = styled.div`
    ${size('100%','100dvh')}
    overflow-y: auto;
    scroll-snap-type: y mandatory;
`