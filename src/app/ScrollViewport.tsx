import styled from 'styled-components'

const Viewport = styled.div`
    height: 100dvh;
    width: 100%;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    border: 3px solid red;
`

export function ScrollViewport({ children }: { children: React.ReactNode }) {
    return <Viewport>{children}</Viewport>
}