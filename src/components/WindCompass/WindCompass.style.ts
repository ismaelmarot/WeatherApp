import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
  ${flex('column','center','center')}
  ${size('100%','80%')}
`

export const CardinalDirections = styled.text`
  text-anchor: middle;
  font-size: 1.2rem;
  font-weight: 600;
  fill: ${GENERAL_COLORS.black};
`;

export const Circle = styled.circle`
  fill: none;
  stroke-width: 2;
  stroke: ${GENERAL_COLORS.black};
`;