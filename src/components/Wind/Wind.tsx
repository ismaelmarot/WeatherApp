import { WindCompass } from '../WindCompass/WindCompass'
import { Container, H3 } from './Wind.style'

type WindProps = {
    speed: number;
    degree: number;
};

export function Wind({ speed, degree }: WindProps) {
  return (
    <Container>
      <H3>Wind</H3>
      <WindCompass speed={speed} degree={degree} />
    </Container>
  );
}
