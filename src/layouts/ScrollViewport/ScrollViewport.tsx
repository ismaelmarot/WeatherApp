import { Viewport } from './ScrollViewport.style'

export function ScrollViewport({ children }: { children: React.ReactNode }) {
    return <Viewport>{children}</Viewport>
}