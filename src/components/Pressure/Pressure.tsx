import type { PressureProps } from '../../types';
import { Container } from './Pressure.style';

export function Pressure({ value }: PressureProps) {
  const MIN = 950;
  const MAX = 1050;

  // Clamp seguro
  const clamped = Math.min(Math.max(value, MIN), MAX);
  const percent = (clamped - MIN) / (MAX - MIN);

  const radius = 40;
  const stroke = 6;
  const circumference = 2 * Math.PI * radius;

  const cx = 50;
  const cy = 50;

  // Ángulo del medidor: inicia abajo (90°) y recorre en sentido horario
  const angleDeg = 90 + percent * 360;
  const angleRad = (angleDeg * Math.PI) / 180;

  // Coordenadas de la punta de la flecha
  const markerLength = 10; // longitud de la flecha
  const x1 = cx + Math.cos(angleRad) * (radius - markerLength); // base de flecha
  const y1 = cy + Math.sin(angleRad) * (radius - markerLength);
  const x2 = cx + Math.cos(angleRad) * radius; // punta de flecha
  const y2 = cy + Math.sin(angleRad) * radius;

  return (
    <Container>
      <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>
        Pressure
      </span>

      <svg viewBox="0 0 100 100" width="100">
        {/* Escala tipo regla */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="#8da5beb8"
          strokeWidth={stroke / 2}
          strokeDasharray="2 4"
        />

        {/* Carga de presión desde el mínimo */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="#ca8223"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percent)}
          strokeLinecap="round"
          transform={`rotate(90 ${cx} ${cy})`}
          opacity={0.85}
        />

        {/* Flecha marcador */}
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#020b1e"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Valor central */}
        <text
          x={cx}
          y={cy + 2}
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#111827"
        >
          {Math.round(value)}
        </text>

        <text
          x={cx}
          y={cy + 16}
          textAnchor="middle"
          fontSize="10"
          fill="#6b7280"
        >
          hPa
        </text>
      </svg>
    </Container>
  );
}
