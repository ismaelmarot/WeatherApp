import type { ScreenLayoutBaseProps } from '../../types'
import { Container, Content } from './ScreenLayoutBase.style'

export function ScreenLayoutBase({ children }: ScreenLayoutBaseProps) {
    return (
        <Container>
            <Content>
                {children}
            </Content>
        </Container>
    )
}