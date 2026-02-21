import { Container, Label, Value } from './UvIndex.style'

type UvIndexProps = {
    value: number;
};

export function UvIndex({ value }: UvIndexProps) {
    return (
        <Container>
            <Label>UV Index</Label>
            <Value>{value}</Value>
        </Container>
    );
}
