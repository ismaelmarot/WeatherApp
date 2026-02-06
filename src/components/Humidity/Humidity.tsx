import { Container } from './Humidity.style'

type HumidityProps = {
  value: number;
};

export function Humidity({ value }: HumidityProps) {
  return (
    <Container>
      <span>Humidity: </span>
      <strong>{value}%</strong>
    </Container>
  );
}
