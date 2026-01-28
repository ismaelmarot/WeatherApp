import styled from 'styled-components';
import { GeneralColors } from '../../constants/GeneralColors';

export const Needle = styled.polygon`
  fill: ${GeneralColors.black};
`;

export const NeedleLine = styled.line`
  stroke: ${GeneralColors.black};
  stroke-width: 6;
  stroke-linecap: round;
`;
