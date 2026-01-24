import { Compass, Arrow, DirectionLabel, Speed } from './WindCompass.style';

type Props = {
  direction: string; // N, NE, SW, etc
  speed: number;     // km/h
};

export function WindCompass({ direction, speed }: Props) {
  const rotation = windDeg(direction);

  return (
    <div>
      <Compass>
        <DirectionLabel top>N</DirectionLabel>
        <DirectionLabel right>E</DirectionLabel>
        <DirectionLabel bottom>S</DirectionLabel>
        <DirectionLabel left>W</DirectionLabel>

        <Arrow style={{ transform: `rotate(${rotation}deg)` }} />
      </Compass>

      <Speed>{speed} km/h</Speed>
    </div>
  );
}

/**
 * Convierte N, NE, E, etc a grados
 */
function windDeg(dir: string): number {
  const map: Record<string, number> = {
    N: 0,
    NNE: 22.5,
    NE: 45,
    ENE: 67.5,
    E: 90,
    ESE: 112.5,
    SE: 135,
    SSE: 157.5,
    S: 180,
    SSW: 202.5,
    SW: 225,
    WSW: 247.5,
    W: 270,
    WNW: 292.5,
    NW: 315,
    NNW: 337.5,
  };

  return map[dir] ?? 0;
}
