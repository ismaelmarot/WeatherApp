import type { PressureProps } from '../../types';
import { Container } from './Pressure.style';

export function Pressure({ value }: PressureProps) {
  const MIN = 950;
  const MAX = 1050;

  const clamped = Math.min(Math.max(value, MIN), MAX);
  const percent = (clamped - MIN) / (MAX - MIN);

  const radius = 40;
  const stroke = 6;

  const angle = percent * 360;

  return (
    <Container>
      <svg viewBox="0 0 100 100" width="100">
        {/* Círculo base rayado */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray="4 6"
        />

        {/* Mini barrita indicadora */}
        <g transform={`rotate(${angle + 90} 50 50)`}>
          <line
            x1='50'
            y1='10'
            x2='50'
            y2='22'
            stroke="#111827"
            strokeWidth='3'
            strokeLinecap='round'
          />
        </g>

        {/* Valor central */}
        <text
          x='50'
          y='52'
          textAnchor='middle'
          fontSize='14'
          fontWeight='600'
          fill='#111827'
        >
          {Math.round(value)}
        </text>

        <text
          x='50'
          y='66'
          textAnchor='middle'
          fontSize='10'
          fill='#6b7280'
        >
          hPa
        </text>
      </svg>

      <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>
        Pressure
      </span>
    </Container>
  );
}
