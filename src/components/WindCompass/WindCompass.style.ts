import styled from 'styled-components';
import { GeneralColors } from '../../constants/GeneralColors';

export const CardinalDirections = styled.text`
  text-anchor: middle;
  fill: ${GeneralColors.black};
  font-size: .9rem;
  font-weight: 600;
`;

export const Circle = styled.circle`
  stroke: ${GeneralColors.black};
  fill: none;
  stroke-width: 2;
`;