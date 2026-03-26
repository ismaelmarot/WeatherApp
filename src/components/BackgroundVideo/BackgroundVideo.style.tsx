import styled from 'styled-components'
import { size } from '../../mixins'

export const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
`

export const Video = styled.video`
    ${size('100%','100%')}
    object-fit: cover;
    z-index: 0;
    pointer-events: none;
`