import styled from 'styled-components'
import { flex, size } from '../../mixins'

export const Container = styled.section`
  ${flex('column','center','center')}
  min-height: 100dvh;
  width: 80%;
  scroll-snap-align: start;

  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);

  border: 3px dashed red;
`

export const Content = styled.div`
  flex: 1;
  /* width: 100%; */
  ${size('90%','90%')}
  max-width: 480px;
  padding: 16px 20px;
  border: 3px dashed blue;
`

export const ScreenLayoutBase = styled.div`
  min-height: 100dvh;
  width: 100%;
  
  display: flex;
  flex-direction: column;

  /* GLASS */
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  border-radius: 0; /* mobile */
  
  @supports not (backdrop-filter: blur(20px)) {
    background: rgba(255, 255, 255, 0.85);
  }
`;
