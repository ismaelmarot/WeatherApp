import type { WindCompassProps } from '../../types/WindCompass.type';
import { WindCompassMarks } from '../WindCompassMarks/WindCompassMarks';
import { WindCompassSpeed } from '../WindCompassSpeed/WindCompassSpeed';
import { WindNeedle } from '../WindNeedle/WindNeedle';
import { CardinalDirections, Circle } from './WindCompass.style';

export function WindCompass({ speed, degree }: WindCompassProps) {
  const size = 180;
  const center = size / 2;
  const radius = 70;
  const rotation = degree + 90;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* External Ring */}
      <Circle
        cx={center}
        cy={center}
        r={radius}
      />
       {/* Marks */}
      <WindCompassMarks center={center} radius={radius} />
      {/* Cardinal */}
      <CardinalDirections x={center} y={16}>
        N
      </CardinalDirections>
      <CardinalDirections x={size -12} y={center + 5}>
        E
      </CardinalDirections>
      <CardinalDirections x={center} y={size - 6}>
        S
      </CardinalDirections>
      <CardinalDirections x={9} y={center + 5}>
        W
      </CardinalDirections>

      {/* Speed */}
      <WindCompassSpeed
        center={center}
        speed={speed}
      />
      {/* Needle */}
       <WindNeedle
        center={center}
        radius={radius}
        rotation={rotation}
      />
    </svg>
  );
}
