import type { PressureProps } from '../../types'
import { Container, Label, Value, Strong } from './PressureValue.style'

export function PressureValue({ value }: PressureProps) {
    return (
        <Container>
            <Label>Pressure</Label>
            <Value>{value} <Strong>mb</Strong></Value>
        </Container>
    )
}