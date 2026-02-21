import styled from 'styled-components'
import { flex, size } from '../mixins'

export const ScreenMobile = styled.div`
    ${flex('column','center','center')}
    ${size('100vw','100dvh')}    
    position: relative;
    scroll-snap-align: start;
    box-sizing: border-box;
    padding: 1rem 0.5rem;
    overflow: hidden;
`

export const BackgroundVideo = styled.video`
  ${size('100%','100%')}
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 0;
`

export const VideoOverlay = styled.div`
  ${size('100%','100%')}
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`