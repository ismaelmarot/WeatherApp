import styled from 'styled-components'
import { flex } from './mixins'

export function AppLayout({ children }: { children: React.ReactNode }) {
    return <Container>{children}</Container>
}

const Container = styled.div`
    ${flex('column','center','center')}
    min-height: 100dvh;

    /* Safe Area real */
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
`