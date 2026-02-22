import type { MoonInfoItemProps } from '../../types'
import { Container, Label, Value, Strong } from './MoonInfoItem.style'

export function MoonInfoItem({ label, value, item }: MoonInfoItemProps) {
    const moonInfoMatch = value.match(/^\d+/)
    const moonInfo = moonInfoMatch ? moonInfoMatch[0] : value

    return (
        <Container>
            <Label>{label}</Label>
            <Value>
                {moonInfo}
                <Strong>{item}</Strong>
            </Value>
        </Container>
    )
}
