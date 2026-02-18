import type { RainChanceChartProps } from '../../types'
import { Container,Header, List, Item, RainIcon } from './RainChanceChart.style'

export function RainChanceChart({ hours }: RainChanceChartProps) {
  return (
    <Container>
      <Header>Rain Chance</Header>
      <List>
        {hours.map((h) => {
          const hourLabel = h.time.split(' ')[1].slice(0, 5);

          return (
            <Item key={h.time}>
              <span>{hourLabel}</span>
              <span>{Math.round(h.temp_c ?? 0)}°C</span>
              <span>{h.chance_of_rain ?? 0}% <RainIcon /> </span>
            </Item>
          )
        })}
      </List>
    </Container>
  )
}
