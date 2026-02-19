import { Container, Label, Value } from './MoonInfoItem.style'

type Props = {
    label: string;
    value: string;
}

export function MoonInfoItem({ label, value }: Props) {
    return (
        <Container>
            <Value>{value}</Value>
            <Label>{label}</Label>
        </Container>
    )
}
