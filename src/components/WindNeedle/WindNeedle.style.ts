import styled from 'styled-components'
import { GENERAL_COLORS } from '../../constants'

export const Needle = styled.polygon`
  fill: ${GENERAL_COLORS.white};
`

export const NeedleLine = styled.line`
  stroke-width: 6;
  stroke-linecap: round;
  stroke: ${GENERAL_COLORS.white};
`