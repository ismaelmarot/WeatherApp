import { WindCompass } from '../WindCompass/WindCompass';

type WindProps = {
    speed: number;
    degree: number;
};

export function Wind({ speed, degree }: WindProps) {
  return (
    <>
      <span>Wind</span>
      <WindCompass speed={speed} degree={degree} />
    </>
  );
}
