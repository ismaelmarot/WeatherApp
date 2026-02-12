import type { HumidityProps } from '../../types';
import { Container } from './Humidity.style'

export function Humidity({ value }: HumidityProps) {
  return (
    <Container>
      <span>Humidity: </span>
      <strong>{value}%</strong>
    </Container>
  );
}
