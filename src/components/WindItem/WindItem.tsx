import { Container, Label, Value, ArrowContainer, WindArrowIcon } from './WindItem.style'
import type { WindItemProps } from '../../types/WindItem.type'
import { windRotation } from '../../utils'


export function WindItem({ windKph, windDir }: WindItemProps) {
  const rotation = windRotation(windDir ?? 'N')

  return (
    <Container>
      <Label>Wind</Label>
      <Value>
        <ArrowContainer>
          <WindArrowIcon $rotation={rotation} />
        </ArrowContainer>
        {windKph} km/h
      </Value>
    </Container>
  )
}
