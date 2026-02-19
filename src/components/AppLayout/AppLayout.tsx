
import { BackgroundVideo } from '../BackgroundVideo'
import { Container } from './AppLayout.style'

export function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <BackgroundVideo />
            <Container>{children}</Container>
        </>
    )
}