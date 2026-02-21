import type { VisibilityItemProps } from '../../types'
import { Container, Label, Strong, Value } from '../shared-styles'

export function VisibilityItem({ visibilityKm }: VisibilityItemProps) {
    return (
        <Container>
            <Label>Visibility</Label>
            <Value>{visibilityKm}<Strong>km</Strong></Value>
        </Container>
    )
}