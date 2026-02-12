import { Container, Label, Value, ArrowContainer, WindArrow } from './WindItem.style'
import { windDeg } from '../../constants/WindDeg'
import type { WindItemProps } from '../../types/WindItem.type'

export function WindItem({ windKph, windDir }: WindItemProps) {
  return (
    <Container>
      <Label>Wind</Label>
      <Value>
        {windKph} km/h
        <ArrowContainer>
          <WindArrow
            style={{ transform: `rotate(${windDeg(windDir) + 180}deg)` }}
          />
        </ArrowContainer>
      </Value>
    </Container>
  )
}
