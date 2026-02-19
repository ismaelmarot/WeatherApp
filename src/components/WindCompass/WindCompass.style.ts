import styled from 'styled-components'
import { flex } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
  ${flex('column','center','center')}
  border-radius: 50%;
  opacity: 0.6;
  background-color: ${GENERAL_COLORS.black};
`

export const CardinalDirections = styled.text`
  text-anchor: middle;
  font-size: 1rem;
  font-weight: 500;
  fill: ${GENERAL_COLORS.white};
`;

export const Circle = styled.circle`
  fill: none;
  stroke-width: 2;
  stroke: ${GENERAL_COLORS.white};
`;