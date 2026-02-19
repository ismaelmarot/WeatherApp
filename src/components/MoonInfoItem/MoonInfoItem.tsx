import type { MoonInfoItemProps } from '../../types'
import { Container, Label, Value } from './MoonInfoItem.style'

export function MoonInfoItem({ label, value }: MoonInfoItemProps) {
    return (
        <Container>
            <Value>{value}</Value>
            <Label>{label}</Label>
        </Container>
    )
}
