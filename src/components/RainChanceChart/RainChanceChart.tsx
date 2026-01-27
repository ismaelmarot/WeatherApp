import type { RainChanceChartProps } from '../../types/RainChanceChart.type';
import { Container, Item } from './RainChanceChart.style';

export function RainChanceChart({ hours }: RainChanceChartProps) {
  return (
    <Container>
      {hours.map((h) => {
        const hourLabel = h.time.split(' ')[1].slice(0, 5);

        return (
          <Item key={h.time}>
            <span>{hourLabel}</span>
            <span>{Math.round(h.temp_c)}°C</span>
            <span>{h.chance_of_rain}% 🌧️</span>
          </Item>
        );
      })}
    </Container>
  );
}
