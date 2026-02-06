import { Container } from './UvIndex.style'

type UvIndexProps = {
    value: number;
};

export function UvIndex({ value }: UvIndexProps) {
    return (
        <Container>
            <span>☀️ UV Index: </span>
            <strong>{value}</strong>
        </Container>
    );
}
