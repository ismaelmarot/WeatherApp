import type { PressureProps } from '../../types'
import { Container, HPA, Pressure, Title } from './PressureGauge.style'
import {
  PRESSURE_MIN,
  PRESSURE_MAX,
  PRESSURE_RADIUS,
  PRESSURE_STROKE,
} from '../../constants'
import { PRESSURE_COLORS } from '../../constants'
import { getArrowCoordinates } from '../../utils/pressure.utils'

export function PressureGauge({ value }: PressureProps) {
  const clamped = Math.min(Math.max(value, PRESSURE_MIN), PRESSURE_MAX)
  const percent = (clamped - PRESSURE_MIN) / (PRESSURE_MAX - PRESSURE_MIN)

  const circumference = 2 * Math.PI * PRESSURE_RADIUS

  const { x1, y1, x2, y2 } = getArrowCoordinates(percent)

  return (
    <Container>
      <Title>
        Pressure
      </Title>

      <svg viewBox='0 0 100 100' width='100'>
        {/* Scale rule tipe*/}
        <circle
          cx={50}
          cy={50}
          r={PRESSURE_RADIUS}
          fill='none'
          stroke={PRESSURE_COLORS.background}
          strokeWidth={PRESSURE_STROKE / 2}
          strokeDasharray='2 2'
        />

        {/* Pression upload*/}
        <circle
          cx={50}
          cy={50}
          r={PRESSURE_RADIUS}
          fill='none'
          stroke={PRESSURE_COLORS.fill}
          strokeWidth={PRESSURE_STROKE}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percent)}
          strokeLinecap='round'
          transform={`rotate(90 50 50)`}         
        />

        {/* Marker arrow */}
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={PRESSURE_COLORS.marker}
          strokeWidth='3'
          strokeLinecap='round'
        />

        {/* Central data */}
        <Pressure x={30} y={50}>
          {Math.round(value)}
        </Pressure>

        <HPA x={38} y={70}>
          hPa
        </HPA>
      </svg>
    </Container>
  )
}