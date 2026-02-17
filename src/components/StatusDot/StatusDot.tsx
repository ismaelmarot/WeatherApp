import type { StatusDotProps } from '../../types'
import { StatusDotStyled } from './StatusDot.style'

export function StatusDot({ color }: StatusDotProps) {
  return <StatusDotStyled $color={color} />
}