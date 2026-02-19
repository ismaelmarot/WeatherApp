import styled from 'styled-components'
import { flex } from '../../mixins'

export const BaseContainer = styled.section`
  ${flex('column','center','center')}
  min-height: 100dvh;
  width: 90%;
  margin: 10dvh 0;
  scroll-snap-align: start;

  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`

export const GlassContainer = styled(BaseContainer)`
  border: 1.1px solid rgba(219, 224, 137, 0.1);
  border-radius: 45px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);

  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);

  @supports not (backdrop-filter: blur(7px)) {
    background-color: rgba(83, 179, 190, .69);
  }
`

export const NoGlassContainer = styled(BaseContainer)`
  background: transparent;
  border: none;
  box-shadow: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
`

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 480px;
  padding: 16px 20px;
`