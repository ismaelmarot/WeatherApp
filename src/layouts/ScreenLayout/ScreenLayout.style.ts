import styled from 'styled-components'
import { flex } from '../../mixins'

export const ScreenLayoutBase = styled.section`
  ${flex('column','center','center')}
  min-height: 100dvh;
  width: 100%;
  scroll-snap-align: start;

  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`

export const ScreenLayoutGlass = styled(ScreenLayoutBase)`
  background-color: rgba(83, 179, 190, 0.69);
  border: 1.1px solid rgba(219, 224, 137, 0.86);
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  @supports not (backdrop-filter: blur(20px)) {
    background-color: rgba(83, 179, 190, 0.85);
  }
`

export const ScreenLayoutNoGlass = styled(ScreenLayoutBase)`
  background: transparent;
  border: none;
  box-shadow: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
`
