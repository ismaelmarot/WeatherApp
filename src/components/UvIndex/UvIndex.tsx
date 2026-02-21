import type { UvIndexProps } from '../../types'
import { Container, Label, Value } from '../shared-styles'

export function UvIndex({ value }: UvIndexProps) {
    return (
        <Container>
            <Label>UV Index</Label>
            <Value>{value}</Value>
        </Container>
    )
}