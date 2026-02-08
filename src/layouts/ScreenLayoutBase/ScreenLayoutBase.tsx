import type { ScreenLayoutBaseProps } from '../../types'
import { Container } from './ScreenLayoutBase.style'

export function ScreenLayoutBase({ children }: ScreenLayoutBaseProps) {
    return <Container>{children}</Container>;
}