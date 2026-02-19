import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const ScreensWrapper = styled.div`
  width: 100%;
`;

export const Screen = styled.section`
  ${flex('column','center','center')}
  ${size('100vw','100vh')}

  scroll-snap-align: start;

  font-size: 2rem;
  font-weight: 600;

  background: ${GENERAL_COLORS.black};
  border-bottom: 1px solid ${GENERAL_COLORS.black};

  &:nth-child(even) {
    background: ${GENERAL_COLORS.black}
  }
`