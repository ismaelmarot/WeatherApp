import type { WindCompassProps } from '../../types'
import { CARDINALS } from '../../constants'
import { WindCompassMarks, WindCompassSpeed, WindNeedle } from '..'
import { CardinalDirections, Circle, Container, Svg } from './WindCompass.style'

export function WindCompass({
  speed,
  degree
}: WindCompassProps) {

  const size = 260;
  const center = size / 2;
  const radius = 105;
  const rotation = degree + 90;

  return (
    <Container>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
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
        </Svg>
    </Container>
  )
}