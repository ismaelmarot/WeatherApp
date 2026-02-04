import type { PressureProps } from '../../types';
import { Container } from './Pressure.style';
import {
  PRESSURE_MIN,
  PRESSURE_MAX,
  PRESSURE_RADIUS,
  PRESSURE_STROKE,
} from '../../constants/index';
import { PRESSURE_COLORS } from '../../constants/pressureColors.constants';
import { getArrowCoordinates } from '../../utils/pressure.utils';

export function Pressure({ value }: PressureProps) {
  const clamped = Math.min(Math.max(value, PRESSURE_MIN), PRESSURE_MAX);
  const percent = (clamped - PRESSURE_MIN) / (PRESSURE_MAX - PRESSURE_MIN);

  const circumference = 2 * Math.PI * PRESSURE_RADIUS;

  const { x1, y1, x2, y2 } = getArrowCoordinates(percent);

  return (
    <Container>
      <span style={{ fontSize: '0.8rem', color: PRESSURE_COLORS.label }}>
        Pressure
      </span>

      <svg viewBox='0 0 100 100' width='100'>
        {/* Escala tipo regla */}
        <circle
          cx={50}
          cy={50}
          r={PRESSURE_RADIUS}
          fill='none'
          stroke={PRESSURE_COLORS.background}
          strokeWidth={PRESSURE_STROKE / 2}
          strokeDasharray='2 2'
        />

        {/* Carga de presión */}
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

        {/* Flecha marcador */}
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={PRESSURE_COLORS.marker}
          strokeWidth='3'
          strokeLinecap='round'
        />

        {/* Valor central */}
        <text
          x={50}
          y={52}
          textAnchor='middle'
          fontSize='14'
          fontWeight='600'
          fill={PRESSURE_COLORS.text}
        >
          {Math.round(value)}
        </text>

        <text
          x={50}
          y={66}
          textAnchor='middle'
          fontSize='10'
          fill={PRESSURE_COLORS.unit}
        >
          hPa
        </text>
      </svg>
    </Container>
  );
}
