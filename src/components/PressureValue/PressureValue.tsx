import type { PressureProps } from '../../types'
import { Container, Label, Strong, Value } from '../shared-styles'

export function PressureValue({ value }: PressureProps) {
    return (
        <Container>
            <Label>Pressure</Label>
            <Value>{value} <Strong>mb</Strong></Value>
        </Container>
    )
}