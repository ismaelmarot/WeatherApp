import type { WindCompassProps } from '../../types'
import { WindCompass } from '..'
import { Container, H3 } from './Wind.style'

export function Wind({
  speed,
  degree}: WindCompassProps) {
  return (
    <Container>
      <H3>Wind</H3>
      <WindCompass speed={speed} degree={degree} />
    </Container>
  )
}
