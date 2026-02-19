import styled from 'styled-components'
import { size } from '../../mixins'

export const Container = styled.main`
  ${size('100vw','100vh')}
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;
