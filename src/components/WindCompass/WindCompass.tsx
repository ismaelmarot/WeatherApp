import { CARDINALS } from '../../constants/Cardinals';
import type { WindCompassProps } from '../../types/WindCompass.type';
import { WindCompassMarks } from '../WindCompassMarks/WindCompassMarks';
import { WindCompassSpeed } from '../WindCompassSpeed/WindCompassSpeed';
import { CardinalDirections, Circle } from './WindCompass.style';
import { WindNeedle } from '../WindNeedle/WindNeedle';

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
      <WindCompassMarks
        center={center}
        radius={radius}
      />
      {/* Cardinal */}
      {CARDINALS.map(({ label, x, y }) => (
        <CardinalDirections
          key={label}
          x={x(size, center)}
          y={y(size, center)}
        >
          {label}
        </CardinalDirections>
      ))}

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
