import { Container, Label, Value } from './VisibilityItem.style'

type Props = {
    visibilityKm: number;
}

export function VisibilityItem({ visibilityKm }: Props) {
    return (
        <Container>
            <Label>Visibility</Label>
            <Value>{visibilityKm} km</Value>
        </Container>
    )
}
