import styled from 'styled-components'
import { flex } from '../../mixins'

export const Container = styled.section`
  ${flex('column','center','center')}
  min-height: 100dvh;
  width: 100%;
  scroll-snap-align: start;

  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 480px;
  padding: 16px 20px;
`
