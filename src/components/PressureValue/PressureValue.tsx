import type { PressureProps } from '../../types'
import { Container } from './PressureValue.style'

export function PressureValue({ value }: PressureProps) {
    return (
        <Container>
            <span>Pressure: </span>
            <strong>{value} mb</strong>
        </Container>
    )
}
