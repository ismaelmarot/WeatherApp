import type { MoonInfoItemProps } from '../../types'
import { Container, Label, Value, Strong } from './MoonInfoItem.style'

export function MoonInfoItem({ label, value, item }: MoonInfoItemProps) {
    const moonInfo = value.split(' ')[0]

    return (
        <Container >
            <Label>{label}</Label>
            <Value>
                {moonInfo}
                <Strong>{item}</Strong>
            </Value>
        </Container>
    )
}