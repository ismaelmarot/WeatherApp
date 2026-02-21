import { Container, Label, Value, Strong } from './VisibilityItem.style'

type Props = {
    visibilityKm: number;
}

export function VisibilityItem({ visibilityKm }: Props) {
    return (
        <Container>
            <Label>Visibility</Label>
            <Value>{visibilityKm}<Strong>km</Strong></Value>
        </Container>
    )
}
