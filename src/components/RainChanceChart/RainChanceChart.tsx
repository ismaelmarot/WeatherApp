import type { RainChanceChartProps } from '../../types/RainChanceChart.type'
import { Container, Item, RainIcon } from './RainChanceChart.style'

export function RainChanceChart({ hours }: RainChanceChartProps) {
  return (
    <Container>
      <h3>Rain Chance</h3>

      {hours.map((h) => {
        const hourLabel = h.time.split(' ')[1].slice(0, 5);

        return (
          <Item key={h.time}>
            <span>{hourLabel}</span>
            <span>{Math.round(h.temp_c ?? 0)}°C</span>
            <span>{h.chance_of_rain ?? 0}% <RainIcon /> </span>
          </Item>
        );
      })}
    </Container>
  )
}
