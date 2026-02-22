import type { ScreenContainerProps } from '../../types'
import { Container } from './ScreenContainer.style'

export function ScreenContainer({ children }: ScreenContainerProps) {
  return <Container>{children}</Container>;
}