import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GeneralColors } from '../../constants/GeneralColors'

export const Container = styled.div`
  ${flex('column','center','center')}
  ${size('100%','80%')}
`

export const CardinalDirections = styled.text`
  text-anchor: middle;
  font-size: 1.2rem;
  font-weight: 600;
  fill: ${GeneralColors.black};
`;

export const Circle = styled.circle`
  stroke: ${GeneralColors.black};
  fill: none;
  stroke-width: 2;
`;