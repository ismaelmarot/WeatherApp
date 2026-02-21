import type { HumidityProps } from '../../types'
import { Container, Label, Strong, Value } from '../shared-styles'

export function Humidity({ value }: HumidityProps) {
  return (
    <Container>
      <Label>Humidity</Label>
      <Value>{value} <Strong>%</Strong></Value>
    </Container>
  )
}