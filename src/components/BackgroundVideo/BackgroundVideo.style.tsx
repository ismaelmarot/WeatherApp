import styled from 'styled-components'
import { size } from '../../mixins'

export const Video = styled.video`
    ${size('100vw','100vh')}
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 0;
    pointer-events: none;
`