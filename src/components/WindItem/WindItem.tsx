import type { WindItemProps } from '../../types'
import { windRotation } from '../../utils'
import { Strong } from '../shared-styles'
import { Container, Label, Value, ArrowContainer, WindArrowIcon, WindSpeed } from './WindItem.style'

export function WindItem({
  windKph,
  windDir
}: WindItemProps) {
  const rotation = windRotation(windDir ?? 'N')

  return (
    <Container>
      <Label>Wind</Label>
      <Value>
        <ArrowContainer>
          <WindArrowIcon $rotation={rotation} />
        </ArrowContainer>
        <WindSpeed>
          {windKph} 
          <Strong>km/h</Strong>
        </WindSpeed>
      </Value>
    </Container>
  )
}