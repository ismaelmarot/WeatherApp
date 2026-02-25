import type { RainChanceChartProps } from '../../types'
import { Container, Header, List, Item, RainIcon, Span, HourTemp, Hour } from './RainChanceChart.style'

export function RainChanceChart({ hours }: RainChanceChartProps) {
  return (
    <Container>
      <Header>Rain Chance</Header>
      <List>
        {hours.map((h) => {
          const hourLabel = h.time.split(' ')[1].slice(0, 5);

          return (
            <Item key={h.time}>
              <HourTemp>
                <Hour>{hourLabel}</Hour>
                <span>{Math.round(h.temp_c ?? 0)}°C</span>
              </HourTemp>
              <Span>{h.chance_of_rain ?? 0}% <RainIcon /> </Span>
            </Item>
          )
        })}
      </List>
    </Container>
  )
}