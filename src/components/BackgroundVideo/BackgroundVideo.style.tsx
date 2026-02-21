import styled from 'styled-components'
import { size } from '../../mixins'

export const Video = styled.video`
    ${size('100%','100%')}
    ${size('100vw','100vh')}
    position: fixed;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: -1;
`