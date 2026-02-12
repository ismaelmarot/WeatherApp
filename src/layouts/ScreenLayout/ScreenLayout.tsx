import type { ScreenLayoutBaseProps } from '../../types'
import {
    GlassContainer,
    NoGlassContainer,
    Content,
} from './ScreenLayout.style'

function Layout({
    children,
    Container,
}: ScreenLayoutBaseProps & { Container: React.ElementType }) {
    return (
        <Container>
            <Content>{children}</Content>
        </Container>
    )
}

export function ScreenLayoutGlass({ children }: ScreenLayoutBaseProps) {
    return <Layout Container={GlassContainer}>{children}</Layout>
}

export function ScreenLayoutNoGlass({ children }: ScreenLayoutBaseProps) {
    return <Layout Container={NoGlassContainer}>{children}</Layout>
}