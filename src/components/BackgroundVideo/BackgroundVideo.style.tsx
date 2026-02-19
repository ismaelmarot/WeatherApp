import styled from 'styled-components'
import { size } from '../../mixins'

export const Video = styled.video`
    ${size('100%','100%')}
    position: fixed;
    inset: 0;
    object-fit: cover;
    z-index: 0;
    pointer-events: none;
`